import App from './App'
import { describe, expect, it, beforeEach, vi } from 'vitest'
import { render, screen, within, act } from '@testing-library/react'
import user from '@testing-library/user-event'

// al añadir un producto desde la ficha, suma 1
// al recargar la pagina tiene guardado lo de localhost

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

vi.mock('./service/product.service', () => {
  return {
    getProducts: async () => {
      return Promise.resolve(mockedProducts)
    },
  }
})

describe('E2E Test', async () => {
  beforeEach(async () => {
    render(<App />)
  })

  it('get the products from service', async () => {
    const productElements = await screen.findAllByRole('row')
    const productsList = productElements.slice(1)
    expect(productsList).toHaveLength(mockedProducts.length)
  })

  it('shows product profile when clicking product row', async () => {
    const productElements = await screen.findAllByRole('row')
    const productsList = productElements.slice(1)

    const rowNumber = 0
    await act(async () => await user.click(productsList[rowNumber]))
    const productDescription = screen.getByText(mockedProducts[rowNumber].description)
    const addButton = screen.getByRole('button', { name: 'Add' })

    expect(addButton).toBeDefined()
    expect(productDescription).toBeDefined()
  })

  it('adds unit when clicking on + button', async () => {
    const productElements = await screen.findAllByRole('row')
    const productsList = productElements.slice(1)

    const rowNumber = 0
    let unitsValue = within(productsList[rowNumber]).getByRole('spinbutton').getAttribute('value')
    const AddButton = within(productsList[rowNumber]).getByRole('button', { name: '+' })
    expect(unitsValue).toBe(String(0))

    await act(async () => await user.click(AddButton))
    unitsValue = within(productsList[rowNumber]).getByRole('spinbutton').getAttribute('value')
    expect(unitsValue).toBe(String(1))
  })

  it('keep cart value on local storage', async () => {
    //El componente App se renderiza en cada test con valores iniciales
    //Despues deberia actualizarse con el valor de cart en localstorage
    const productElements = await screen.findAllByRole('row')
    const productsList = productElements.slice(1)

    const rowNumber = 0
    let unitsValue = within(productsList[rowNumber]).getByRole('spinbutton').getAttribute('value')
    expect(unitsValue).toBe(String(1))
  })

  it('decrease unit when clicking on - button', async () => {
    const productElements = await screen.findAllByRole('row')
    const productsList = productElements.slice(1)

    const rowNumber = 0
    let unitsValue = within(productsList[rowNumber]).getByRole('spinbutton').getAttribute('value')
    const delButton = within(productsList[rowNumber]).getByRole('button', { name: '-' })
    expect(unitsValue).toBe(String(1))

    await act(async () => await user.click(delButton))
    unitsValue = within(productsList[rowNumber]).getByRole('spinbutton').getAttribute('value')
    expect(unitsValue).toBe(String(0))
  })

  it('shows cart button when a product is selected', async () => {
    const productElements = await screen.findAllByRole('row')
    const productsList = productElements.slice(1)
    const rowNumber = 0
    const AddButton = within(productsList[rowNumber]).getByRole('button', { name: '+' })

    // antes de tener productos seleccionados
    let cartButton = screen.queryByRole('button', { name: 'Cart' })
    expect(cartButton).toBe(null)

    // al seleccinar un producto
    await act(async () => await user.click(AddButton))
    cartButton = await screen.findByRole('button', { name: 'Cart' })
    expect(cartButton).toBeDefined()
  })

  it('hides cart button when there are not products selected', async () => {
    const productElements = await screen.findAllByRole('row')
    const productsList = productElements.slice(1)
    const rowNumber = 0
    const descreaseButton = within(productsList[rowNumber]).getByRole('button', { name: '-' })

    // Teniendo productos seleccionados el boton cart deberia estar visible
    let cartButton = screen.queryByRole('button', { name: 'Cart' })
    expect(cartButton).toBeDefined()

    // Al quitar el producto seleccionado el boton cart deberia desaparecer
    await act(async () => await user.click(descreaseButton))
    cartButton = screen.queryByRole('button', { name: 'Cart' })
    expect(cartButton).toBe(null)
  })

  it('adds element from product profile´s add button', async () => {
    const productElements = await screen.findAllByRole('row')
    const productsList = productElements.slice(1)

    const rowNumber = 0
    let unitsValue = within(productsList[rowNumber]).getByRole('spinbutton').getAttribute('value')
    expect(unitsValue).toBe(String(0))

    await act(async () => await user.click(productsList[rowNumber]))
    const addButton = screen.getByRole('button', { name: 'Add' })
    await act(async () => await user.click(addButton))

    unitsValue = within(productsList[rowNumber]).getByRole('spinbutton').getAttribute('value')
    expect(unitsValue).toBe(String(1))
  })
})
