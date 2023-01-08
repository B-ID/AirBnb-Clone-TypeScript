import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  px-32 gap-y-10 py-14 bg-gray-100 text-gray-300">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800 ">
        <h5 className="font-bold">HOST</h5>
        <p>Papa React</p>
        <p>Presents</p>
        <p>Zero to Full Stack Hero</p>
        <p>Hundreds of Students</p>
        <p className="hover:text-[#FF5A5F] cursor-pointer">Join Now</p>
      </div>

      <div className="space-y-4 text-xs  text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Saftey</p>
        <p>Say Hi YouTube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It's a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>PapaFam</p>
      </div>
    </div>
  );
}
