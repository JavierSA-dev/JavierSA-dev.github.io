
const { Router } = require('express')
const router = Router();
const nodemailer = require('nodemailer');


router.post('/send-email', async (req, res) => {
  console.log("esfd")

    const {name, email, message} = req.body;
    
    contentHTML = `
        <h1>Informacion del usuario</h1>
        <p>Nombre ${name}</p> 
        <p>Email ${email}</p>
        <h2>Mensaje</h2>
        <p>${message}</p>
    `;


    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: '587',
        secure: false,
        auth: {
            user: 'javilondo56@gmail.com',
            pass: 'zimdufommvohcynl'
        }
    })

    const info = await transporter.sendMail({
        from: "'Test email",
        to: 'javilondo56@gmail.com',
        subject: 'Contacto',
        html: contentHTML
    });

    console.log(info.messageId)

    res.send('Enviado')
})

module.exports = router