import jwt from "jsonwebtoken";
export const generateToken = async (user: any) => {
  try {
    const token = jwt.sign(user, "hello", { expiresIn: "24h" });
    return token;
  } catch (error: any) {
    throw Error(error);
  }
};
