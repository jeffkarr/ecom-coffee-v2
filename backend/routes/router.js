import express from 'express';
import pg from 'pg';
import 'dotenv/config';
const { Client } = pg; 

const pgClient = new Client(process.env.DB_URL);

await pgClient.connect();

const router = express.Router();

router.get('/getCoffeeItems', async (req, res) => {
  try {
    const result = await pgClient.query('select * from coffee_items');

    console.log('----- results from call to db ----');
    console.log(result.rows);
    
    res.send(result);
  } catch(err) {
    res.send(`Error encountered on /getCoffeeItems route. - ${err}`);  
  }
});

router.get('/getDealItems', async (req, res) => {
  try {
    const result = await pgClient.query('select * from deal_items');

    console.log('----- results from call to db ----');
    console.log(result.rows);
    
    res.send(result);
  } catch(err) {
    res.send(`Error encountered on /getDealItems route. - ${err}`);  
  }
});

router.get('/getTeaItems', async (req, res) => {
  try {
    const result = await pgClient.query('select * from tea_items');

    console.log('----- results from call to db ----');
    console.log(result.rows);
    
    res.send(result);
  } catch(err) {
    res.send(`Error encountered on /getTeaItems route. - ${err}`);  
  }
});

router.get('/getAccessoryItems', async (req, res) => {
  try {
    const result = await pgClient.query('select * from accessory_items');

    console.log('----- results from call to db ----');
    console.log(result.rows);
    
    res.send(result);
  } catch(err) {
    res.send(`Error encountered on /getAccessoryItems route. - ${err}`);  
  }
});

export default router;