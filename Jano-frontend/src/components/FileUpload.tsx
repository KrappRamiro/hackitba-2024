import React, { useEffect, useState } from "react";
import "./FileUpload.css"

export default function FileUpload({fileUploadProperties, onFileUpload}) {

    const [selectedFile, setSelectedFile] = useState(null);

// Function to handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the first selected file
        setSelectedFile(file); // Update state with the selected file        
        onFileUpload(file)
    };
    
    const {labelText, iconName ,allowedExtensions} = fileUploadProperties;
    
    return (
        <label
            className="flex flex-col justify-center items-center w-25 h-20 px-4 transition bg-gray-800 border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <box-icon type={"regular"} name={iconName} color={"white"}></box-icon>
                <div className="font-small text-white">
                    {labelText}
                </div>
            <input  type="file" name="file_upload" className="hidden" onChange={handleFileChange}/>
        </label>
    )
}