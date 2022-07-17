import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem from './'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x582',
  title: 'Red Dead Redemption II',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />);

    expect(screen.getByRole('heading', { name: /Red Dead Redemption II/i })).toBeInTheDocument();
    expect(screen.getByAltText(/Red Dead Redemption II/i)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 215,00/i)).toBeInTheDocument();
  });

  it('should render the item with download link', () => {
    const downloadLink = 'http://link.com'

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />);
    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 5237',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />);
    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute('src', paymentInfo.img);

    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument();
    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument();
  })
})
