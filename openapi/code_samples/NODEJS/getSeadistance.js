var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://eu-de.functions.cloud.ibm.com/api/v1/web/TransmateOrg_live/default/seadistance.json?from=amsterdam, netherlands&to=Hong Kong, China',
  'headers': {
    'apiKey': 'abc',
    'Content-Type': 'application/json'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
