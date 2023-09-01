import { getOffers } from "@/utils/sanity";
import { useState, useEffect } from "react";
import Offer from "./Offer";
import { getRandomArbitrary } from "@/utils/utils";

const Offers = (props: any) => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    console.log(props.offersQuantity)
    getOffers(props.offersQuantity).then((data) => {
      console.log(data);
      setOffers(
        data.map((rawData: any) => ({
          ...rawData,
          left: getRandomArbitrary(
            window.innerWidth >= 768 ? 10 : 5,
            window.innerWidth >= 768 ? 90 : 95
          ),
          top: getRandomArbitrary(0, 100),
        }))
      );
    });
  }, []);

  return (
    <div className={`offers-container  w-full relative ${props.large ? 'h-[3000px] md:h-[3000px]' : 'h-[220px] md:h-[320px]'}`}>
      {offers.map((offer: any, index: number) => (
        <>
          {window.innerWidth <= 768 && !props.large ? (
            index < 40 && (
              <Offer
                key={index}
                staggered={false}
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
              staggered={false}
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
