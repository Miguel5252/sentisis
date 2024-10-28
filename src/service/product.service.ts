import { getProductList } from '../api/product.api'
import { getMappedProductList } from '../mappers/products.mapper'

export async function getProducts() {
  const apiProducts = await getProductList()
  const products = getMappedProductList(apiProducts)
  return products
}
