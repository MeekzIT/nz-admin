export type ImageUploadModalProps = {
    open: boolean;
    handleClose: () => void;
    name: string;
    handleImageChange: (imageUrl: string) => void;
}