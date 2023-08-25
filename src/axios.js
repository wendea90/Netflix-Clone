//! this is next from requests import axios like in node server run endemnadergewu 

// 1.axios import from axios module
import axios from "axios";

// 2. use create method to attach the url and from TMDB copy url/API and paste here (bezi url asjemer hulu gize wodezi selemhed selezi baseurl yehonal) = https://api.themoviedb.org/3 b/c kezi behala megebawu instance yeleyayal b/c create d/t key or url on netflix original and trending now &....
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// 3. wodefit on senaregi ketach yalewun get method (like ende facth) get bemalet url bemewused request yelekal so eg- https://api.themoviedb.org/3/movie/top_rated yadergna request yelikal

// instance.get("/movie/top_rated");

//! so ezi js lay instance create adergenal ena requests.js wust object create adrgenal objectu yeteleyau url meliku maletim action drama.....yeleiaklu le instancu be get endhed 

export default instance;