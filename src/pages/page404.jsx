const Page404 = () => {
  return (
    <section className="bg-white min-h-screen flex justify-center items-center w-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#F136A7] ">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-[#151515] md:text-4xl ">
            Something&apos;s missing.
          </p>
          <p className="mb-4 text-lg font-light text-[#2E3246] ">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.
          </p>
          <a
            href="#"
            className="bg-[#F136A7] hover:text-[#F136A7] whitespace-nowrap gap-1 hover:bg-white flex justify-center items-center transition-all mx-auto m-10 rounded-[100px] text-lg text-white px-10 py-6 tracking-wider font-roboto  font-[700] text-[14px] leading-[16px] shadow-[2px_2px_29px_0_#F136A7] "
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page404;
