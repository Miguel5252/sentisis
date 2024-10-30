import { Product } from '@/models/product.model'
import { useToast } from '@/hooks/use-toast'
import { Plus } from 'lucide-react'

type ProductProfileProps = {
  product: Product
  onAdd: () => void
  onClose: () => void
}

export default function ProductProfile({ product, onAdd, onClose }: ProductProfileProps) {
  const { toast } = useToast()

  const handleAddItem = () => {
    onAdd()
    toast({
      description: 'El producto se ha añadido',
      duration: 2000,
    })
    onClose()
  }
  return (
    <div className="flex flex-col p-2">
      <div className="flex flex-row gap-3 items-center mb-2">
        <h1 className="text-lg font-bold">{product.name.toUpperCase()}</h1>
        <div className="bg-slate-200 h-fit rounded py-1 px-3 mb-[2px] text-xs">
          {product.type.toUpperCase()}
        </div>
      </div>
      <p className="text-sm text-slate-600">{product.description}</p>
      <div className="w-full flex justify-center mt-4">
        <button
          className="flex flex-row justify-center items-center gap-2 mt-5 w-fit min-w-24 bg-blue-500 text-white hover:bg-blue-600 py-2 px-3 rounded"
          onClick={handleAddItem}
        >
          <div>Add</div>
          <Plus className="pb-[1px]" size={18} />
        </button>
      </div>
    </div>
  )
}
