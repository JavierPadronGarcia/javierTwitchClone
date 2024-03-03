import styles from './smallChannel.module.css';
import { GoDotFill } from "react-icons/go";
import Image from 'next/image';

export default function SmallChannel({ navbarState }) {
  return (
    <div className={(navbarState ? styles.channel : styles.channelClosed)}>
      <div className={styles.avatarContainer}>
        <Image className={styles.avatar} src='/userIcon.png' width={30} height={30} alt='channel' />
      </div>
      <div className={styles.channelDetails}>
        <div className={styles.channelData}>
          <p className={styles.channelName}>Canal</p>
          <p className={styles.channelGame}>Juego</p>
        </div>
        <div className={styles.channelViewers}>
          <GoDotFill className={styles.redDot} />
          <div className={styles.views}>123456</div>
        </div>
      </div>
    </div>
  );
}