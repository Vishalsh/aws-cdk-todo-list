#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkTodoListStack } from '../lib/aws-cdk-todo-list-stack';

const app = new cdk.App();
new AwsCdkTodoListStack(app, 'AwsCdkTodoListStack');
