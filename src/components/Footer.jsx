import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a110e] text-[#d8c2bb] py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-[#f1dfd9] mb-2">
          Made with 🧡 by Team Pixel Perfect
        </h2>
        <p className="text-sm ">
          © {new Date().getFullYear()} Aryan Srivastava. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

  