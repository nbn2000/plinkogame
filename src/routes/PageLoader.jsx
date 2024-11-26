import { Loading } from "../svg";
import { Suspense } from "react";

const PageLoader = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center w-full h-screen">
          <Loading width={40} height={40} />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default PageLoader;
