const Candy = require('../data/data').candies;
const Offer = require('../data/data').offers;
const candyService = require('./candyService');

const offerService = () => {
  const getAllOffers = () => {
    var i;
    for(i = 0; i < Offer.length; i++){
      var j;
      for(j = 0; j < Offer[i].candies.length; j++){
        Offer[i].candies[j] = candyService.getCandyById(Offer[i].candies[j]);
      }
    }
    return Offer;
  };

  return {
    getAllOffers
  };

};

module.exports = offerService();
