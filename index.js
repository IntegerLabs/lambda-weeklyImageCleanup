import { getRecords } from "./utils/dynamodb.js";
import cloudinary from "./utils/configs/cloudinary.js";

export const handler = async (event = {}) => {
  try {
    const records = await getRecords("tempImageDetails-dev", "fileName");
    const existingFileNames = records.map((record) => record.fileName);
    await cloudinary.api.delete_resources(existingFileNames, {
      type: "upload",
      resource_type: "image",
    });
  } catch (error) {
    throw new Error(error.message || "Failed to process event");
  }
};
