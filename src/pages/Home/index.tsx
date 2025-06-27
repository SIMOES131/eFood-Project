import Hero from '../../componets/Hero'
import CardListHome from '../../containers/CardListHome/idex'
import { Container } from '../../global/globalStyles'
import { HomeContainer } from './styles'

const Home = () => (
  <HomeContainer>
    <Hero textContent="Viva experiências gastronômicas no conforto da sua casa" />

    <Container>
      <CardListHome />
    </Container>
  </HomeContainer>
)

export default Home
