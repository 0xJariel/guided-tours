import axios from "axios";

// Define the API endpoint and parameters
const apiUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json";

const query = "aspen colorado";
const radius = "address_components";
const location = "";
const apiKey = process.env.GOOGLE_API_KEY;

const types = ["tourist_attraction", "travel_agency", "amusement_park"];
const type = types[0];

// types i want to search, can only have one per search
const touristAttractions = [
  "Snowmobiling",
  "Rafting",
  "Scuba Diving",
  "Hot Air Balloon Rides",
  "Dog Sledding",
  "Paragliding",
  "Zip Line Tours",
  "Horseback Riding",
  "ATV Riding",
  "Rock Climbing",
  "Helicopter Tours",
  "Jet Skiing",
  "Skydiving",
  "Cave Tours",
  "Safari Tours",
  "Whale Watching",
  "Hang Gliding",
  "Bungee Jumping",
  "Snowshoeing",
  "Off-Roading",
  "Canopy Tours",
  "Sandboarding",
  "Caving",
  "Via Ferrata",
  "Microlight Flights",
  "Cultural Tours",
  "Food Tours",
  "Wildlife Sanctuaries",
  "Bird Watching Tours",
  "Lunar Tours",
];

// You can access the list elements using array indexing, e.g., touristAttractions[0] for Snowmobiling.

// Create an object with the query parameters
const params = {
  // query,
  // radius,
  // location,
  key: apiKey,
  // type,
};

// Send the GET request
const fetchCoordinates = async (city) => {
  try {
    const res = await axios(apiUrl, { params: { query: city, key: apiKey } });
    // console.log(res.data.results[0]);
    // console.log(res.data.results[0].geometry.viewport);
    console.log(res.data.results[0].geometry.viewport.northeast.lat);
    const boundingBox = await {
      NORTHEAST_LAT: res.data.results[0].geometry.viewport.northeast.lat,
      NORTHEAST_LNG: res.data.results[0].geometry.viewport.northeast.lng,
      SOUTHWEST_LAT: res.data.results[0].geometry.viewport.southwest.lat,
      SOUTHWEST_LNG: res.data.results[0].geometry.viewport.southwest.lat,
    };
    // {
    //   NORTHEAST_LAT, NORTHEAST_LNG, SOUTHWEST_LAT, SOUTHWEST_LNG;
    // }
    console.log(boundingBox);
    return boundingBox;
  } catch (error) {
    // Handle any errors
    console.error("Error:", error);
  }
};

export default fetchCoordinates;
