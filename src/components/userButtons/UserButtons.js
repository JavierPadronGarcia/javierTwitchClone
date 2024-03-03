import styles from './userButtons.module.css';
import { CgCrown } from "react-icons/cg";
import { AiOutlineInbox } from "react-icons/ai";
import { BiMessageAlt, BiDiamond } from "react-icons/bi";
import { RiBattery2ChargeLine } from "react-icons/ri";
import SevenTvIcon from '@/icons/SevenTvIcon';

export default function UserButtons() {
  return (
    <div className={styles.mainContainer}>

      <div className={styles.iconContainer}>
        <button className={`${styles.prime} ${styles.icon} deleteButtonStyles`} >
          <CgCrown />
        </button>
      </div>

      <div className={styles.iconContainer}>

        <button className={`${styles.inventory} ${styles.icon} deleteButtonStyles`}>
          <AiOutlineInbox />
        </button>
      </div>

      <div className={styles.iconContainer}>
        <button className={`${styles.wisper} ${styles.icon} deleteButtonStyles`}>
          <BiMessageAlt />
        </button>
      </div>

      <div className={styles.iconContainer}>
        <button className={`${styles.bits} ${styles.icon} deleteButtonStyles`}>
          <BiDiamond />
        </button>
      </div>

      <button className={`${styles.turbo} deleteButtonStyles`}>
        <RiBattery2ChargeLine className={styles.turboBatteryIcon} />
        <span>Sin anuncios</span>
      </button>

      <div className={styles.iconContainer}>
        <button className={`${styles.stv} ${styles.icon} deleteButtonStyles`}>
          <SevenTvIcon />
        </button>
      </div>

      <div className={styles.avatarContainer}>
        <button className={`${styles.avatar} deleteButtonStyles`}></button>
      </div>

    </div>
  )
}