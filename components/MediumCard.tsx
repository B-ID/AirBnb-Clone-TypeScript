import React from "react";
import Image from "next/image";

type Props = {
  img: string;
  title: string;
};

export default function MediumCard({ img, title }: Props) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out snap-start">
      <div className="relative h-80 w-80">
        <Image src={img} fill alt="medium-card-image" className="rounded-lg" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}
