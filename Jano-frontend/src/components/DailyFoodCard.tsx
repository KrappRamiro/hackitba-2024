import FileUpload from "./FileUpload"

export default function DailyFoodCard({ foodInfo }: any) {
    
    // Destructure foodInfo object
    const { uploadConfigs, headerText } = foodInfo;

    // Create an array of h1 elements based on foodQuantity
    const foodItems = uploadConfigs.map((uploadConfig, index) => 
        <FileUpload key={index+"foodImage"} fileUploadProperties={uploadConfig}></FileUpload>
    );

    return (
        <div className="flex flex-col justify-items-start bg-black">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-grey-900 px-1">
                <div className="px-6 py-4">
                    <div className="font-bold text-s mb-2">{headerText}</div>
                    <p className="text-gray-700 text-base">
                        
                    </p>
                    <div className="flex flex-row gap-1">
                    {foodItems}
                    </div>
                </div>
            </div>
        </div>
    )
}