import Link from 'next/link';
import styles from './streamsYouWouldLike.module.css';
import StreamSquare from '../streamSquare/StreamSquare';

export default function StreamsYouWouldLike() {
  return (
    <article className={styles.main}>
      <h3 className={styles.title}>
        <Link href='/directory/all'>Canales en directo</Link> que podrían gustarte
      </h3>
      <section className={styles.streams}>
        <StreamSquare />
        <StreamSquare />
        <StreamSquare />
        <StreamSquare />
        <StreamSquare />
      </section>
    </article>
  )
}