import axios from "axios";

// Define the API endpoint and parameters
const apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json";
const apiKey = process.env.GOOGLE_API_KEY;

// Send the GET request
const fetchCoordinates = async (city) => {
  try {
    const res = await axios(apiUrl, { params: { query: city, key: apiKey } });
    // console.log(res.data.results[0]);
    // console.log(res.data.results[0].geometry.viewport);
    // console.log(res.data.results[0].geometry.viewport.northeast.lat);
    const boundingBox = await {
      NORTHEAST_LAT: res.data.results[0].geometry.viewport.northeast.lat,
      NORTHEAST_LNG: res.data.results[0].geometry.viewport.northeast.lng,
      SOUTHWEST_LAT: res.data.results[0].geometry.viewport.southwest.lat,
      SOUTHWEST_LNG: res.data.results[0].geometry.viewport.southwest.lat,
    };
    console.log(boundingBox);
    return boundingBox;
  } catch (error) {
    // Handle any errors
    console.error("Error:", error);
  }
};

// export const aspenBoundingBox = fetchCoordinates("aspen");

export default fetchCoordinates;
