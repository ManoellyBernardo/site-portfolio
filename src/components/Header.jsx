import Title from './Title'
import Image from './Image'

import styles from '../styles/components/header.module.css'

const Header = ({ textTitle, image, textAlt }) => {
  return (
    <header className={styles.headerContainer}>
      < Title content={textTitle} />
      < Image className={styles.headerImage} src={image} altText={textAlt} />
    </header>
  )
}

export default Header