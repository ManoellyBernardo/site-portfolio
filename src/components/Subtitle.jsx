import styles from '../styles/components/subtitle.module.css'

const Subtitle = ({ content }) => {
  return (
    <h3 className={styles.cardTitle}>{content}</h3>
  )
}

export default Subtitle