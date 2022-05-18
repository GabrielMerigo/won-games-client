import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import GameCard from './'

const props = {
  title: "Population Zero",
  developer: "Rockstar Games",
  img: "/img/banner-game-card.jpg",
  price: "R$ 230,00"
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />);


    //Verificar se o title foi impresso

    //Verificar se o developer foi impresso

    //verificar se o img foi impresso

    //verificar se o price foi impresso
  })
})
