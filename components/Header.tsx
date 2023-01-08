import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { UsersIcon } from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

// interface Ranges {
//   selection: {
//     startDate: React.SetStateAction<Date>;
//     endDate: React.SetStateAction<Date>;
//   };
// }

type Props = {
  placeholder: string;
};

export default function Header({ placeholder }: Props) {
  const [searchInput, setSearchInput] = useState<string>("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestNumber, setGuestNumber] = useState("1");

  const router = useRouter();

  
  // interface Ranges {
  //     selection: {
  //       startDate: React.SetStateAction<Date>
  //       endDate: React.SetStateAction<Date>
  //     }
  // }

    

  function handleSelect(ranges: any) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  function handleGuestNumber(e: React.ChangeEvent<HTMLInputElement>) {
    setGuestNumber(e.target.value);
  }

  // interface SearchParams {
  //   pathname: string
  //   query: {
  //     location: string
  //     startDate: Date
  //     endDate: Date
  //     guestNumber: string
  //   }
  // }


  function search() {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestNumber,
      },
    });
  }

  function resetInput() {
    setSearchInput("");
  }

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  return (
    <header className="sticky backdrop-blur-lg top-0 z-50 bg-white/30 grid gap-2 grid-cols-2 sm:grid-cols-3  p-5 md:px-10">
      {/* Header left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex stems-center h-9 md:h-11 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt=""
          fill
          className="object-left object-contain"
        />
      </div>

      {/* Header Middle - Search*/}
      <div className="flex items-center border rounded-full md:shadow-sm py-2 px-4">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-transparent outline-none flex-1 text-sm text-gray-600 placeholder-gray-600 "
          type="text"
          placeholder={placeholder || `Start your search`}
        />
        <SearchIcon className="hidden md:inline-flex h-8 pl-2 bg-red-400 p-2 cursor-pointer rounded-full text-white" />
      </div>

      {/* Header Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:text-sm lg:text-lg md:inline-flex whitespace-nowrap">
          Become a Host
        </p>
        <GlobeAltIcon className="hidden sm:inline h-6 flex-shrink-0 cursor-pointer" />
        <div className="hidden sm:flex items-center border rounded-full space-x-3 p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="hidden sm:flex flex-col col-span-1 sm:col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FF5A5F"]}
            onChange={handleSelect}
          />
          <div className="flex item-center border-b mb-4">
            <h2 className="text-2xl flex-1 font-semibold">Number of Guests</h2>
            <UsersIcon className="w-5" />
            <input
              value={guestNumber}
              onChange={handleGuestNumber}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
            />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={resetInput}
              className="p-2 rounded flex-1 text-white bg-[#FF5A5F]"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="p-2 rounded flex-1 text-[#FF5A5F] bg-gray-900 "
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
