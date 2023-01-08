import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AcademicCapIcon, SearchIcon } from "@heroicons/react/outline";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import { exploreData, cardData } from "../components/cardData";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="">
      <Head>
        <title>AirBnB Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header placeholder=""/>

      {/* Banner */}
      <Banner />

      {/* Explore Nearby */}
      <main className="max-w-7x mx-auto bg-gray-50 p-4">
       
        {/* container */}
        <div className="bg-white mx-auto px-4 shadow-md rounded-lg">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull data locally */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
            {exploreData.map(({ img, location, distance }, i) => (
              <SmallCard
                key={i}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        {/* Live anywhere */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3 snap-x snap-mandatory">
          {
            cardData.map(({img, title}, i) => (
              <MediumCard key={i} img={img} title={title} />
              ))
            }
            </div>
        </section>

        {/* Large Card */}
        <LargeCard 
        img="https://links.papareact.com/4cj"
        title="The greatest outdoors"
        description="Wishlist curated by Airbnb"
        buttonText="Get Inspired"
        />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
