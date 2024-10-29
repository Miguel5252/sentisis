import { Cart } from '@/models/product.model'

type CartResumeProps = {
  cart: Cart
}

export default function CartResume({ cart }: CartResumeProps) {
  const sortedByUnitCart = cart?.sort((a, b) => b.units - a.units)
  let totalPrice = 0

  cart?.forEach((product) => {
    totalPrice = totalPrice + product.units * product.price
  })

  return (
    <div className="">
      <div className="text-lg font-bold mb-4">My Cart</div>
      <table className=" bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left py-3 px-5 uppercase font-semibold text-sm text-gray-700">
              Name
            </th>
            <th className="text-center py-3 px-5 uppercase font-semibold text-sm text-gray-700">
              Unit Selector
            </th>
            <th className="text-left py-3 px-5 uppercase font-semibold text-sm text-gray-700">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedByUnitCart &&
            sortedByUnitCart?.length > 0 &&
            sortedByUnitCart.map((product) => {
              return (
                <tr key={product.id} className="border-b hover:bg-gray-50 cursor-pointer">
                  <td className="text-left py-4 px-5 text-gray-700">{product.name}</td>
                  <td onClick={(e) => e.stopPropagation()} className="text-center py-4 px-5">
                    <div className="w-8 text-center mx-2 rounded [&::-webkit-inner-spin-button]:appearance-none">
                      {product.units}
                    </div>
                  </td>
                  <td className="text-left py-4 px-5 text-gray-700">{product.price} €</td>
                </tr>
              )
            })}
        </tbody>
      </table>
      <div className="w-full flex flex-row justify-end text-lg font-bold mt-6 mb-4">
        Total: {totalPrice}€
      </div>
    </div>
  )
}
