import axios from "axios";
import React from "react";

const tempID = "ChIJJalOaKRZwokRNLnbupB5UrY";

const getBusinessDetails = async (place_id) => {
  const apiUrl = "https://maps.googleapis.com/maps/api/place/details/json";
  console.log("first");

  try {
    console.log("hello");
    const res = await axios(apiUrl, {
      params: { place_id, key: process.env.GOOGLE_API_KEY },
    });
    console.log(res.data.result);
    // add place_id
    const name = res.data.result.name;
    // const author_name = res.data.result.author_name;
    // google maps link

    const rating = res.data.result.rating;
    const url = res.data.result.url;
    const website = res.data.result.website;
    const business_status = res.data.result.business_status;
    const types = res.data.result.types;
    const formatted_address = res.data.result.formatted_address;
    const formatted_phone_number = res.data.result.formatted_phone_number;
    const boundingBox = res.data.result.geometry.viewport;
    const international_phone_number =
      res.data.result.international_phone_number;
  } catch (error) {
    console.log("error", error);
  }
  return;
};

export const aspenCoordinateList = getBusinessDetails(
  "ChIJLUvJAxFzQIcR9dze10gTtqE"
);

export default getBusinessDetails;
