import React from "react";
import Image from "next/image";

type Props = {
  img: string;
  title: string;
  description: string;
  buttonText: string;
};

export default function LargeCard({
  img,
  title,
  description,
  buttonText,
}: Props) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt="large-image-card"
          fill
          style={{ objectFit: "cover" }}
          className='rounded-lg'
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 font-semibold">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white hover:bg-[#FF5A5F] bg-gray-900 px-4 py-2 rounded-full mt-5">{buttonText}</button>
      </div>
    </section>
  )};
