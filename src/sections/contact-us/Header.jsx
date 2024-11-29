import useLocales from "/src/hooks/useLocales";
const Header = () => {
  const { t } = useLocales();
  return (
    <div className="bg-[#f1f3f4]">
      <div className="container mx-auto px-4  md:px-4 py-16">
        <h1 className="max-w-[800px] text-[28px] md:text-[50px] font-roboto font-bold  md:leading-[55px]">
          {t("Contact Information")}
        </h1>
      </div>
    </div>
  );
};

export default Header;
