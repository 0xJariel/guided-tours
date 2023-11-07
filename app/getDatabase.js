import Pocketbase from "pocketbase";

const getDatabase = async () => {
  try {
    const pb = new Pocketbase("http://127.0.0.1:8090");
    console.log("connected to pocketbase");
    const result = await pb.collection("example");
    console.log(result);
  } catch (error) {
    console.log("error:", error);
  }
};

export default getDatabase;
