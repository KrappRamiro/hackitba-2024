export default function FoodUploadPreview({ foodUploadInfo }) {
    const { thumbnail } = foodUploadInfo;
    return(
        <div className="flex flex-col justify-content-center">
            <img className="blur-sm" src={thumbnail} alt="Food thumbnail" />
            <span className="inline-block bg-lime-200 rounded-full px-1 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">Abundante</span>
        </div>
    )
}