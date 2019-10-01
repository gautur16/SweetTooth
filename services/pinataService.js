const Pinata = require('../data/data').pinatas;

var i;
for(i = 0; i < Pinata.length; i++){
  Pinata[i].currentHits = 0;
}

const pinataService = () => {
  // Implement constructor that sets current pinata hits to zero.
  const getAllPinatas = () => {
    var pinatas = [];
    var i;
    for(i = 0; i < Pinata.length; i++){
      var pinata = new Object();
      pinata.id = Pinata[i].id;
      pinata.name = Pinata[i].name;
      pinata.maximumHits = Pinata[i].maximumHits;
      pinata.currentHits = Pinata[i].currentHits;
      pinatas.push(pinata);
    }

    return pinatas;
  };

  const getPinataById = (pinataId) => {
    var pinata = Pinata.filter(p => p.id == pinataId)[0];

    var val = new Object();
    val.id = pinata.id;
    val.name = pinata.name;
    val.maximumHits = pinata.maximumHits;
    val.currentHits = pinata.currentHits;

    return val;

  };

  const createPinata = (pinata) => {
    var nextId = 0;
    var i;
    for(i = 0; i < Pinata.length; i++){
      if(Pinata[i].id >= nextId){
        nextId = Pinata[i].id + 1;
      }
    }
    var val = new Object();
    val.id = nextId;
    val.name = pinata.name;
    val.surprise = pinata.surprise;
    val.maximumHits = pinata.maximumHits;
    Pinata.push(val);
    return val;
  };
  return {
    getAllPinatas,
    getPinataById,
    createPinata
  };

};

module.exports = pinataService();
