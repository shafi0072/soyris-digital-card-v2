// utils/awsConfig.js
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'AKIAXH4K5QG6S55K7DBG',
  secretAccessKey: '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',
  region: "us-east-1",
});

const s3 = new AWS.S3();

export default s3;
