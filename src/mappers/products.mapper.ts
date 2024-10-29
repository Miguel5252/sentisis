import { Product } from '../models/product.model'

type ApiProduct = {
  id: string
  title: string
  type: string
  releaseDate: number
  description: string
  price: number
  currency: string
}

export function getMappedProduct(product: ApiProduct): Product {
  const myProduct = {
    id: product.id,
    name: product.title,
    description: product.description,
    type: product.type,
    releaseDate: product.releaseDate,
    price: product.price,
  }
  return myProduct
}

export function getMappedProductList(ApiProductList: ApiProduct[]): Product[] {
  return ApiProductList.map((apiProduct) => getMappedProduct(apiProduct))
}
