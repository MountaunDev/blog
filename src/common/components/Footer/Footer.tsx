"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { WiAlien } from "react-icons/wi";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-top">
          <div className="footer-social-link text-center">
            {/* TODO: Replace the logo when we have a real logo for the blog */}
            <WiAlien size={80} className="footer-blog-logo" />
            <ul className="list-unstyled mt-7">
              <li>
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaInstagram />
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
