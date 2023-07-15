import { useState, useEffect } from "react";

export default function Carousel({ images }: { images: React.JSX.Element[] }) {
  const [currImage, setCurrImage] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  const viewPrevImage = () => {
    clearInterval(intervalId);
    setCurrImage((currImage + images.length - 1) % images.length);
  };

  const viewNextImage = () => {
    clearInterval(intervalId);
    setCurrImage((currImage + 1) % images.length);
  };

  useEffect(() => {
    setIntervalId(
      setInterval(() => {
        setCurrImage((currImage + 1) % images.length);
      }, 5000),
    );
    return () => clearInterval(intervalId);
  }, [currImage]);

  return (
    <div className="carousel-container">
      <button onClick={viewPrevImage}>Back</button>
      {images[currImage]}
      <button onClick={viewNextImage}>Next</button>
    </div>
  );
}
