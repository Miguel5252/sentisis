import { Product } from '../../models/product.model'

type ProductsTableProps = {
  products: Product[]
}

export default function ProductsTable({ products }: ProductsTableProps) {
  return (
    <div>
      <table className=" bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left py-3 px-5 uppercase font-semibold text-sm text-gray-700">
              Name
            </th>
            <th className="text-left py-3 px-5 uppercase font-semibold text-sm text-gray-700">
              Type
            </th>
            <th className="text-left py-3 px-5 uppercase font-semibold text-sm text-gray-700">
              Release Date
            </th>
            <th className="text-left py-3 px-5 uppercase font-semibold text-sm text-gray-700">
              Unit Selector
            </th>
            <th className="text-left py-3 px-5 uppercase font-semibold text-sm text-gray-700">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.length > 0 &&
            products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="text-left py-4 px-5 text-gray-700">{product.name}</td>
                <td className="text-left py-4 px-5 text-gray-700">{product.type}</td>
                <td className="text-left py-4 px-5 text-gray-700">{product.releaseDate}</td>
                <td className="text-left py-4 px-5">selector</td>
                <td className="text-left py-4 px-5 text-gray-700">{product.price} €</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
