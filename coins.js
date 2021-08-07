const ax = require('axios');

const myKey = "9415b4bd9e1dff11d23a12aa310164cddea3ddc2041ca1104fff0c118882318d"

const getPrices = (coinsList, date) => {
    try {
        return ax({
            method:"GET",
            url : `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=${coinsList}&date=${date}&api_key=${myKey}`,
        });
    } catch (error) {
        console.error(error);
        return null;
    }
  }


module.exports = {
    getPrices
};