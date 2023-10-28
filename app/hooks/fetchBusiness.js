import axios from "axios";

// Define the API endpoint and parameters
const apiUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";

const radius = "";
// const location = "40.9175771 -74.0059728";
const apiKey = process.env.GOOGLE_API_KEY;

const types = ["tourist_attraction", "travel_agency", "amusement_park"];
const type = types[0];
// You can access the list elements using array indexing, e.g., touristAttractions[0] for Snowmobiling.

// Send the GET request
const fetchBusiness = async (
  coordinatePair,
  keyword = "Snowmobiling",
  type = null
) => {
  // loop 3 times with nextpage key to get the 60 available businesses
  try {
    console.log(apiKey);
    const res = await axios(apiUrl, {
      params: {
        keyword,
        radius: 50000,
        key: process.env.GOOGLE_API_KEY,
        location: `${coordinatePair[0]} ${coordinatePair[1]}`,
        if(type) {
          type;
        },
      },
    });
    console.log(res.data.results.length);
    console.log(coordinatePair[0], coordinatePair[1]);
    // console.log(res.data);
  } catch (error) {
    // Handle any errors
    console.error("Error:", error);
  }
};

export const demoBusiness = fetchBusiness([39.1911, -106.81754], "snowboard");

export default fetchBusiness;
