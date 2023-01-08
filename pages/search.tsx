import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import { airbnbLitings } from "../airbnbListings";
import InfoCard from "../components/InfoCard";



export default function Search() {
  <Head>
    <title>Search Results</title>
  </Head>
  const router = useRouter();

  const { location, startDate, endDate, guestNumber } = router.query;

  // const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
  // const formattedEndDate = format(new Date(endDate), "dd MMMM yy")

  // const range = `${formattedStartDate} - ${formattedEndDate}`;

  // console.log(formattedEndDate, formattedStartDate)

  return (
    <div className="">
      <Header placeholder={`${location} | range ${guestNumber}`} />
      <main className="max-w-6xl mx-auto pb-4">
        <section className="pt-14 px-6">
          <p className="text-xs">
            300+ Stays <span>range</span> for {guestNumber} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}{" "}
          </h1>

          <div className="hidden lg:inline-flex space-x-3 mb-2 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          {/* Search Results */}
          <div className="">
            {airbnbLitings.map((item, i) => (
              <InfoCard key={i} {...item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
