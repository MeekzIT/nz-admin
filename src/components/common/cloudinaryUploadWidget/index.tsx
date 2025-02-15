import { Button } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import { CloudinaryContextType, CloudinaryUploadWidgetProps } from "./types";

export const CloudinaryScriptContext = createContext<CloudinaryContextType | undefined>(undefined);

declare global {
    interface Window {
        cloudinary: {
            createUploadWidget: (
                config: Record<string, unknown>,
                callback: (error: unknown, result: { event: string; info: { url: string } }) => void
            ) => { open: () => void };
        };
    }
}

const CloudinaryUploadWidget: React.FC<CloudinaryUploadWidgetProps> = ({ uwConfig, handleUpload, name }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            const uwScript = document.getElementById("uw");
            if (!uwScript) {
                const script = document.createElement("script");
                script.setAttribute("async", "");
                script.setAttribute("id", "uw");
                script.src = "https://upload-widget.cloudinary.com/global/all.js";
                script.addEventListener("load", () => setLoaded(true));
                document.body.appendChild(script);
            } else {
                setLoaded(true);
            }
        }
    }, [loaded]);

    const initializeCloudinaryWidget = () => {
        if (loaded && window.cloudinary) {
            const myWidget = window.cloudinary.createUploadWidget(uwConfig, (error, result) => {
                if (!error && result && result.event === "success") {
                    handleUpload(result.info.url, name);
                }
            });
            myWidget.open();
        }
    };

    return (
        <CloudinaryScriptContext.Provider value={{ loaded }}>
            <Button id="upload_widget" variant="outlined" onClick={initializeCloudinaryWidget}>
                Upload new image
            </Button>
        </CloudinaryScriptContext.Provider>
    );
};

export default CloudinaryUploadWidget;
