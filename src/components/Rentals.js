import React from "react";
import Rental from "../components/Rental";

import Varna from "../assets/Varna.webp";
import Athens from "../assets/Athens.webp";
import Istanbul from "../assets/Istanbul.webp";
import Bucharest from "../assets/Bucharest.webp";
import Vienna from "../assets/Vienna.webp";
import Budapest from "../assets/Budapest.webp";
import Prague from "../assets/Prague.webp";
import Constanta from "../assets/Constanta.webp";
import Belgrade from "../assets/Belgrade.webp";
import Venezia from "../assets/Venezia.webp";
import Krasne from "../assets/Krasne.webp";
import Zadar from "../assets/Zadar.webp";
import Immenstaad from "../assets/Immenstaad.webp";
import Kotor from "../assets/Kotor.webp";
import Norway from "../assets/Norway.webp";
import France from "../assets/France.webp";
import Norfolk from "../assets/UK.webp";
import Loire from "../assets/Loire.webp";

const Rentals = () => {
  const rentals = [
    {
      image: Zadar,
      title: "Zadar, Croatia",
      description: "Deluxe apartment with sea view",
      beds: "2 beds",
      price: "€165 night",
    },
    {
      image: Varna,
      title: "Varna, Bulgaria",
      description: "Beachfront Panoramic Flat",
      beds: "3 beds",
      price: "€80 night",
    },
    {
      image: Immenstaad,
      title: "Immenstaad, Germany",
      description: "Cabin in Immenstaad",
      beds: "4 beds",
      price: "€121 night",
    },
    {
      image: Loire,
      title: "Loire Valley, France",
      description: "Prince Suite with breakfast",
      beds: "1 bed",
      price: "€102 night",
    },
    {
      image: Athens,
      title: "Athens, Greece",
      description: "A jeweller's apartment near Acropolis",
      beds: "1 double bed",
      price: "€65 night",
    },
    {
      image: Krasne,
      title: "Krasne, Poland",
      description: "House in Lake Krasne",
      beds: "3 beds",
      price: "€85 night",
    },
    {
      image: Istanbul,
      title: "Istanbul, Turkey",
      description: "Fully Furnished  House in City Centre",
      beds: "1 bed",
      price: "€63 night",
    },
    {
      image: Kotor,
      title: "Kotor, Montenegro",
      description: "Villa Jasmine",
      beds: "8 beds",
      price: "€260 night",
    },
    {
      image: Bucharest,
      title: "Bucharest, Romania",
      description: "Cozy CityHeart Studio",
      beds: "1 bed",
      price: "€35 night",
    },
    {
      image: Vienna,
      title: "Vienna, Austria",
      description: "City Apartment Schönbrunn",
      beds: "2 beds",
      price: "€46 night",
    },
    {
      image: Norway,
      title: "Alta, Norway",
      description: "Cabin in Alta",
      beds: "4 double beds",
      price: "€128 night",
    },
    {
      image: Budapest,
      title: "Budapest, Hungary",
      description: "Central Vintage Apartment",
      beds: "3 beds",
      price: "€82 night",
    },

    {
      image: Prague,
      title: "Prague, Czech Republic",
      description: "Friendly apartments in Prague",
      beds: "1 bed",
      price: "€61 night",
    },
    {
      image: France,
      title: "Gordes, France",
      description: "Le moulin des roberts Gordes",
      beds: "1 bed",
      price: "€93 night",
    },
    {
      image: Constanta,
      title: "Constanta, Romania",
      description: "Apartament in Constanta",
      beds: "2 beds",
      price: "€71 night",
    },
    {
      image: Belgrade,
      title: "Belgrade, Serbia",
      description: "Downtown Crown",
      beds: "3 beds",
      price: "€29 night",
    },
    {
      image: Venezia,
      title: "Venezia, Italy",
      description: "Quiet and cozy in San Marco",
      beds: "4 king beds",
      price: "€217 night",
    },
    {
      image: Norfolk,
      title: "Norfolk, UK",
      description: "The Loft at Manor Farm",
      beds: "2 beds",
      price: "€208 night",
    },
  ];
  return (
    <div className="pt-3">
      <div className="grid mb-6 grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {rentals.map((rental) => (
          <Rental
            image={rental.image}
            title={rental.title}
            description={rental.description}
            beds={rental.beds}
            price={rental.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Rentals;
