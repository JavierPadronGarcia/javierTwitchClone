import Image from 'next/image';
import styles from './streamSquare.module.css';
import Link from 'next/link';

export default function StreamSquare() {
  return (
    <div className={styles.main}>
      <Link className={styles.image} href='/canal'>
        <Image src='/image2.png' width={306} height={192} />
        <div className={styles.views}>123456 espectadores</div>
      </Link>
      <div className={styles.user}>
        <Link href='/canal'>
          <Image src='/userIcon.png' width={40} height={40} className={styles.avatar} />
        </Link>
        <div className={styles.description}>
          <div className={styles.details}>
            <div>
              <Link className={styles.title} href='/canal'>🔴 Título 🔴</Link>
            </div>
            <div>
              <Link className={styles.streamer} href='/canal'>Canal</Link>
            </div>
            <Link className={styles.game} href='/directory/category/escape-from-tarkov'>Escape from Tarkov</Link>
          </div>
          <div className={styles.tags}>
            <Link className={styles.tag} href='/directory/all/tags/FPS'>FPS</Link>
            <Link className={styles.tag} href='/directory/all/tags/Español'>Español</Link>
          </div>
        </div>
      </div>
    </div>
  )
}