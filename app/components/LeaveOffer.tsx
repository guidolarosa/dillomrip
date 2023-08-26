"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { createOffer } from "@/utils/sanity";
import Poem from './Poem';
import SpiritOffer from './SpiritOffer';
import { offerImages } from "@/content/offerImages";
import OfferSubmitForm from "./OfferSubmitForm";
import Share from "./Share";
import LeaveOfferButton from "./LeaveOfferButton";

const LeaveOffer = (props: any) => {
  const [step, setStep] = useState('init')
  const [offerSent, setOfferSent] = useState(false);
  const [offerText, setOfferText] = useState("");
  const [offerImageId, setOfferImageId] = useState(0);
  const [offerHidden, setOfferHidden] = useState(true);
  const [offerValid, setOfferValid] = useState(false);
  const [offerMove, setOfferMove] = useState(316);;

  useEffect(() => {
    if (offerSent) {
      setTimeout(() => {
        setOfferMove(-300);
      }, 2000);
    }
  }, [offerSent]);

  const onOfferUpdate = (e: any) => {
    setOfferText(e.target.value);
    if (e.target.value.length > 0 && e.target.value.length < 40) {
      setOfferValid(true);
    } else {
      setOfferValid(false);
    }
  };

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
      setStep('share')
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center mb-[98px] mt-20 relative">
      <Poem />
      <LeaveOfferButton
        onClick={() => {setStep('input')}}
        show={step === 'init'}
      />
      <SpiritOffer 
        offerSent={offerSent}
        offerText={offerText}
        offerImage={offerImages[offerImageId]}
      />
      <OfferSubmitForm 
        show={step === 'input'}
        offerSent={offerSent}
        offerText={offerText}
        onFormSubmit={submitOffer}
        onOfferUpdate={onOfferUpdate}
        submitOffer={submitOffer}
        offerValid={offerValid}
      />
      <Share
        show={step === 'share'}
        offerSent={offerSent}
      />
      
    </div>
  );
};

export default LeaveOffer;
