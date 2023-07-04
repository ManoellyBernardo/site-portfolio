import styles from '../styles/components/title.module.css'

const Title = ({ content }) => {
  return (
    <h2 className={styles.title}>{content}</h2>
  )
}

export default Title