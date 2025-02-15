export type ModalProps = {
    children: React.ReactNode
    isOpen: boolean
    handleClose: () => void
    title?: string
    description?: string
}