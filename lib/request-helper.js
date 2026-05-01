const axios = require("axios");

async function getData({ url }) {
  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
    },
  });
  return response.data;
}

module.exports = {
  getData,
};
