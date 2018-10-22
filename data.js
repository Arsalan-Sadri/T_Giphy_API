const axios = require("axios");

const BASE_URL = "https://api.giphy.com/v1/gifs/search";
const API_KEY = "2MnPgQlfrGbyTj7jZyIqCk6SdjMeFSPE";
const PARAM1 = "api_key=" + API_KEY;
const NUM_OF_PHOTOS = 12;
const PARAM2 = "limit=" + NUM_OF_PHOTOS;
const QUERY_TERM = "cars";
const PARAM3 = "q=" + QUERY_TERM;

module.exports = axios.get(BASE_URL + "?" + PARAM1 + "&" + PARAM2 + "&" + PARAM3);

// postman testing:
// https://api.giphy.com/v1/gifs/search?api_key=2MnPgQlfrGbyTj7jZyIqCk6SdjMeFSPE&limit=10&q=nature