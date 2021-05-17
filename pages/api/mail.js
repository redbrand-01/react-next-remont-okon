const nodemailer = require('nodemailer')

const handler = async (req, res) => {
    const name = req.body.name
    const phone = req.body.email
    const text = req.body.text

    res.setHeader('Content-Type', 'application/json')

    const Data = (
      `
      <h2>Имя: ${name} </h2><hr/>
      <h2>Номер телефона: ${phone}  </h2><hr/>
      <h2><pre>Текст: ${text}  </pre><hr/></h2>
      `
    )

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'teplyidom.perm@gmail.com',
            pass: '2262874Zxc'
        }
      })
    
      try {
        await transporter.sendMail({
          from: 'Тестовые сообщения',
          to: 'teplyidom.perm@gmail.com', // почта куда отправляем
          subject: `Заказ от : ${name}`, // шапка
          html: Data,
        })
    
        res.statusCode = 200
        res.end()
    
      } catch (e) {
        res.statusCode = 400
        res.end()
    
      }
}

export default handler