import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple text-white py-4 mt-5 border-top">
      <div className="container text-center">
        <p className="fs-5 fw-semibold mb-2">
          ﷽ <br />
          <em>"Indeed, in the remembrance of Allah do hearts find rest."</em><br />
          <small className="text-light">— Surah Ar-Ra’d (13:28)</small>
        </p>

        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="/about" className="text-white text-decoration-none">About</a>
          <a href="/contact" className="text-white text-decoration-none">Contact</a>
          <a href="/privacy" className="text-white text-decoration-none">Privacy</a>
        </div>

        <p className="mb-0 text-white-50">
          &copy; {currentYear} <strong>YourAppName</strong>. Built with 🤍 for the Ummah.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
