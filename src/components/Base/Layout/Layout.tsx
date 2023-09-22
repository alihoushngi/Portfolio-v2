import React from "react";

const Layout = ({
  children,
  customClass,
}: {
  children: React.ReactNode;
  customClass?: string;
}) => {
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
