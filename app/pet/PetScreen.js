import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import PetScreenView from "./PetScreen.view";
import { addPet, deletePet, editPet, getPetDetails } from "./petApi";

export default function PetScreen() {
  const router = useRouter();
  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [dob, setDOB] = useState("10/02/1990");
  const params = useLocalSearchParams();
  const [id] = useState(params?.id ?? null);

  useEffect(() => {
    if (!!params?.id) {
      (async () => {
        const response = await getPetDetails(id);
        console.warn(response);
        setPetName(response.name);
        setAnimalType(response.type);
        setDOB(response.dob);
        setBreed(response.breed);
      })();
    }
  }, []);

  const savePress = async () => {
    //save logic to add to db
    let response;
    if (!!id) {
      response = await editPet(id, petName, animalType, dob, breed);
    } else {
      response = await addPet(petName, animalType, dob, breed);
    }
    router.dismissTo({ pathname: `/pets/PetsScreen` });
  };

  const deletePress = async () => {
    const response = await deletePet(id);
    router.dismissTo({ pathname: `/pets/PetsScreen` });
  };

  const addMedicalRecordPress = () => {
    router.push({
      pathname: `/medicalHistory/MedicalHistoryScreen`,
      params: { id },
    });
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
      deletePress={deletePress}
      addMedicalRecordPress={addMedicalRecordPress}
    />
  );
}
