import ImageCarrousel from '@/components/imageCarrousel/ImageCarrousel';
import styles from './mainPage.module.css';
import StreamsYouWouldLike from '@/components/sreamsYouWouldLike/StreamsYouWouldLike';

export default function Home() {
  return (
    <div className={styles.mainPage}>
      <ImageCarrousel />
      <StreamsYouWouldLike />
    </div>
  );
}