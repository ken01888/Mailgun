import * as express from 'express';
import Contacts from './contact'

const router = express.Router();

router.use('/contact',Contacts)


export default router; 