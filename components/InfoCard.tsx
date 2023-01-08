import React from "react";
import Image from "next/image"
import { HeartIcon} from "@heroicons/react/outline";
import {StarIcon} from "@heroicons/react/solid";

type Props = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};

export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: Props) {
  return <div className="sm:flex sm:space-x-4 py-7 px-2 w-full first:border-t border-b cursor-pointer rounded-lg hover:shadow-lg hover:opacity-80 transition duraton-200 ease-out" >

    <div className="relative h-40 w-full sm:h-52 sm:w-80 mb-2 flex-shrink-0">
        {/* Card Image */}
        <Image 
        src={img}
        alt='listing-img'
        fill
        className='object-cover rounded-lg'
        />
    </div>

    {/* Card Info */}
    <div className="flex flex-col flex-grow pb-2">
        <div className="flex justify-between">
            <p>{location}</p>
            <HeartIcon className="h-7 active:text-red-400 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow ">{description}</p>

        <div className="flex justify-between items-end pt-5">
            <p className="flex items-center">
                <StarIcon className="w-5 text-red-400" />
                {star}
            </p>
            <div>
                <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                <p className="text-right text-extralight">{total}</p>
            </div>
        </div>
    </div>
   
  </div>;
}
