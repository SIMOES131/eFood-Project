import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import Logo from '../Logo'
import logo from '../../assets/images/logo.png'

import { Container } from '../../global/globalStyles'

import {
  HeroContainer,
  HeroHeader,
  Text,
  TextContainer,
  Title,
  TitleLink
} from './styles'

type HeroProps = {
  title?: string
  textContent?: string
}

const Hero = ({ textContent, title }: HeroProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  function handleOpenCart() {
    dispatch(open())
  }

  function renderHeaderContent(item: string | undefined) {
    if (item === undefined) {
      return <Logo kind="link" cover={logo} title="Logo eFood" to="/" />
    }

    return (
      <HeroHeader>
        <TitleLink to="/">{item}</TitleLink>
        <Logo kind="link" cover={logo} title="Logo eFood" to="/" />
        <Title onClick={handleOpenCart}>
          {items.length} produto(s) no carrinho
        </Title>
      </HeroHeader>
    )
  }

  return (
    <HeroContainer>
      <Container>
        {renderHeaderContent(title)}

        {textContent && (
          <TextContainer>
            <Text>{textContent}</Text>
          </TextContainer>
        )}
      </Container>
    </HeroContainer>
  )
}

export default Hero
