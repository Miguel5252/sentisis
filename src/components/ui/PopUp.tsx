import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

type PopUpProps = {
  show: boolean
  handleShow: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export default function PopUp({ show = false, handleShow, children }: PopUpProps) {
  return (
    <Dialog open={show} onOpenChange={handleShow}>
      <DialogContent>
        <DialogTitle />
        {children}
      </DialogContent>
    </Dialog>
  )
}
