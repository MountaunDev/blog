/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedin,
  FaInstagram,
  FaVimeoV,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";

const PostAuthor = ({ data }: any) => {
  return (
    <div className="blog-author">
      <div className="author">
        <div className="author-thumb">
          <img src={`/blog/author-1.png`} alt="Blog Author" />
        </div>
        <div className="info">
          <h5 className="title">{data.name}</h5>
          <p>{data.shortBiography}</p>
          <ul className="social-share list-unstyled">
            <li>
              <a href="test/test">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="test/test">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="test/test">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="test/test">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostAuthor;
