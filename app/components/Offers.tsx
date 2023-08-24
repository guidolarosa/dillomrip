import { getOffers } from "@/utils/sanity";
import { useState, useEffect } from "react";
import Offer from "./Offer";

const Offers = (props: any) => {
  const [offers, setOffers] = useState([]);
  const getRandomArbitrary = (min: any, max: any) => {
    return Math.random() * (max - min) + min;
  };

  useEffect(() => {
    getOffers().then((data) => {
      setOffers(
        data.map((rawData: any) => ({
          ...rawData,
          left: getRandomArbitrary(10, 90),
          top: getRandomArbitrary(30, 70),
        }))
      );
    });
  }, []);

  return (
    <div className="offers-container h-[320px] w-full relative">
      {offers.map((offer: any, index: number) => (
        <Offer
          key={index}
          index={index}
          left={offer.left}
          top={offer.top}
          text={offer.text}
          image={`/offers/ofrenda-${offer.imageId}.png`}
        />
      ))}
    </div>
  );
};

export default Offers;
