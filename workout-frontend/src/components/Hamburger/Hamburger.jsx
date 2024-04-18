import { useState} from "react"
import styles from './Hamburger.module.scss'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import Menu from "./Menu/Menu";


export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose color="#fff" /> : <CgMenuRight color="#fff"/>}
      </button>
      <Menu isOpen={isOpen} />
    </div>
  )
}
