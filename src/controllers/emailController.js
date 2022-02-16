require('dotenv').config();
//dùng nodemailler https://nodemailer.com/about/
//link huong dan https://www.youtube.com/watch?v=nF9g1825mwk
import nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // create reusable transporter object using the default SMTP transport

}

let sendSimpleEmail = async (email,token) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.APP_EMAIL, // generated ethereal user
            pass: process.env.APP_PASSWORD, // generated ethereal password
            // user: process.env.EMAIL_APP, // generated ethereal user
            // pass: process.env.EMAIL_APP_PASSWORD, 

        },
    });

    // send mail with defined transport object aopqnknntywfvksv
    let info = await transporter.sendMail({
        from: '"NguyenNhon "<nhonnguyen2192@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Account activation", // Subject line
        text: "Hello world", // plain text body
        html: `
        <h3>Xin chào!</h3>
        <p>Vui lòng click vào link bên dưới để kích hoạt tài khoản của bạn</p>
        <p>${process.env.CLIENT_URL}/auth/email-activate/${token}</p>
        `, // html body
    });
}
let sendEmailForgotPassword = async (email,token) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.APP_EMAIL, // generated ethereal user
            pass: process.env.APP_PASSWORD, // generated ethereal password
            // user: process.env.EMAIL_APP, // generated ethereal user
            // pass: process.env.EMAIL_APP_PASSWORD, 

        },
    });

    // send mail with defined transport object aopqnknntywfvksv
    let info = await transporter.sendMail({
        from: '"NguyenNhon "<nhonnguyen2192@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "New password", // Subject line
        text: "Lost your password?", // plain text body
        html: `
        <h3>Xin chào!</h3>
        <p>Click vào link sau để thay đổi password</p>
        <p>${process.env.CLIENT_URL}/auth/newpassword/${token}</p>
        `, // html body
    });
}


module.exports = {
    sendSimpleEmail: sendSimpleEmail,
    sendEmailForgotPassword: sendEmailForgotPassword,
}