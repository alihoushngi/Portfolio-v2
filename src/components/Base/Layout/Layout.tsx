import { ReactComponent } from "@/types/types";
import React from "react";
import { ILayoutTypes } from "./LayoutTypes";

const Layout: ReactComponent<ILayoutTypes> = (props) => {
  const { children, customClass } = props;
  return (
    <section className="pt-20 max-sm:pt-0">
      <div
        className={` max-sm:container w-full px-5 max-w-[1170px] mx-auto flex gap-4 ${customClass} `}
      >
        {children}
      </div>
    </section>
  );
};

export default Layout;
