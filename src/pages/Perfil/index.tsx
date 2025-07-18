import Hero from '../../componets/Hero'
import CardListPerfil from '../../containers/CardListPerfil'

import { PerfilContainer } from './styles'

const Perfil = () => {
  return (
    <PerfilContainer>
      <Hero title="Restaurantes" />
      <CardListPerfil />
    </PerfilContainer>
  )
}

export default Perfil
