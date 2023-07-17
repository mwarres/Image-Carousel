import Head from "next/head";
import Image from "next/image";

import Carousel from "../components/carousel";
import Cappadocia from "../images/Cappadocia.jpg";
import LakeMalawi from "../images/LakeMalawi.jpg";
import MachuPicchu from "../images/MachuPicchu.jpg";
import Paris from "../images/Paris.jpg";

export default function App() {
  const images = [Cappadocia, LakeMalawi, MachuPicchu, Paris];
  const imgs: React.JSX.Element[] = [];
  for (let i = 0; i < images.length; i++) {
    const image = (
      <Image src={images[i]} alt={images[i].src} width={250} height={200} />
    );
    imgs.push(image);
  }

  return (
    <div className="center">
      <Head>
        <title>Image Carousel</title>
      </Head>
      <main>
        <h1>Your next vacation awaits!!</h1>
        <Carousel images={imgs} />
      </main>
    </div>
  );
}
