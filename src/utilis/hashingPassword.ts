import bcrypt from "bcrypt";
export const hashedPassword = async (password: string) => {
  try {
    const salt  = await  bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt);
  } catch (error: any) {
    throw Error(error);
  }
};
