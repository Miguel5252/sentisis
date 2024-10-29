import { useState, useEffect } from 'react'
import { Product } from '@/models/product.model'
import { LOCAL_STORAGE } from '@/lib/constants'
import { Cart } from '@/models/product.model'

type SelectedProducts = { [key: string]: number }

export default function useCart(products: Product[] | null) {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProducts>({})

  const cart: Cart = products
    ?.map((item) => ({ ...item, units: selectedProducts[item.id] }))
    .filter((item) => item.units > 0)

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

  const handleIncreaseUnits = (itemId: string) => {
    const newSelected = {
      ...selectedProducts,
      [itemId]: typeof selectedProducts[itemId] === 'number' ? selectedProducts[itemId] + 1 : 1,
    }
    setSelectedProducts(newSelected)
    localStorage.setItem(LOCAL_STORAGE.SELECTED_PRODUCTS, JSON.stringify(newSelected))
  }

  const HandleChangeUnits = (itemId: string, units: number) => {
    const newSelected = { ...selectedProducts, [itemId]: units }
    setSelectedProducts(newSelected)
    localStorage.setItem(LOCAL_STORAGE.SELECTED_PRODUCTS, JSON.stringify(newSelected))
  }

  const handleDecreaseUnits = (itemId: string) => {
    if (selectedProducts[itemId] <= 0) return
    const newSelected = { ...selectedProducts, [itemId]: typeof selectedProducts[itemId] === 'number' ? selectedProducts[itemId] - 1 : 0 }
    setSelectedProducts(newSelected)
    localStorage.setItem(LOCAL_STORAGE.SELECTED_PRODUCTS, JSON.stringify(newSelected))
  }
  return { selectedProducts, cart, handleIncreaseUnits, handleDecreaseUnits, HandleChangeUnits }
}
