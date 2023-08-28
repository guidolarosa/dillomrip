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
    <section className="text-[18px] lg:text-[40px] text-center text-[700] mb-[0px] lg:mb-[80px] mt-8 lg:mt-24 lg:leading-snug leading-tight">
      <p data-aos="fadeup" data-aos-duration="1500">La vida guió tu camino,</p>
      <p data-aos="fadeup" data-aos-duration="1500">La muerte tu destino,</p>
      <p data-aos="fadeup" data-aos-duration="1500">Solemne es nuestro rezo ante tu partida,</p>
      <p data-aos="fadeup" data-aos-duration="1500">Que tu alma en paz descanse,</p>
      <p data-aos="fadeup" data-aos-duration="1500">Esta es nuestra despedida,</p>
    </section>
  );
};

export default Poem;
