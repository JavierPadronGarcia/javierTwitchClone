import styles from './navbar.module.css';
import { TbArrowBarLeft } from "react-icons/tb";
import { LuArrowUpDown } from "react-icons/lu";
import SmallChannel from '../smallChannel/SmallChannel';
import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react';

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(true);

  const toggleNavbar = () => {
    setNavbarState(!navbarState);
  }

  return (
    <div className={`${(navbarState ? styles.navbarContainer : styles.navbarContainerClosed)}`}>
      <div className={styles.header}>
        <h4>Para ti</h4>
        <div className={styles.leftBarIcon} onClick={toggleNavbar}>
          <TbArrowBarLeft />
        </div>
      </div>
      <section className={styles.forYou}>
        <div className={styles.orderFilter}>
          <div className={styles.order}>
            <h5>CANALES QUE SIGO</h5>
            <p>Espectadores (descend.)</p>
            <FaRegHeart className={styles.heartIcon} />
          </div>
          <LuArrowUpDown className={styles.upDownIcon} />
        </div>
        <nav>
          <SmallChannel navbarState={navbarState} />
          <SmallChannel navbarState={navbarState} />
          <SmallChannel navbarState={navbarState} />
          <SmallChannel navbarState={navbarState} />
          <SmallChannel navbarState={navbarState} />
          <SmallChannel navbarState={navbarState} />
          <SmallChannel navbarState={navbarState} />
          <SmallChannel navbarState={navbarState} />
          <SmallChannel navbarState={navbarState} />
          <SmallChannel navbarState={navbarState} />
          <SmallChannel navbarState={navbarState} />
          <SmallChannel navbarState={navbarState} />
          <SmallChannel navbarState={navbarState} />
          <div className={styles.moreLessButtons}>
            <button className={`${styles.showMoreButton} deleteButtonStyles`}>
              <span>Mostrar más</span>
            </button>
            <button className={`${styles.showLessButton} deleteButtonStyles`}>
              <span>Mostrar menos</span>
            </button>
          </div>
        </nav>
      </section>
    </div>
  );
}
