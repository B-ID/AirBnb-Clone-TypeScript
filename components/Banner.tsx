import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
    > 
    <Image
        src="https://links.papareact.com/0fm"
        alt="banner-image"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-xl font-semibold">Not sure where to go? Perfect</p>
        <button className="bg-white my-3 font-bold text-purble-500 px-10 py-4 rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
      </div>
    </div>
  );
}

