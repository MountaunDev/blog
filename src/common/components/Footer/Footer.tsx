import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-top">
          <div className="footer-social-link">
            <ul className="list-unstyled mt-7">
              <li>
                <Link href="https://facebook.com/">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/">
                  <FaInstagram />
                </Link>
              </li>
            </ul>

            <ul className="list-unstyled">
              <li>
                <Link className="no-underline" href="/blog">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-center">
            © {new Date().getFullYear()} Mountain Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
