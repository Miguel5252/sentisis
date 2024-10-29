import { getProductList } from '../api/product.api'
import { getMappedProductList } from '../mappers/products.mapper'

export async function getProducts() {
  try {
    const apiProducts = await getProductList()
    const products = getMappedProductList(apiProducts)
    return products
  } catch (error) {
    console.log(error)
  }
}
