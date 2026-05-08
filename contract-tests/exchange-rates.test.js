const { getData } = require("../lib/request-helper");
const { schemaValidation } = require("../lib/validateContractSchema");
const { ExchangeRatesContract } = require("../contracts/exchange-rates-contract");

describe("Coinbase exchange-rates contracts", () => {
  test("BTC exchange-rates contract schema check", async () => {
    const response = await getData({
      url: "https://api.coinbase.com/v2/exchange-rates?currency=BTC",
    });
    return schemaValidation(response, ExchangeRatesContract);
  });
});
