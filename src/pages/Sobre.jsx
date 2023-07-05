import Header from '../components/Header'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'

import sobre_image from '../assets/reading.png'
import manu_image from '../assets/foto-manu.jpeg'

import styles from '../styles/pages/sobre.module.css'

const Sobre = () => {
  return (
    <main>
      <Header textTitle='Minha história' image={sobre_image} />
      <section className={styles.container}>
        <div className={styles.sobreContainer}>
          < Subtitle content='Manoelly Bernardo, prazer!' />
          < img className={styles.imageSobre} src={manu_image} />
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.paragraphSobre}>
            Nascida e criada em Recife, tenho 25 anos e atualmente estou cursando minha segunda graduação em Análise e Desenvolvimento de Sistemas. Em 2021, me formei em Nutrição e, no ano seguinte, decidi fazer a transição de carreira, mergulhando de cabeça no mundo da tecnologia.
            <br />
            <br />
            Atualmente, estou participando do meu segundo bootcamp, o de Frontend da reprograma, sendo o primeiro o de Java Full Stack da SoulCode Academy, onde também fui convidada para ser monitora.
            <br />
            <br />
            Nas horas vagas, gosto de me envolver em atividades típicas de nerd, como jogar (já zerei a trilogia de Lara Croft, The Witcher 3, a duologia de Plague Tale e muitos outros), assistir séries (sou uma grande fã de Game of Thrones), filmes (apaixonada por cinema) e ler (já li todos os livros de Harry Potter e Percy Jackson).
          </p>
        </div>
      </section>
    </main>
  )
}

export default Sobre