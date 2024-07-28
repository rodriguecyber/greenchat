import cloudinaryConfig from "../config/cloudinary";

export const uploadImage = async (file: any) => {
  try {
    const result = cloudinaryConfig.uploader.upload(file.pathname);
    return (await result).secure_url;
  } catch (error: any) {
    throw Error(error);
  }
};
