import express from 'express'
import { getItems, createItem, updateItem } from '../controllers/Items.js'

const router = express.Router();
//http://localhost:5000/items

router.get('/', getItems);

router.post('/', createItem);

router.post('/update', updateItem);

export default router;