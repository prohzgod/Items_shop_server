import express from 'express'
import cors from 'cors' 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import items from './routers/Items.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const URI = process.env.DATABASE_URL;

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/items', items);

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('connect to DB');
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log('err', err);
});

