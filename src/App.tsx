import { useState, useEffect } from 'react'
import './App.css'
import ProductsTable from './components/products_table/ProductsTable'
import { getProducts } from './service/product.service'
import { Product } from './models/product.model'
import useCart from './hooks/useCart'
import CartResume from './components/cart_resume/CartResume'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

function App() {
  const [products, setProducts] = useState<Product[] | null>(null)
  const { cart, selectedProducts, handleIncreaseUnits, handleDecreaseUnits, HandleChangeUnits } =
    useCart(products)
  const [showCart, setShowCart] = useState(false)

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

  return (
    <div className="flex flex-col justify-center items-center">
      {products && products.length > 0 && (
        <ProductsTable
          products={products}
          selectedProducts={selectedProducts}
          onChangeUnits={HandleChangeUnits}
          onAddUnits={handleIncreaseUnits}
          onDelUnits={handleDecreaseUnits}
        />
      )}
      {cart && cart.length > 0 && (
        <button
          className="mt-5 w-fit min-w-32 bg-blue-500 text-white hover:bg-blue-600 py-2 px-3 rounded"
          onClick={() => setShowCart(true)}
        >
          Cart
        </button>
      )}
      {showCart && (
        <Dialog open={showCart} onOpenChange={setShowCart}>
          <DialogContent>
            <DialogTitle />
            <CartResume cart={cart} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

export default App
