import Image from "next/image";
import fetchCoordinates from "./hooks/fetchCoordinates";
import fetchBusinesses from "./hooks/fetchBusinessList";
import { aspenCoordinateList } from "./hooks/getCoordinateList";
import getAllBusinesses from "./hooks/getAllBusinesses";
import getBusinessDetails from "./hooks/fetchBusinessDetails";
import getDatabase from "./getDatabase";

export default function Home() {
  //  const aspenCoordinateList = getAllBusinesses("aspen", 3, "Snowmobiling");
  const returnData = getDatabase;
  returnData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Hi World!
      </div>
    </main>
  );
}
