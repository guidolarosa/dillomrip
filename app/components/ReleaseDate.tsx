const ReleaseDate = (props: any) => {
  return (
    <div
      className="countdown font-['Editorial_New'] relative mt-auto"
      data-aos="fade-up"
      data-aos-offset="0"
    >
      <div
        className={`${
          props.small
            ? "text-[32px] md:text-[40px]"
            : "text-[32px] md:text-[111px]"
        } flex mt-auto`}
      >
        <span
          className={`${
            props.small ? "w-[48px] md:w-[66px]" : "w-[48px] md:w-[140px]"
          } flex justify-center`}
        >
          <div>04</div>
        </span>
        .
        <span
          className={`${
            props.small ? "w-[48px] md:w-[66px]" : "w-[48px] md:w-[140px]"
          } flex w-[48px] md:w-[140px] justify-center`}
        >
          <div>09</div>
        </span>
        .
        <span
          className={`${
            props.small ? "w-[48px] md:w-[66px]" : "w-[48px] md:w-[140px]"
          } flex w-[48px] md:w-[140px] justify-center`}
        >
          <div>23</div>
        </span>
      </div>
    </div>
  );
};

export default ReleaseDate;
