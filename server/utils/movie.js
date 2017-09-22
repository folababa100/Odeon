var moment = require('moment');
var cheerio = require('cheerio');

function time (message) {
  var formattedTime = moment(message.createdAt).format('DD / MM / YYYYTHH: mm');
  var template = jQuery('#message-template').html();

  $('#movie').append(html);
};

var generateTime = (text) => {
  return {
    text,
    createdAt: moment().valueOf()
  };
};

module.exports = {generateTime};