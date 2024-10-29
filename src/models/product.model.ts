export type Product = {
  id: string
  name: string
  description: string
  type: string
  releaseDate: number
  price: number
}

type SelectedProduct = Product & { units: number }

export type Cart = SelectedProduct[] | undefined
