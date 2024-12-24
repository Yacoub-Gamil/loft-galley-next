"use client";
import SmallHeader from "../_components/SmallHeader";

function Layout({ children }) {
  return (
    <div>
      <div className=" mb-4">
        <SmallHeader />
      </div>
      <div className="container mx-auto">{children}</div>
    </div>
  );
}

export default Layout;
