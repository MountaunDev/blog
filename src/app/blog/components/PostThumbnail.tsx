import React from "react";
import Slider from "react-slick";
import ImageComponent from "@/common/components/Image";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function SlickNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaAngleRight />
    </div>
  );
}

function SlickPrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaAngleLeft />
    </div>
  );
}

var slideSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SlickNextArrow />,
  prevArrow: <SlickPrevArrow />,
};

interface Props {
  imagesBanner: string[] | undefined;
}

function PostThumbnail({ imagesBanner }: Props) {
  return (
    <div className="post-thumbnail">
      {Array.isArray(imagesBanner) ? (
        <Slider {...slideSettings} className="slick-arrow-nav">
          {imagesBanner.map((url, index) => (
            <div className="slide-item" key={index}>
              <ImageComponent src={url} />
            </div>
          ))}
        </Slider>
      ) : (
        imagesBanner && <ImageComponent src={imagesBanner[0]} />
      )}
    </div>
  );
}

export default PostThumbnail;
