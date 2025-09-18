import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

// Ensure required environment variables are present
if (!process.env.AWS_REGION) {
  throw new Error("AWS_REGION is not set in environment variables.");
}

const config = {
  region: process.env.AWS_REGION,
};

const client = new DynamoDBClient(config);
export const dynamo = DynamoDBDocumentClient.from(client);
