const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
    console.log("Setting up email transporter...");
    
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    console.log("Transporter configured, sending email...");

    const mailOptions = {
        from: options.from || `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!"); // ✅ Use console.log instead
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

module.exports = sendEmail;
