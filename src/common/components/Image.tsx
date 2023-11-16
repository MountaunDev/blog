/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";

const ImageComponent: React.FC<{ src: string }> = ({ src }) => {
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

  return <img ref={imgRef} src={src} alt="example" className={isVertical ? "custom-img2": "custom-img"} />;
};

export default ImageComponent;
