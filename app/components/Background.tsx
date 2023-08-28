const Background = () => {
  return (
    <div
      className="absolute w-[100vw] h-full z-0 bg-[url(/bg-mobile.jpg)] lg:bg-[url(/bkg.jpg)] bg-[center_top_3rem] lg:bg-[center_top_-0rem] bg-[length:600px_auto] lg:bg-[length:100%_auto]"
      style={{
        backgroundAttachment: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default Background;
