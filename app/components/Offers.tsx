import { getOffers } from "@/utils/sanity";
import { useState, useEffect } from "react";
import Offer from "./Offer";
import { getRandomArbitrary } from "@/utils/utils";

const Offers = (props: any) => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getOffers().then((data) => {
      setOffers(
        data.map((rawData: any) => ({
          ...rawData,
          left: getRandomArbitrary(20, 80),
          top: getRandomArbitrary(10, 70),
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
