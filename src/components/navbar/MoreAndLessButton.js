'use client';
import styles from './moreAndLessButton.module.css';

export default function MoreAndLessButton({ showMore, showLess, numChannelsToShow }) {
  return (
    <div className={styles.moreLessButtons}>
      <button onClick={showMore} className={`${styles.showMoreButton} deleteButtonStyles`}>
        <span>Mostrar más</span>
      </button>
      {numChannelsToShow > 12 &&
        <button onClick={showLess} className={`${styles.showLessButton} deleteButtonStyles`}>
          <span>Mostrar menos</span>
        </button>
      }
    </div>
  )
}