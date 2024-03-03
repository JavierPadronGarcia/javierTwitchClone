import '@/app/globals.css';
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import styles from '@/layouts/layout.module.css';

export default function Layout({ children }) {

  return (
    <div className={styles.container}>
      <div className={styles.header}><Header /></div>
      <div className={styles.navbar}><Navbar /></div>
      <main className={styles.main}>{children}</main>
    </div>
  )
}