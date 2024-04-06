import { useState } from "react";
import FileUpload from "../FileUpload";
import FoodUploadPreview from "./FoodUploadPreview";

export default function DailyFoodUpload({ foodInfo }: any) {

    const foodInformation = foodInfo;
    
    const [uploadedFile, setUploadedFile] = useState(null);
    const [shrinkedImage, setShrinkedImage] = useState(null);

    
    
    const onFileUpload = async (file) => {
        const image = await shrinkImage(file);        
        
        setShrinkedImage(image);
        setUploadedFile(file);
        
    }

    const generateUploadPreviewInfo = () => {
        return {
            thumbnail: shrinkedImage
        }
    }

    const shrinkImage = async (file) => {
        return new Promise(function(resolve, reject) {
            const reader = new FileReader();
            reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                const aspectRatio = img.width / img.height;
                const newSize = 140;

                canvas.width = newSize;
                canvas.height = newSize / aspectRatio;

                ctx.drawImage(img, 0, 0, newSize, newSize / aspectRatio);

                const resizedImageSrc = canvas.toDataURL('image/jpeg');

                resolve(resizedImageSrc);
            };            
            
            img.onerror = (err) => {
                reject(err);
            }
        

            img.src = e.target.result;
            };

            reader.onerror = (err) => {
                reject(err);
            }

            reader.readAsDataURL(file);
        })
    }

    const loadShrinkedImage = async (imageSrc) => {
        const img = new Image();
        const returnPromise = new Promise(function(resolve, reject) {
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
    
                const aspectRatio = img.width / img.height;
                const newSize = 140;
    
                canvas.width = newSize;
                canvas.height = newSize / aspectRatio;
    
                ctx.drawImage(img, 0, 0, newSize, newSize / aspectRatio);
    
                const resizedImageSrc = canvas.toDataURL('image/jpeg');
                resolve(resizedImageSrc);
            };

            img.onerror = ()=> {
                reject("error");
            };
        });
        img.src = imageSrc;
        return returnPromise;        
    }

    const visualizeFileUpload = () => {
        return <FileUpload fileUploadProperties={foodInformation} onFileUpload={onFileUpload}></FileUpload>
    }

    const visualizeFoodPreview = () => {
        return <FoodUploadPreview foodUploadInfo = {generateUploadPreviewInfo()}></FoodUploadPreview>
    }

    return(
        <div className="w-3/12 px-1/2">
            {uploadedFile ? visualizeFoodPreview() : visualizeFileUpload()}
        </div>
    )
}