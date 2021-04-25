import * as express from 'express';
import * as Mailgun from 'mailgun.js';
import * as FormData from 'form-data';
import MailGun from 'mailgun.js';
import config from '../../config'


const mailgun = new (<typeof MailGun>(<any>Mailgun))(<any>FormData).client({
    username:'api',
    key:config.mailgun.apiKey
});

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello")
})

router.post('/',async (req,res)=>{
    const newEmail = req.body;

    try {
        const result = await mailgun.messages.create(config.mailgun.domain,{
            to:config.mailgun.email,
            subject: newEmail.subject,
            from: newEmail.from,
            text: newEmail.message
            
        })
        res.json(result)
    } catch (error) {
        res.send(500).json({message:'We Have an error'});
    }
})






export default router; 