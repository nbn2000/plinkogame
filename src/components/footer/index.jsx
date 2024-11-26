const FooterUpper = () => (
  <div className="w-full container flex justify-center items-center flex-col gap-[27px]">
    <div>
      {data.map((i, idx) => (
        <span key={idx}>{i}</span>
      ))}
    </div>
    <div className="flex justify-between w-full"></div>
  </div>
);

const Footer = () => {
  return (
    <footer className="flex justify-center items-center flex-col w-full">
      <div className="bg-[#F1F3F4] w-full">
        <FooterUpper />
      </div>
      <div className="bg-[#111111] container"></div>
    </footer>
  );
};

const data = [""];

export default Footer;
