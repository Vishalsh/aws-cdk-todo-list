import { Bucket, BucketEncryption } from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class AwsCdkTodoListStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'TodoListBucket', {
      encryption: BucketEncryption.S3_MANAGED
    });

    new cdk.CfnOutput(this, 'TodoListBucketNameExport', {
      value: bucket.bucketName,
      exportName: 'TodoListBucketName'
    });
  }
}
