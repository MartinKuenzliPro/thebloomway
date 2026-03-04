const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const params = new URLSearchParams(event.body);
    const name = params.get('name') || '';
    const email = params.get('email') || '';
    const message = params.get('message') || '';

    if (!name || !email || !message) {
        return { statusCode: 400, body: 'Fehlende Felder' };
    }

    const transporter = nodemailer.createTransport({
        host: 'asmtp.mail.hostpoint.ch',
        port: 465,
        secure: true,
        auth: {
            user: 'contact@thebloomway.ch',
            pass: process.env.SMTP_PASS
        }
    });

    await transporter.sendMail({
        from: `"The Bloom Way" <contact@thebloomway.ch>`,
        to: 'contact@thebloomway.ch',
        replyTo: email,
        subject: `Neue Anfrage von ${name}`,
        text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`
    });

    return { statusCode: 200, body: 'OK' };
};
