const axios = require("axios");

exports.handler = async (event) => {
  let matches = await getUpcomingMatches();

  if (matches === undefined) {
    return {
      statusCode: 500,
      body: JSON.stringify("Internal Server Error"),
    };
  }

  await addMatchesToDB(matches);

  return {
    statusCode: 200,
    body: JSON.stringify("Successfully updated DynamoDB"),
  };
};

const getUpcomingMatches = async () => {
  const ODDS_API_KEY = process.env.ODDS_API_KEY;
  const REGION = "au";
  const SPORT_KEY = "upcoming";
  const MARKET_TYPE = "h2h";
  let responseFromOddsAPI;
  try {
    responseFromOddsAPI = await axios.get(
      "https://api.the-odds-api.com/v3/odds",
      {
        params: {
          api_key: ODDS_API_KEY,
          sport: SPORT_KEY,
          region: REGION, // uk | us | eu | au
          mkt: MARKET_TYPE, // h2h | spreads | totals
        },
      }
    );
    if (responseFromOddsAPI.success == false) {
      throw "Odds-Api server refused";
    }
  } catch (er) {
    console.log("Error fetching data from odds API");
    console.log(er.message);
    return;
  }
  return responseFromOddsAPI.data;
};

const addMatchesToDB = () => {
  // TODO store to dynamoDB
  return;
};
