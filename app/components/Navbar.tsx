import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <Image src="/logo.svg" alt="" width={100} height={100} />
    </div>
  );
};

export default Navbar;
