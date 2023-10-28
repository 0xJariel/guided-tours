import { fetchBusiness } from "./fetchBusiness";
import fetchCoordinates from "./fetchCoordinates";

const NORTHEAST_LAT = 39.219785; // paste in the value for results[0].geometry.viewport.northeast.lat;
const NORTHEAST_LNG = -106.80139; // paste in the value for results[0].geometry.viewport.northeast.lng;
const SOUTHWEST_LAT = 39.1771779; // paste in the value for results[0].geometry.viewport.southwest.lat;
const SOUTHWEST_LNG = -106.872058; // paste in the value for results[0].geometry.viewport.northeast.lng;

const aspenBoundingBox = {
  NORTHEAST_LAT,
  NORTHEAST_LNG,
  SOUTHWEST_LAT,
  SOUTHWEST_LNG,
};
const getCoordinateList = (boundingBox, gridSize = 3) => {
  const { NORTHEAST_LAT, NORTHEAST_LNG, SOUTHWEST_LAT, SOUTHWEST_LNG } =
    boundingBox;
  const DESIRED_GRID_LENGTH = gridSize;
  let output = "";
  let intermediate_grid_length = DESIRED_GRID_LENGTH - 1;

  let lat_step_size =
    (NORTHEAST_LAT - SOUTHWEST_LAT) / intermediate_grid_length;
  let lng_step_size =
    (NORTHEAST_LNG - SOUTHWEST_LNG) / intermediate_grid_length;

  let coordinatePairs = [];

  for (let lat = 0; lat < DESIRED_GRID_LENGTH; lat++) {
    for (let lng = 0; lng < DESIRED_GRID_LENGTH; lng++) {
      const newLat = SOUTHWEST_LAT + lat * lat_step_size;
      const newLng = SOUTHWEST_LNG + lng * lng_step_size;
      coordinatePairs.push([newLat, newLng]);
    }
  }

  console.log(coordinatePairs);

  return coordinatePairs;
};

// export const aspenCoordinateList = getCoordinateList(aspenBoundingBox, 2);

export default getCoordinateList;
