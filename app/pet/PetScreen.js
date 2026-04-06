import { useState } from "react";
import PetScreenView from "./PetScreen.view";

export default function PetScreen() {
  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [animalType, setAnimalType] = useState("");

  const savePress = () => {
    //save logic to add to db
  };

  return (
    <PetScreenView
      petName={petName}
      setPetName={setPetName}
      breed={breed}
      setBreed={setBreed}
      animalType={animalType}
      setAnimalType={setAnimalType}
      savePress={savePress}
    />
  );
}
