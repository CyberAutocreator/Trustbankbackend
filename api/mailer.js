const nodemailer = require('nodemailer');

const sendTransactionAlert = async (userEmail, type, amount, balance) => {
    // Configuration for your mail server
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: '"Trust Bank Alert" <no-reply@trustbank.com>',
        to: userEmail,
        subject: `Transaction Alert [${type.toUpperCase()}]`,
        html: `
            <div style="font-family: Arial, sans-serif; border: 1px solid #ddd; padding: 20px;">
                <h2 style="color: #333;">Trust Bank Transaction Alert</h2>
                <p>A <strong>${type}</strong> transaction occurred on your account.</p>
                <hr/>
                <p><strong>Amount:</strong> $${amount}</p> 
                <p><strong>New Balance:</strong> $${balance}</p>
                <p><strong>Currency:</strong> USD (United States Dollars)</p>
                <hr/>
                <p>If you did not authorize this, please contact support immediately.</p>
            </div>
        `
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendTransactionAlert };
