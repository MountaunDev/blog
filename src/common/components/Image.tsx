/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ImageComponent: React.FC<{
  src: string;
  width: number;
  height: number;
  alt: string;
}> = ({ src, width, height, alt }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isVertical, setIsVertical] = useState<boolean | null>(null);

  useEffect(() => {
    const imgElement = imgRef.current;

    if (imgElement) {
      imgElement.onload = () => {
        const { naturalWidth, naturalHeight } = imgElement;

        // Determine if the image is vertical or horizontal based on dimensions
        const isVerticalImage = naturalHeight > naturalWidth;

        // Set the state to reflect whether the image is vertical or not
        setIsVertical(isVerticalImage);
      };
    }
  }, [src]);

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={isVertical ? "custom-img2" : "custom-img"}
    />
  );
};

export default ImageComponent;
