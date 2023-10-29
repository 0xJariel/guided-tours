import axios from "axios";

// Define the API endpoint and parameters
const apiUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";

const radius = "";
// const location = "40.9175771 -74.0059728";
const apiKey = process.env.GOOGLE_API_KEY;

const types = ["tourist_attraction", "travel_agency", "amusement_park"];
// You can access the list elements using array indexing, e.g., touristAttractions[0] for Snowmobiling.

// Send the GET request
const fetchBusinessList = async (
  coordinatePair,
  keyword = "Snowmobiling",
  type = null
) => {
  // loop 3 times with nextpage key to get the 60 available businesses
  try {
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
    const businesses = res.data.results;
    console.log(businesses);
    return businesses;
  } catch (error) {
    // Handle any errors
    console.error("Error:", error);
  }
};

// export const demoBusiness = fetchBusiness([39.1911, -106.81754], "snowboard");

export default fetchBusinessList;
