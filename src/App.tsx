import { useState } from 'react'
import './App.css'
import ProductsTable from './components/products_table/ProductsTable'
import useCart from './hooks/useCart'
import CartResume from './components/cart_resume/CartResume'
import PopUp from './components/ui/PopUp'
import useProducts from './hooks/useProducts'
import { ShoppingCart } from 'lucide-react'

function App() {
  const { products } = useProducts()
  const { cart, selectedProducts, handleIncreaseUnits, handleDecreaseUnits, HandleChangeUnits } =
    useCart(products)
  const [showCart, setShowCart] = useState(false)

  return (
    <div className="flex flex-col justify-center items-center mt-24">
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
          className="flex flex-row justify-center items-center gap-2 mt-5 w-fit min-w-32 bg-blue-500 text-white hover:bg-blue-600 py-2 px-3 rounded"
          onClick={() => setShowCart(true)}
        >
          <ShoppingCart className="pb-[1px]" size={18} />
          <div>Cart</div>
        </button>
      )}
      <PopUp show={showCart} handleShow={setShowCart}>
        <CartResume cart={cart} />
      </PopUp>
    </div>
  )
}

export default App
