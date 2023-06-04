import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "f8dd253d10msh420f0547069a0aap15d4c7jsnd34dda798efe",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

//"d37cbc7619msh85ae99c26d1d79bp1e0f90jsnb55900da8c26",
