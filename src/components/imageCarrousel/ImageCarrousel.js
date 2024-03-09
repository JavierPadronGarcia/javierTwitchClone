import { useState } from 'react';
import styles from './imageCarrousel.module.css';
import Images from './images';
import LeftArrow from './leftArrow';
import RightArrow from './rightArrow';

export default function ImageCarrousel() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 4;

  const previousImage = () => {
    console.log('imagen previa')
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className={styles.imageCarrousel}>
      <LeftArrow styles={styles} clicked={previousImage} />
      <Images styles={styles} currentIndex={currentIndex} totalImages={totalImages} />
      <RightArrow styles={styles} clicked={nextImage} />
    </div>
  )
}
