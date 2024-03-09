'use client';

import { FaAngleLeft } from "react-icons/fa";

export default function LeftArrow({ styles, clicked }) {
  return (
    <div className={styles.leftMove}>
      <div onClick={clicked}><FaAngleLeft /></div>
    </div>
  );
}