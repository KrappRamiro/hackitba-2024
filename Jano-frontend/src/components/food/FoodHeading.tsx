export default function FoodHeading() {
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="flex flex-row gap-x-1">
            <div className="font-bold text-xl mb-2">Nutrición</div>
            <button className="">
              <box-icon type='solid' name='info-circle' color="white"></box-icon>
            </button>
          </div>
          <p className="text-gray-700 text-base">
            Dashboard peponsisimo
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Stat 1</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Stat 2</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Stat 3</span>
        </div>
      </div>
    )
}