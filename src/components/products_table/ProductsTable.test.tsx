import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import ProductsTable from './ProductsTable'
import { formatDate } from '@/utils/formats'

const mockedProducts = [
  {
    id: '7p',
    name: 'action for happinness',
    description:
      'Donec facilisis quis risus ut blandit. Morbi iaculis vel nisi ut cursus. In vel imperdiet odio, imperdiet mollis diam. Nulla vulputate orci arcu, sed tincidunt est tempor et. Aenean at.',
    type: 'talk',
    releaseDate: 1634680800000,
    price: 9,
  },
  {
    id: '6t',
    name: 'metallica',
    description:
      'Duis ex ex, porta vitae pellentesque nec, lobortis id eros. Ut rutrum gravida purus, vitae vestibulum magna aliquet ac. Vestibulum in ornare augue. Aenean pellentesque odio at sodales tempor. Aliquam at rhoncus risus. Ut semper orci.',
    type: 'show',
    releaseDate: 1623276000000,
    price: 50,
  },
]

const mockedSelected: { [key: string]: number } = {
  '7p': 10,
  '6t': 5,
}

describe('Product Profile test', () => {
  beforeEach(() => {
    render(
      <ProductsTable
        products={mockedProducts}
        selectedProducts={mockedSelected}
        onChangeUnits={() => {}}
        onAddUnits={() => {}}
        onDelUnits={() => {}}
      />
    )
  })

  it('shows all products', () => {
    const rows = screen.getAllByRole('row').slice(1)
    const productRows = rows.length
    expect(productRows).toBe(mockedProducts.length)
  })

  it('shows name, type, date, units and price ', () => {
    const productsList = screen.getAllByRole('row').slice(1)

    for (const element in productsList) {
      const product = productsList[element]
      const name = within(product).getByText(mockedProducts[element].name)
      const type = within(product).getByText(mockedProducts[element].type)
      const date = within(product).getByText(formatDate(mockedProducts[element].releaseDate))
      const units = within(product).getByRole('spinbutton').getAttribute('value')
      const mockedUnits = String(mockedSelected[mockedProducts[element].id])
      const price = within(product).getByText(`${mockedProducts[element].price} €`)

      expect(name).toBeDefined()
      expect(type).toBeDefined()
      expect(date).toBeDefined()
      expect(units).toBe(mockedUnits)
      expect(price).toBeDefined()
    }
  })
})
