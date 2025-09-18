import { PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { dynamo } from "../utils/configs/dynamodb.js";

export async function getRecords(tableName, projectionExpression) {
  try {
    const command = new ScanCommand({
      TableName: tableName,
      ProjectionExpression: projectionExpression,
    });
    const result = await dynamo.send(command);
    return result.Items;
  } catch (error) {
    console.error("Error fetching records:", error);
    throw new Error(error.message || "Failed to fetch records");
  }
}

export async function createRecord(tableName, item) {
  try {
    const command = new PutCommand({
      TableName: tableName,
      Item: item,
    });
    await dynamo.send(command);
  } catch (error) {
    console.error("Error creating record:", error);
    throw new Error(error.response.data || "Failed to create record");
  }
}