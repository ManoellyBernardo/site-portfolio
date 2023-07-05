import Header from '../components/Header'
import Text from '../components/Text'
import Subtitle from '../components/Subtitle'

import home_image from '../assets/welcome.png'

import { Butterfly, Code, AddressBook } from 'phosphor-react'

import styles from '../styles/pages/home.module.css'

const Home = () => {
  return (
    <main>
      <Header image={home_image} />
      <section className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <Butterfly size={200} color='#000000' weight='thin' />
          <Subtitle content='Vida' />
          <Text content='Em Sobre conto um pouco sobre mim. Descrevo um pouco da minha história, minhas formações, curiosidades e alguns gostos pessoais.' />
        </div>
        <div className={styles.cardContainer}>
          <Code size={200} color='#000000' weight='thin' />
          <Subtitle content='Código' />
          <Text content='Em Projetos mostro alguns dos meus projetos favoritos e todos os meus repositórios públicos no GitHub.' />
        </div>
        <div className={styles.cardContainer}>
          <AddressBook size={200} color='#000000' weight='thin' />
          <Subtitle content='Contato' />
          <Text content='Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.' />
        </div>
      </section>
    </main>
  )
}

export default Home