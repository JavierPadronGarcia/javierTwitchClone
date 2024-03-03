import Link from "next/link";
import { HiDotsVertical } from 'react-icons/hi';
import styles from './headernavbar.module.css';

export default function HeaderNavbar() {
  return (
    <nav className={styles.navbar}>
      <div><Link href='/directory/following'>Siguiendo</Link></div>
      <div><Link href='/directory'>Explorar</Link></div>
      <button className={styles.dotsButton}>
        <HiDotsVertical className={styles.dots} />
      </button>
    </nav>
  )
}