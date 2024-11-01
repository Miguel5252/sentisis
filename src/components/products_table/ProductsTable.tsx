import { useState } from 'react'
import { Product } from '../../models/product.model'
import { formatDate } from '../../utils/formats'
import ProductProfile from '../product_profile/ProductProfile'
import PopUp from '../ui/PopUp'

type ProductsTableProps = {
  products: Product[]
  selectedProducts: { [key: string]: number }
  onChangeUnits: (itemId: string, units: number) => void
  onAddUnits: (itemId: string) => void
  onDelUnits: (itemId: string) => void
}

export default function ProductsTable({
  products,
  selectedProducts,
  onAddUnits,
  onDelUnits,
  onChangeUnits,
}: ProductsTableProps) {
  const [showModal, setShowModal] = useState(false)
  const [openedProduct, setOpenedProduct] = useState<Product | null>(null)

  const handleOpenProduct = (product: Product) => {
    setOpenedProduct(product)
    setShowModal(true)
  }

  return (
    <div>
      <table className=" bg-white shadow-md rounded-lg overflow-hidden text-xs sm:text-base">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left pl-3 pr-1 sm:px-5 font-semibold text-sm text-gray-700">
              Name
            </th>
            <th className="text-left py-3 px-1 sm:px-5 font-semibold text-sm text-gray-700">
              Type
            </th>
            <th className="text-center py-3 px-1 sm:px-5 font-semibold text-sm text-gray-700">
              Release Date
            </th>
            <th className="text-center py-3 px-1 sm:px-5 font-semibold text-sm text-gray-700">
              Units
            </th>
            <th className="text-left pr-3 pl-1 sm:px-5 font-semibold text-sm text-gray-700">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.length > 0 &&
            products.map((product) => {
              const items = selectedProducts[product.id] || 0
              return (
                <tr
                  key={product.id}
                  onClick={() => handleOpenProduct(product)}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="text-left py-4 pl-3 pr-1 sm:px-5  text-gray-700">
                    {product.name}
                  </td>
                  <td className="text-left py-4 px-1 sm:px-5  text-gray-700">{product.type}</td>
                  <td className="text-center py-4 px-1 sm:px-5  text-gray-700">
                    {formatDate(product.releaseDate)}
                  </td>
                  <td
                    onClick={(e) => e.stopPropagation()}
                    className="text-center py-4 px-1 min-w-[125px]"
                  >
                    <button
                      className="w-8 h-8 rounded text-center bg-slate-200 hover:border hover:border-blue-600"
                      onClick={() => onAddUnits(product.id)}
                    >
                      +
                    </button>
                    <input
                      className="w-8 text-center mx-1 rounded [&::-webkit-inner-spin-button]:appearance-none"
                      type="number"
                      value={items}
                      onChange={(e) => onChangeUnits(product.id, Number(e.target.value))}
                    />
                    <button
                      className="w-8 h-8 rounded text-center bg-slate-200 hover:border hover:border-blue-600"
                      onClick={() => onDelUnits(product.id)}
                    >
                      -
                    </button>
                  </td>
                  <td className="text-right py-4 pr-3 pl-1 sm:px-5  text-gray-700">
                    {product.price} €
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
      {openedProduct && (
        <PopUp show={showModal} handleShow={setShowModal}>
          <ProductProfile
            product={openedProduct}
            onAdd={() => onAddUnits(openedProduct.id)}
            onClose={() => setShowModal(false)}
          />
        </PopUp>
      )}
    </div>
  )
}
