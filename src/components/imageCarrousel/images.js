import { useEffect, useState } from "react";
import ImageCard from "../imageCard/ImageCard";

export default function Images({ styles, currentIndex, totalImages }) {

  const checkPreviousIndex = () => (currentIndex - 1 + totalImages) % totalImages;
  const checkNextIndex = () => (currentIndex + 1) % totalImages;

  const [previousIndex, setPreviousIndex] = useState(checkPreviousIndex());
  const [nextIndex, setNextIndex] = useState(checkNextIndex());

  useEffect(() => {
    setPreviousIndex(checkPreviousIndex());
    setNextIndex(checkNextIndex());
  }, [currentIndex]);

  const images = [
    "image.png",
    "image2.png",
    "image3.png",
    "image4.png"
  ];

  return (
    <div className={styles.imagesContainer}>
      {[...Array(totalImages).keys()].map((index) => (
        <div key={index}
          className={`
            ${index === previousIndex ? styles.previous : ""} 
            ${index === currentIndex ? styles.active : ""} 
            ${index === nextIndex ? styles.next : ""}`
          }
        >
          <ImageCard image={images[index]} />
        </div>
      ))}
    </div>
  )
}