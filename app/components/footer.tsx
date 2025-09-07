import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center bg-gray-900 text-gray-400">
      © {new Date().getFullYear()} CCTV Security Services. All rights reserved.
    </footer>
  );
};

export default Footer;
