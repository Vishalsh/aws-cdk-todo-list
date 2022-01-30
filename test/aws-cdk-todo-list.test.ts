import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import '@aws-cdk/assert/jest';
import * as AwsCdkTodoList from '../lib/aws-cdk-todo-list-stack';

test('TodoList stack creates a S3 bucket', () => {
    const app = new cdk.App();
    const stack = new AwsCdkTodoList.AwsCdkTodoListStack(app, 'MyTestStack');

    expect(stack).toHaveResource('AWS::S3::Bucket');
});
