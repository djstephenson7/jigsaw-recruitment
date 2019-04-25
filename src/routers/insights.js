const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const url = 'https://transactions.spokedev.xyz/transactions'

const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
    return(json)
  } catch (err) {
    console.log(err);
  }
}
getData(url)

router.get('/categories', async (req, res, next) => {
  try {
    const result = await getData(url);
    res.status(200).send(result)
    // res.status(501).json({ message: 'Not Implemented' });
  } catch (err) {
    return next(err);
  }
});

router.get('/cashflow', async (req, res, next) => {
  try {
    res.status(501).json({ message: 'Not Implemented' });
  } catch (err) {
    return next(err);
  }
});

router.get('/merchants', async (req, res, next) => {
  try {
    res.status(501).json({ message: 'Not Implemented' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
