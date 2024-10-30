import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import CartResume from './CartResume'

const mockedCart = [
  {
    id: '7p',
    name: 'action for happinness',
    description:
      'Donec facilisis quis risus ut blandit. Morbi iaculis vel nisi ut cursus. In vel imperdiet odio, imperdiet mollis diam. Nulla vulputate orci arcu, sed tincidunt est tempor et. Aenean at.',
    type: 'talk',
    releaseDate: 1634680800000,
    price: 9,
    units: 5,
  },
  {
    id: '6t',
    name: 'metallica',
    description:
      'Duis ex ex, porta vitae pellentesque nec, lobortis id eros. Ut rutrum gravida purus, vitae vestibulum magna aliquet ac. Vestibulum in ornare augue. Aenean pellentesque odio at sodales tempor. Aliquam at rhoncus risus. Ut semper orci.',
    type: 'show',
    releaseDate: 1623276000000,
    price: 50,
    units: 4,
  },
  {
    id: '3n',
    name: 'virtual cook',
    description:
      'Pellentesque quis semper mauris. Mauris pretium lobortis ligula, a dictum ante. Praesent vulputate arcu ac orci pretium facilisis. Ut dictum, quam ac interdum rhoncus, tortor metus feugiat nulla, vel semper.',
    type: 'show',
    releaseDate: 1609542000000,
    price: 0,
    units: 3,
  },
  {
    id: '9t',
    name: 'ghost',
    description:
      'Maecenas porta orci interdum lacus varius, at egestas turpis consequat. Mauris ac condimentum metus. Aenean viverra interdum porta. Nunc laoreet a libero sed finibus. Suspendisse vitae dictum magna. In ut elementum.',
    type: 'musical',
    releaseDate: 1607554800000,
    price: 25,
    units: 2,
  },
  {
    id: '1a',
    name: 'Johnny Cash tribute',
    description:
      'Mauris finibus commodo malesuada. Vestibulum porttitor, massa a gravida faucibus, augue velit tristique libero, sit amet scelerisque tortor erat ut velit. Praesent orci tellus, aliquam id felis vitae, laoreet facilisis.',
    type: 'show',
    releaseDate: 1555970400000,
    price: 15,
    units: 1,
  },
]

describe('Cart test', () => {
  beforeEach(() => {
    render(<CartResume cart={mockedCart} />)
  })

  it('shows up title', () => {
    const myCartTitle = screen.getByText('My Cart')
    expect(myCartTitle).toBeDefined()
  })

  it('shows all elements selected', () => {
    const rows = screen.getAllByRole('row').slice(1)
    const productRows = rows.length
    expect(productRows).toBe(mockedCart.length)
  })

  it('shows name, units and price ', () => {
    const productsList = screen.getAllByRole('row').slice(1)

    for (const element in productsList) {
      const product = productsList[element]
      const name = within(product).getByText(mockedCart[element].name)
      const units = within(product).getByText(mockedCart[element].units)
      const price = within(product).getByText(`${mockedCart[element].price} €`)

      expect(name).toBeDefined()
      expect(units).toBeDefined()
      expect(price).toBeDefined()
    }
  })

  it('shows all elements selected', () => {
    let mockedPrice = 0
    mockedCart.forEach((product) => {
      mockedPrice = mockedPrice + product.units * product.price
    })
    const totalPriceString = screen.getByText(`Total: ${mockedPrice}€`)
    expect(totalPriceString).toBeDefined()
  })
})
