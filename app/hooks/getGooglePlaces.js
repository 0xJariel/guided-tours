import axios from "axios";

// Define the API endpoint and parameters
const apiUrl = "https://maps.googleapis.com/maps/api/place/details/json";
const placeId = "ChIJrTLr-GyuEmsRBfy61i59si0";
const fields = "address_components";
const apiKey = process.env.GOOGLE_API_KEY;

// Create an object with the query parameters
const params = {
  place_id: placeId,
  fields: fields,
  key: apiKey,
};

// Send the GET request
const fetchData = async () => {
  try {
    console.log(apiKey);
    const res = await axios(apiUrl, { params });
    console.log(res.data.result);
  } catch (error) {
    // Handle any errors
    console.error("Error:", error);
  }
};

export default fetchData;
