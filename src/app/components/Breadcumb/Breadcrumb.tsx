import React from "react";
import Image from "next/image";
import bubble9 from "@/app/public/images/bubble-9.png";
import bubble11 from "@/app/public/images/bubble-11.png";
import line4 from "@/app/public/images/line-4.png";
// import { Link } from 'react-router-dom';

interface Props {
  title: string;
  page: string;
}

const Breadcrumb = ({ title, page }: Props) => {
  return (
    <div className="breadcrum-area">
      <div className="container">
        <div className="breadcrumb">
          <ul className="list-unstyled">
            <li>
              <a>Home</a>
            </li>
            <li
              className="active"
              dangerouslySetInnerHTML={{ __html: page }}
            ></li>
          </ul>
          <h1
            className="title h2"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
        </div>
      </div>
      <ul className="shape-group-8 list-unstyled">
        <li className="shape shape-1">
          <Image src={bubble9} alt="Bubble" />
        </li>
        <li className="shape shape-2">
          <Image src={bubble11} alt="Bubble" />
        </li>
        <li className="shape shape-3">
          <Image src={line4} alt="Line" priority={true} />
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
