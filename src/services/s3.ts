import dotenv from 'dotenv';
import AWS from 'aws-sdk';
import path from 'path';
import fs from 'fs';
import { __ } from 'i18n';

dotenv.config();

const S3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const s3Bucket = 'dev-path-bucket';

const folderPath = path.join(process.cwd(), 'src', 'public');
const filesToUpload = ['temp.csv', 'temp copy.csv'];

export class S3Service {
  static uploadFile = async function() {
    fs.readdir(folderPath, (err, files) => {
      for (const fileName of files) {
        const filePath = path.join(folderPath, fileName);

        // ignore if it's directory or other file
        if (
          fs.lstatSync(filePath).isDirectory() ||
          filesToUpload.includes(fileName) == false
        ) {
          continue;
        }

        // read file content
        fs.readFile(filePath, async (error, fileContent) => {
          if (err) throw err;
          await S3.putObject(
            {
              Bucket: s3Bucket,
              Key: fileName,
              Body: fileContent,
            },
            err => {
              if (err) throw err;
              console.log(`Successfully uploaded '${fileName}'`);
            },
          );
        });
      }
    });
  };

  static deleteFile = async function() {
    filesToUpload.forEach(async fileName => {
      const params = {
        Bucket: s3Bucket,
        Key: fileName,
      };
      try {
        await S3.headObject(params).promise();
        try {
          await S3.deleteObject(params).promise();
          console.log(`Successfully deleted '${filesToUpload}'`);
        } catch (err) {
          throw err;
        }
      } catch (err) {
        console.log('File not found, error: ', err.code);
      }
    });
  };

  static showAllObjects = async function() {
    const response = await S3.listObjectsV2({
      Bucket: s3Bucket,
    }).promise();

    return response;
  };

  static getUrl = async function() {
    const s3BucketObj = new AWS.S3({
      signatureVersion: 'v4',
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
      // Bucket: 'dev-path-bucket',
    });

    let url: any = [];
    filesToUpload.forEach(fileName => {
      url.push(
        s3BucketObj.getSignedUrl('getObject', {
          Bucket: s3Bucket,
          Key: fileName,
          Expires: 25,
        }),
      );
    });

    console.log(url);
    return url;
  };
}
