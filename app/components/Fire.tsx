import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFirePreset } from "tsparticles-preset-fire";

const Fire = (props: any) => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFirePreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      className="w-[100vw] h-[100dvh] absolute z-90"
      id="tsparticles"
      options={{
        preset: "fire",
        particles: {
          number: {
            value: 1000,
          },
          color: {
            value: ["#f55e2c", "#eddb18", "#ed1818"],
          },
          move: {
            direction: "top",
          },
          size: {
            value: 2,
            animation: {
              size_min: 0,
              enable: true,
            },
          },
        },
        background: {
          image: "",
          color: {
            value: "transparent",
          },
        },
      }}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default Fire;