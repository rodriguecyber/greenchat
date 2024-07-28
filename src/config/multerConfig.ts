import { Request } from "express";
import multer from "multer";

const storage = multer.diskStorage({
  filename: function (
    req: Request,
    file: any,
    cb: (error: Error | null, filename: string) => void
  ) {
    cb(null, file.originalname);
  },
});

export const uploadService = multer({ storage: storage });
