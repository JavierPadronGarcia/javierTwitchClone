import ImageCarrousel from '@/components/imageCarrousel/ImageCarrousel';
import styles from './mainPage.module.css';

export default function Home() {
  return (
    <div className={styles.mainPage}>
      <ImageCarrousel />
    </div>
  );
}