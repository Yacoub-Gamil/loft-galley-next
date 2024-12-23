"use client";
import SmallHeader from "../_components/SmallHeader";

function Layout({ children }) {
  return (
    <div>
      <SmallHeader />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}

export default Layout;
