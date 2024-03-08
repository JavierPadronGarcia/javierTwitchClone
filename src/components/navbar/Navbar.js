import styles from './navbar.module.css';
import { TbArrowBarLeft } from "react-icons/tb";
import { LuArrowUpDown } from "react-icons/lu";
import SmallChannel from '../smallChannel/SmallChannel';
import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react';
import MoreAndLessButton from './MoreAndLessButton';

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(true);
  const [numChannelsToShow, setNumChannelsToShow] = useState(12);

  const toggleNavbar = () => {
    setNavbarState(!navbarState);
  }

  const showMoreChannels = () => {
    setNumChannelsToShow(numChannelsToShow + 5);
  }

  const showLessChannels = () => {
    setNumChannelsToShow(Math.max(numChannelsToShow - 5, 12));
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
          {[...Array(numChannelsToShow)].map((_, index) => (
            <div className={styles.channelContainer}>
              <SmallChannel key={index} navbarState={navbarState} />
            </div>
          ))}
          <MoreAndLessButton
            showMore={showMoreChannels}
            showLess={showLessChannels}
            numChannelsToShow={numChannelsToShow}
          />
        </nav>
      </section>
    </div>
  );
}
