import styles from './searchInput.module.css';
import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
  return (
    <div className={styles.searchContainer}>
      <form className={styles.inputContainer}>
        <input type='search' placeholder='Buscar' className={styles.input} />
        <span>
          <button className={`${styles.button} deleteButtonStyles`}>
            <FiSearch />
          </button>
        </span>
      </form>
    </div>
  )
}