import { useState, useEffect } from "react";
import PetScreenView from "./PetScreen.view";
import { addPet } from "./petApi";
import { useLocalSearchParams } from 'expo-router';

export default function PetScreen() {
  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [dob, setDOB] = useState("10/02/1990");
  const params = useLocalSearchParams();

  useEffect(()=>{
    if(!!params?.id){
        console.warn("attempting to get details");
        console.warn(params?.id)
    }
  },[params]);

  const savePress = async () => {
    //save logic to add to db
    const response = await addPet(petName, animalType, dob, breed);
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
