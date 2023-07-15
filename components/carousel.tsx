import { useState } from "react";

export default function Carousel({ images }: { images: React.JSX.Element[] }) {
  const [currImage, setCurrImage] = useState(0);

  const viewPrevImage = () => {
    setCurrImage((currImage + images.length - 1) % images.length);
  };

  const viewNextImage = () => {
    setCurrImage((currImage + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <button onClick={viewPrevImage}>Back</button>
      {images[currImage]}
      <button onClick={viewNextImage}>Next</button>
    </div>
  );
}
