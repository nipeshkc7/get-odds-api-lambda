exports.handler = async (event) => {
    let matches = await getOddsApi();
    await addMatchesToDB(matches);
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Successfully updated DynamoDB'),
    };
    return response;
};

const getOddsApi = () => {
    const ODDS_API_KEY = process.env.ODDS_API_KEY;
    const URL = 'https://api.the-odds-api.com/v3/odds';
    const REGION = 'au';
    // TODO get data from api
    return;
}

const addMatchesToDB = () => {
    // TODO store to dynamoDB
    return;
}