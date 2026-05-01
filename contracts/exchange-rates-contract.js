const Joi = require("joi");

const ratesObject = Joi.object({
  USD: Joi.string().required(),
  CNY: Joi.string().required(),
})
  .unknown(true)
  .required();

const ExchangeRatesContract = Joi.object({
  data: Joi.object({
    currency: Joi.string().required(),
    rates: ratesObject,
  }).required(),
}).required();

module.exports = {
  ExchangeRatesContract,
  ratesObject,
};
