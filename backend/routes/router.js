import express from 'express';
import pg from 'pg';
import 'dotenv/config';
const { Pool } = pg; 

const apiEnvironment = process.env.NODE_ENV;
let poolCfg = {};
if (apiEnvironment === 'production') {
  poolCfg = {
    user: process.env.PROD_DB_USER,
    database: process.env.PROD_DB_NAME,
    password: process.env.PROD_DB_PASSWORD,
    port: process.env.PROD_DB_PORT,
    host: process.env.PROD_DB_HOST
  };
} else {
  poolCfg = {
    user: process.env.DEV_DB_USER,
    database: process.env.DEV_DB_NAME,
    password: process.env.DEV_DB_PASSWORD,
    port: process.env.DEV_DB_PORT,
    host: process.env.DEV_DB_HOST
  };
}
const pgClient = new Pool(poolCfg);

const router = express.Router();

router.get('/getCoffeeItems', async (req, res) => {
  try {
    const result = await pgClient.query('SELECT * FROM coffee_items');
    console.log(`----- results from call to /getCoffeeItems: ${result.rows.length} `);
    
    res.send(result);
  } catch(err) {
    res.send(`Error encountered on /getCoffeeItems route. - ${err}`);  
  }
});

router.get('/getDealItems', async (req, res) => {
  try {
    const result = await pgClient.query('select * from deal_items');
    console.log(`----- results from call to /getDealItems: ${result.rows.length} `);
    
    res.send(result);
  } catch(err) {
    res.send(`Error encountered on /getDealItems route. - ${err}`);  
  }
});

router.get('/getTeaItems', async (req, res) => {
  try {
    const result = await pgClient.query('select * from tea_items');
    console.log(`----- results from call to /getTeaItems: ${result.rows.length} `);
    
    res.send(result);
  } catch(err) {
    res.send(`Error encountered on /getTeaItems route. - ${err}`);  
  }
});

router.get('/getAccessoryItems', async (req, res) => {
  try {
    const result = await pgClient.query('select * from accessory_items');
    console.log(`----- results from call to /getAccessoryItems: ${result.rows.length} `);
    
    res.send(result);
  } catch(err) {
    res.send(`Error encountered on /getAccessoryItems route. - ${err}`);  
  }
});

export default router;