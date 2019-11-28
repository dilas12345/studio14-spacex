const utils = require('./../utils');
const questions = [];
let tx = {};

const level = [
  'flacon9, 2 abuja', 'falcon1, 6 moon', 'falcon9, 2300 moon', 'falcon9'
];

questions.push({
  type: 'input',
  name: 'address',
  message: 'insert destination address:',
},
{
  type: 'input',
  name: 'amount',
  message: 'insert amount (BTC):',
},
{
  type: 'list',
  name: 'priority',
  message: 'Choose transaction priority: ',
  choices: level,
  default: level[1]
});

function callback (result) {
  // mock
  // result.address = 'tb1qauephxqjhs6vu4gahvg69zp7w4zpxfc7gklw2r';
  // result.amount = '0.01';
  if(result.priority === level[0]){
    result.priority = 2;
  }
  if(result.priority === level[1]){
    result.priority = 6;
  }
  if(result.priority === level[2]){
    result.priority = 1008;
  }
  if(result.priority === 'custom') {
    utils.printText('function not supported yet', 'red');
    utils.askTransactionDetails();
  }

  if(utils.validateAddress(result.address) || result.amount > 0) {
    return result;
  } else {
    utils.printText('address not valid', 'red');
    utils.askTransactionDetails();
  }
}

module.exports = {
  questions,
  level,
  callback
};
