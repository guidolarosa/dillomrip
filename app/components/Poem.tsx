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
            sequence={["La vida guió tu camino,"]}
          />
          <br />
          <TypeAnimation
            cursor={false}
            sequence={["", 3000, "La muerte tu destino,"]}
          />
          <br />
          <TypeAnimation
            cursor={false}
            sequence={["", 6000, "Solemne es nuestro rezo ante tu partida,"]}
          />
          <br />
          <TypeAnimation
            cursor={false}
            sequence={["", 9000, "Que tu alma en paz descanse,"]}
          />
          <br />
          <TypeAnimation
            cursor={false}
            sequence={["", 12000, "Esta es nuestra despedida,"]}
          />
        </>
      )}
    </p>
  );
};

export default Poem;
