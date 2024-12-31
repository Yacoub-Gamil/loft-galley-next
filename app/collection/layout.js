"use client";
import SmallHeader from "../_components/header/SmallHeader";

function Layout({ children }) {
  return (
    <div>
      <SmallHeader />
      <div className="container mx-auto mt-8">{children}</div>
    </div>
  );
}

export default Layout;
