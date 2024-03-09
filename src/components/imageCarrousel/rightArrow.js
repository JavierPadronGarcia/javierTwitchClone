'use client';

import { FaAngleRight } from "react-icons/fa";

export default function RightArrow({ styles, clicked }) {
  return (
    <div className={styles.rightMove}>
      <div onClick={clicked}><FaAngleRight /></div>
    </div>
  )
}