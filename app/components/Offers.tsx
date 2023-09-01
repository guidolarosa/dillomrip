import { getOffers } from "@/utils/sanity";
import { useState, useEffect } from "react";
import Offer from "./Offer";
import { getRandomArbitrary } from "@/utils/utils";

const Offers = (props: any) => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    console.log(props.offersQuantity);
    getOffers(props.offersQuantity).then((data) => {
      console.log(data);
      setOffers(
        data.map((rawData: any, index: number) => ({
          ...rawData,
          left: getRandomArbitrary(
            window.innerWidth >= 768 ? 10 : 5,
            window.innerWidth >= 768 ? 90 : 95
          ),
          top: getRandomArbitrary(
            ((index * 100) / props.offersQuantity),
            (index * 100) / props.offersQuantity + 5
          ),
        }))
      );
    });
  }, []);

  return (
    <div
      className={`offers-container  w-full relative ${
        props.large ? "h-[8000px] md:h-[8000px]" : "h-[220px] md:h-[320px]"
      }`}
    >
      {offers.map((offer: any, index: number) => (
        <>
          {window.innerWidth <= 768 && !props.large ? (
            index < 40 && (
              <Offer
                key={index}
                staggered={props.staggered}
                index={index}
                left={offer.left}
                top={offer.top}
                text={offer.text}
                image={`/offers/ofrenda-${offer.imageId}.png`}
              />
            )
          ) : (
            <Offer
              key={index}
              staggered={props.staggered}
              index={index}
              left={offer.left}
              top={offer.top}
              text={offer.text}
              image={`/offers/ofrenda-${offer.imageId}.png`}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default Offers;
