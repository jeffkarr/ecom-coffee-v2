import express from 'express';
import pg from 'pg';
const { Client } = pg; 

import 'dotenv/config';

const pgClient = new Client(process.env.DB_URL);

await pgClient.connect();

const router = express.Router();

router.get('/coffeeItems', async (req, res) => {

  // await pgClient.connect();
 
  const result = await pgClient.query('select * from coffee_items');

  console.log('----- results from call to db ----');
  console.log(result.rows);
  
  res.send(result);
});

router.get('/getDealItems', async (req, res) => {

  // await pgClient.connect();
 
  const result = await pgClient.query('select * from deal_items');

  console.log('----- results from call to db ----');
  console.log(result.rows);
  
  res.send(result);
});

export default router;