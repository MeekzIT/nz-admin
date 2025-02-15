export type CloudinaryUploadWidgetProps = {
    uwConfig: Record<string, unknown>;
    handleUpload: (url: string, name: string) => void;
    name: string;
};

export  interface CloudinaryContextType {
    loaded: boolean;
}