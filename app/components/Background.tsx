const Background = () => {
  return (
    <div
      className="absolute w-[100vw] h-full z-0 bg-[url(/bg-mobile.jpg)] lg:bg-[url(/bkg.jpg)] bg-[center_top_3rem] lg:bg-[center_top_0rem] bg-[length:600px_auto] sm:bg-[length:100%_auto] bg-no-repeat"
      style={{
        backgroundAttachment: "top",
      }}
    />
  );
};

export default Background;
