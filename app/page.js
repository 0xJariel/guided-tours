import Image from "next/image";
import fetchCoordinates from "./hooks/fetchCoordinates";
import fetchBusinesses from "./hooks/fetchBusinesses";
import { aspenCoordinateList } from "./hooks/getGridCoordinates";

export default function Home() {
  // const coordinates = fetchCoordinates();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Hi World!
        {/* {fetchCoordinates()} */}
        {/* {aspenCoordinateList} */}
        {JSON.Stringify(fetchCoordinates("aspen"))}
      </div>
    </main>
  );
}
