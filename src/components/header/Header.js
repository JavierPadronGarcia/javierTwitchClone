import TwitchIcon from '@/icons/TwitchIcon';
import styles from './header.module.css';
import HeaderNavbar from "@/components/headerNavbar/HeaderNavbar";
import SearchInput from '@/components/searchInput/SearchInput';
import UserButtons from '@/components/userButtons/UserButtons';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link href='/' className={styles.icon}><TwitchIcon /></Link>
      <HeaderNavbar />
      <SearchInput />
      <UserButtons />
    </div>
  )
}