import styles from './imageCard.module.css';
import Image from "next/image";
import Link from "next/link";

export default function ImageCard({ image }) {

  return (
    <div className={styles.imageWrapper}>
      <div className={styles.image}>
        <Image src={`/${image}`} alt="stream frame" width={602} height={330} />
      </div>
      <div className={styles.details}>
        <div className={styles.user}>
          <Image src='/userIcon.png' width={40} height={40} className={styles.avatar} />
          <div className={styles.info}>
            <Link className={styles.userName} href='/Canal'>Canal</Link>
            <Link className={styles.game} href='/directory/category/escape-from-tarkov'>Escape From Tarkov</Link>
            <p className={styles.views}>123456 espectadores</p>
          </div>
        </div>
        <div className={styles.tags}>
          <Link className={styles.tag} href='/directory/all/tags/Realista'>Realista</Link>
          <Link className={styles.tag} href='/directory/all/tags/FPS'>FPS</Link>
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Rem accusantium, eligendi eos iure ipsam est quidem eveniet
          architecto vel voluptates sunt, temporibus officiis fugiat
          odio nobis itaque. Perspiciatis, ipsam soluta.
        </div>
      </div>
    </div>
  )
}