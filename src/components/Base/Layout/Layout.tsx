import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="pt-20">
      <div className="max-sm:container w-full px-5 max-w-[1170px] mx-auto flex flex-col gap-4">
        {children}
      </div>
    </section>
  );
};

export default Layout;
