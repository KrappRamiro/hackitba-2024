import FoodHeading from "../components/FoodHeading";
import DailyFoodCard from "../components/DailyFoodCard";

import "./Food.css"

export default function Nutricion() {
  return (
    <div className="flex flex-col h-screen justify-items-end justify-between w-full max-w-sm mx-auto rounded-t-xl border-t-2 border-gray-100/40 bg-white shadow-2xl overflow-hidden dark:border-gray-950 dark:bg-gray-950/60">
      <div className="food-scrolled-container"> 
        <FoodHeading />
        <DailyFoodCard foodInfo = {getDailyFoodCardDefinition()} />
      </div>
      
    </div>
  );
}

const getDailyFoodCardDefinition = () => {
  return {
    uploadConfigs: getUploadConfigurations(),
    headerText: "¿Cómo vienen las comidas hoy?"
  };
}

const getUploadConfigurations = () => {
  const foodUploadConfigurations = []
  foodUploadConfigurations.push(buildUploadConfiguration('Desayuno', 'baguette',['jpg','jpeg','png']));
  foodUploadConfigurations.push(buildUploadConfiguration('Almuerzo', 'bowl-hot', ['jpg','jpeg','png']));
  foodUploadConfigurations.push(buildUploadConfiguration('Merienda', 'bowl-rice', ['jpg','jpeg','png']));
  foodUploadConfigurations.push(buildUploadConfiguration('Cena', 'bowl-hot',['jpg','jpeg','png']));

  return foodUploadConfigurations;
}

const buildUploadConfiguration = (labelText: String, iconName: String,allowedExtensions: Array<String>) => {
  return {
    labelText: labelText,
    iconName: iconName,
    allowedExtensions: allowedExtensions
  }
}