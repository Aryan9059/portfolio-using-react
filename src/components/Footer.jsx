import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-zinc-100 mb-4">
          Made with ❤️ by Team Pixel Perfect
        </h2>
        <p className="text-sm">
          © {new Date().getFullYear()} Aryan Srivastava. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

  