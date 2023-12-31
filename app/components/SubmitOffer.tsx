"use client";

import { useState, useEffect } from "react";
import { createOffer } from "@/utils/sanity";
import { offerImages } from "@/content/offerImages";
import OfferSubmitForm from "./OfferSubmitForm";
import Share from "./Share";
import LeaveOfferButton from "./LeaveOfferButton";

const SubmitOffer = (props: any) => {
  const [step, setStep] = useState('init')
  const [offerText, setOfferText] = useState("");
  const [offerImageId, setOfferImageId] = useState(0);

  const submitOffer = async () => {
    let activeSlideId: any = document
      .querySelector(".splide__slide.is-active:not(.splide__slide--clone)")
      ?.getAttribute("id");
    let imageId = activeSlideId.substr(activeSlideId.length - 1);
    setOfferImageId(parseInt(imageId) - 1);
    try {
      const response = await createOffer({
        imageId: imageId,
        text: offerText,
      });
      setStep('share');
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center mb-48 lg:mb-80 mt-0 relative h-[280px] lg:h-[420px] w-full z-10">
      <LeaveOfferButton
        onClick={() => {setStep('input')}}
        show={step === 'init'}
      />
      <OfferSubmitForm 
        show={step === 'input'}
        offerText={offerText}
        onFormSubmit={submitOffer}
        submitOffer={submitOffer}
        setOfferText={setOfferText}
      />
      <Share
        show={step === 'share'}
        offerText={offerText}
        offerImage={offerImages[offerImageId]}
      />
    </div>
  );
};

export default SubmitOffer;
