const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const rp = require('request-promise');

const url = 'https://transactions.spokedev.xyz/transactions';

async function request(httpfunction, path) {
  return httpfunction({
    url: path,
    method: 'GET',
    json: true,
    resolveWithFullResponse: true, // promise resolves with full response not just body.
    simple: false   // ensures promise resolves even if statusCode is not 200 series.
  });
}

const getData = async url => {
  try {
    const response = await request(url)
    return response.body;
  } catch (err) {
    console.log(err);
  }
}
getData(url)

router.get('/categories', async (req, res, next) => {
  try {
    const result = await getData(rp, url);
    res.status(200).send(result)
    // 1. Get data by category
    // 2. return an object wit 'totalNumber': amount of transactions
    //  - 'totalValue': total cost of transactions
    //  - 'averageValue': toalValue / TotalNumber
    //
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
