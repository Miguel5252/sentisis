import { useState, useEffect } from 'react'
import './App.css'
import ProductsTable from './components/products_table/ProductsTable'
import { getProducts } from './service/product.service'
import { Product } from './models/product.model'

function App() {
  const [products, setProducts] = useState<Product[] | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const productsLits = await getProducts()
      setProducts(productsLits)
    }
    fetchProducts()
  }, [])

  return <div>{products && products.length > 0 && <ProductsTable products={products} />}</div>
}

export default App
