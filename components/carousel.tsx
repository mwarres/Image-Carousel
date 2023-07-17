import { useState, useEffect } from "react";

export default function Carousel({ images }: { images: React.JSX.Element[] }) {
  const [currImage, setCurrImage] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const numOfPhotos = images.length;

  const viewPrevImage = () => {
    clearInterval(intervalId);
    setCurrImage((currImage + numOfPhotos - 1) % numOfPhotos);
  };

  const viewNextImage = () => {
    clearInterval(intervalId);
    setCurrImage((currImage + 1) % numOfPhotos);
  };

  useEffect(() => {
    setIntervalId(
      setInterval(() => {
        setCurrImage((currImage + 1) % numOfPhotos);
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
