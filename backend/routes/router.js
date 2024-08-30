import express from 'express';
import pg from 'pg';
import 'dotenv/config';
const { Client } = pg; 

const pgClient = new Client(process.env.DB_URL);

await pgClient.connect();

const router = express.Router();

router.get('/coffeeItems', async (req, res) => {

  const result = await pgClient.query('select * from coffee_items');

  console.log('----- results from call to db ----');
  console.log(result.rows);
  
  res.send(result);
});

router.get('/getDealItems', async (req, res) => {

  const result = await pgClient.query('select * from deal_items');

  console.log('----- results from call to db ----');
  console.log(result.rows);
  
  res.send(result);
});

router.get('/getTeaItems', async (req, res) => {

  const result = await pgClient.query('select * from tea_items');

  console.log('----- results from call to db ----');
  console.log(result.rows);
  
  res.send(result);
});

router.get('/getAccessoryItems', async (req, res) => {

  const result = await pgClient.query('select * from accessory_items');

  console.log('----- results from call to db ----');
  console.log(result.rows);
  
  res.send(result);
});

export default router;