import Logo from '../Logo'
import logo from '../../assets/images/logo.png'
import { SocialLinks } from '../../utils/list'

import { FooterContainer, SocialIcons, Text } from './styles'

const Footer = () => (
  <FooterContainer>
    <Logo kind="link" cover={logo} title="Logo eFood" to="/" />

    <SocialIcons>
      {SocialLinks.map((item) => (
        <img src={item.icon} alt={item.title} key={item.id} />
      ))}
    </SocialIcons>

    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </FooterContainer>
)

export default Footer
