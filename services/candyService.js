const Candy = require('../data/data').candies;

const candyService = () => {
  const getAllCandies = () => {
    return Candy;
  };

  const getCandyById = (candyId) => {
    var candy = Candy.filter(f => f.id == candyId);
    return candy[0];
  };

  const createCandy = (candy) => {
    var nextId = 0;
    var i;
    for(i = 0; i < Candy.length; i++){
      if(Candy[i].id >= nextId){
        nextId = Candy[i].id + 1;
      }
    }
    var val = new Object();
    val.id = nextId;
    val.name = candy.name;
    val.description = candy.description;
    Candy.push(val);
    return val;
  };

  return {
    getAllCandies,
    getCandyById,
    createCandy
  };

};

module.exports = candyService();
