import axios from "axios";

const GuessRankapi = axios.create( {  
    baseURL: "https://restserver-eo1l.onrender.com/api/guess-rank",
});

export default GuessRankapi;