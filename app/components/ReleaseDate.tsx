const ReleaseDate = () => {
  return (
    <div
      className="countdown font-['Editorial_New'] relative mt-auto"
      data-aos="fade-up"
      data-aos-offset="0"
    >
      <div className="text-[32px] md:text-[111px] flex mt-auto">
        <span className="flex w-[48px] md:w-[140px] justify-center">
          <div>
            04
          </div>
        </span>
        :
        <span className="flex w-[48px] md:w-[140px] justify-center">
          <div>
            09
          </div>
        </span>
        :
        <span className="flex w-[48px] md:w-[140px] justify-center">
          <div>
            23
          </div>
        </span>
      </div>
    </div>
  );
};

export default ReleaseDate;