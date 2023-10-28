const demoPair = [39.219785, -106.80139];
import fetchBusiness from "./fetchBusiness";
import fetchCoordinates from "./fetchCoordinates";
import getCoordinateList from "./getCoordinateList";
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

const types = ["tourist_attraction", "travel_agency", "amusement_park"];
const type = types[0];

const query = touristAttractions[0];

const getAllBusinesses = async (city, gridLength, query, businessType) => {
  const boundingBox = await fetchCoordinates(city);
  // console.log(boundingBox);
  // create coordinate pairs based on grid lentgh
  // const searchGrid = await getCoordinateList(boundingBox, gridLength);
  // console.log(searchGrid);
  // searchGrid.forEach((coordinatePair) => {
  //   fetchBusiness(coordinatePair, query, businessType);
  // });
};

export default getAllBusinesses;
