const candyService = require('./services/candyService');
const offerService = require('./services/offerService');
const pinataService = require('./services/pinataService');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

// GET api/candies - gets all candies
app.get('/api/candies', (req, res) => {
  return res.json(candyService.getAllCandies());
});

// POST api/candies - creates new candy - return created model with status code
app.post('/api/candies', (req, res) => {
  return res.status(200).json(candyService.createCandy(req.body));
});

// GET api/candies/:id - get candy with :id
app.get('/api/candies/:candyId', (req, res) => {
  return res.json(candyService.getCandyById(req.params.candyId));
});

// GET api/offers - get all offers within application
app.get('/api/offers', (req, res) => {
  // call offerService.getAllOffers();
  return res.json(offerService.getAllOffers());
});

// GET api/pinatas - get all pinatas within application
app.get('/api/pinatas', (req, res) => {
  // call pinataService.getAllPinatas();
  return res.json(pinataService.getAllPinatas());
});

// GET api/pinatas/:id - get pinata with :id
app.get('/api/pinatas/:pinataId', (req, res) => {
  return res.json(pinataService.getPinataById(req.params.pinataId));
});

// POST api/pinatas - creates new pinata
app.post('/api/pinatas', (req, res) => {
  return res.status(200).json(pinataService.createPinata(req.body));
});


app.put('/api/pinatas/:pinataId/hit', (req, res) => {
  const resStatus = pinataService.hitPinataById(req.params.pinataId);
  //Hit limit reached
  if(resStatus === -1) {
    return res.status(423).send();
  }
  //Hit success
  else if(resStatus === 0) {
    return res.status(204).send();
  }
  //Final blow
  else if(resStatus === 1) {
    return res.status(200).send();
  }
  else {
    return res.json(resStatus);
  }
});

// ??? api/pinata/:id/hit - hits pinata with with :id (until hit limit has been reached)

// Don't know that the fuck we're supposed to do here...


app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
