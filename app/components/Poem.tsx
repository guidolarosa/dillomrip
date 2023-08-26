import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

const Poem = () => {
  const [showTypeAnimation, setShowTypeAnimation] = useState(false);

  const typeRef: any = useRef(null);

  useEffect(() => {
    if (typeRef.current != null) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > typeRef.current.getBoundingClientRect().y) {
          setShowTypeAnimation(true);
        }
      });
    }
  }, []);
  
  return (
    <p
      className="text-[24px] lg:text-[36px] text-center mb-[80px] h-[180px]"
      ref={typeRef}
    >
      {showTypeAnimation && (
        <>
          <TypeAnimation
            cursor={false}
            sequence={["Que en Balvanera tu música siempre se oiga,"]}
          />
          <br />
          <TypeAnimation
            cursor={false}
            sequence={[
              "",
              3000,
              "La bandera de la RIP-Gang se eleva con gloria,",
            ]}
          />
          <br />
          <TypeAnimation
            cursor={false}
            sequence={[
              "",
              6000,
              "Eterno serás en cada beat y acorde que flota.",
            ]}
          />
          <br />
          <TypeAnimation cursor={false} sequence={["", 9000, "Con Amor,"]} />
        </>
      )}
    </p>
  );
};

export default Poem;
