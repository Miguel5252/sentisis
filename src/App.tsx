import { useState, useEffect } from 'react'
import './App.css'
import ProductsTable from './components/products_table/ProductsTable'
import { getProducts } from './service/product.service'
import { Product } from './models/product.model'
import { LOCAL_STORAGE } from './lib/constants'

type SelectedProducts = { [key: string]: number }

function App() {
  const [products, setProducts] = useState<Product[] | null>(null)
  const [selectedProducts, setSelectedProducts] = useState<SelectedProducts>({})

  const handleIncreaseUnits = (itemId: string) => {
    const newSelected = { ...selectedProducts, [itemId]: selectedProducts[itemId] + 1 }
    setSelectedProducts(newSelected)
    localStorage.setItem(LOCAL_STORAGE.SELECTED_PRODUCTS, JSON.stringify(newSelected))
  }

  const handleDecreaseUnits = (itemId: string) => {
    if (selectedProducts[itemId] <= 0) return
    const newSelected = { ...selectedProducts, [itemId]: selectedProducts[itemId] - 1 }
    setSelectedProducts(newSelected)
    localStorage.setItem(LOCAL_STORAGE.SELECTED_PRODUCTS, JSON.stringify(newSelected))
  }

  //inicializar tabla productos
  useEffect(() => {
    const fetchProducts = async () => {
      const productsLits = await getProducts()
      const sortedProductList = productsLits.sort((a, b) => b.releaseDate - a.releaseDate)
      setProducts(sortedProductList)
    }
    fetchProducts()
  }, [])

  //inicializar productos seleccionados
  useEffect(() => {
    if (products) {
      const savedSelectedProducts = localStorage.getItem('selected_products')
      const selected: SelectedProducts = savedSelectedProducts
        ? JSON.parse(savedSelectedProducts)
        : {}
      setSelectedProducts(selected)
    }
  }, [products])

  return (
    <div className="flex flex-row justify-center">
      {products && products.length > 0 && (
        <ProductsTable
          products={products}
          selectedProducts={selectedProducts}
          onAddUnits={handleIncreaseUnits}
          onDelUnits={handleDecreaseUnits}
        />
      )}
    </div>
  )
}

export default App
