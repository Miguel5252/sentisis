import { useState, useEffect } from 'react'
import { getProducts } from '@/service/product.service'
import { Product } from '@/models/product.model'

export default function useProducts() {
  const [products, setProducts] = useState<Product[] | null>(null)

  //inicializar tabla productos
  useEffect(() => {
    const fetchProducts = async () => {
      const productsLits = await getProducts()
      if (productsLits) {
        const sortedProductList = productsLits.sort((a, b) => b.releaseDate - a.releaseDate)
        setProducts(sortedProductList)
      }
    }
    fetchProducts()
  }, [])

  return { products }
}
