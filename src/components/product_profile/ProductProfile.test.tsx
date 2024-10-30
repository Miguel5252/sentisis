import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductProfile from './ProductProfile'

const mockedProduct = {
  id: '7p',
  name: 'action for happinness',
  description:
    'Donec facilisis quis risus ut blandit. Morbi iaculis vel nisi ut cursus. In vel imperdiet odio, imperdiet mollis diam. Nulla vulputate orci arcu, sed tincidunt est tempor et. Aenean at.',
  type: 'talk',
  releaseDate: 1634680800000,
  price: 9,
}

describe('Product Profile test', () => {
  beforeEach(() => {
    render(<ProductProfile product={mockedProduct} onAdd={() => {}} onClose={() => {}} />)
  })

  it('shows product name', () => {
    const myCartTitle = screen.getByText(mockedProduct.name.toUpperCase())
    expect(myCartTitle).toBeDefined()
  })

  it('shows product description name', () => {
    const myCartTitle = screen.getByText(mockedProduct.description)
    expect(myCartTitle).toBeDefined()
  })

  it('shows product label', () => {
    const myCartTitle = screen.getByText(mockedProduct.type.toUpperCase())
    expect(myCartTitle).toBeDefined()
  })

  it('shows button', () => {
    const addButton = screen.getByRole('button')
    expect(addButton).toBeDefined()
  })
})
