import styles from '../styles/components/image.module.css'

const Image = ({ src, altText }) => {
  return (
    <img className={styles.images} src={src} alt={altText} />
  )
}

export default Image