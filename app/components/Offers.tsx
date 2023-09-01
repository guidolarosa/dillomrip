import { getOffers } from "@/utils/sanity";
import { useState, useEffect } from "react";
import Offer from "./Offer";
import { getRandomArbitrary } from "@/utils/utils";

const Offers = (props: any) => {
  const [offers, setOffers]: any = useState([]);

  useEffect(() => {
    console.log(props.offersQuantity);
    getOffers(props.offersQuantity).then((data) => {
      console.log(data);
      const fetchOffers = data.map((rawData: any, index: number) => ({
        ...rawData,
        left: getRandomArbitrary(
          window.innerWidth >= 768 ? 10 : 5,
          window.innerWidth >= 768 ? 90 : 95
        ),
        top: getRandomArbitrary(
          (index * 100) / props.offersQuantity,
          (index * 100) / props.offersQuantity + 5
        ),
      }));

      setOffers(
        [
          {
            imageId: 3,
            text: "@fotolog.wtf",
            top: 0.5,
            left: 48,
          },
          {
            imageId: 8,
            text: "@1000eno",
            top: 0,
            left: 52,
          },
          {
            imageId: 6,
            text: "@cruzlarrosa",
            top: 0.23,
            left: 62,
          },
          {
            imageId: 5,
            text: "@bohemiangroovecorp",
            top: 0.28,
            left: 81,
          },
          ...fetchOffers
        ]
      );
    });
  }, []);

  return (
    <div
      className={`offers-container w-full relative ${
        props.large ? "h-[7000px] md:h-[5500px]" : "h-[220px] md:h-[320px]"
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
                image={
                  offer.imageId === 1
                    ? `/offers/candles/2.gif`
                    : `/offers/ofrenda-${offer.imageId}.png`
                }
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
              image={
                offer.imageId === 1
                  ? `/candles/4.gif`
                  : `/offers/ofrenda-${offer.imageId}.png`
              }
            />
          )}
        </>
      ))}
    </div>
  );
};

export default Offers;
