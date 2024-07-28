import nodemailer from 'nodemailer'
import env from '../config/env'
 export interface IEmail {
receiver:string,
subject:string,
text:string
}
export const sendEmail =async (email:IEmail)=>{
    try {
       let transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
           user: env.EMAIL_USER,
           pass: env.EMAIL_PASSWORD,
         },
       });
       let mailOptions = {
         from: env.EMAIL_USER,
         to: email.receiver,
         subject: email.subject,
         text: email.text,
       }; 
     await  transporter.sendMail(mailOptions)
     return ({status:200,message:"email sent"})
    } catch (error:any) {
       return { status: 500, message:`Error ${error.message} Occured` };
    }
}