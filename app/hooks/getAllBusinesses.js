import fetchBusinessList from "./fetchBusinessList";
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

// add next two pages to return
const getAllBusinesses = async (
  city,
  gridLength,
  keyword,
  businessType = null
) => {
  const boundingBox = await fetchCoordinates(city);
  console.log("bounding box: ", boundingBox);

  const searchGrid = await getCoordinateList(boundingBox, gridLength);
  console.log("search grid: ", searchGrid);

  const businessList = [];
  searchGrid.forEach((coordinatePair) => {
    businessList.push(fetchBusinessList(coordinatePair, keyword, businessType));
  });
  // console.log(businessList[0]);
};

// export const aspenCoordinateList = getAllBusinesses("aspen", 3, "Snowmobiling");

export default getAllBusinesses;
