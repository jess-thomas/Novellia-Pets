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
  const [vaccines, setVaccines] = useState([]);
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!!params?.id) {
      (async () => {
        const response = await getPetDetails(id);
        console.warn(response);
        setPetName(response.name);
        setAnimalType(response.type);
        setDOB(response.dob);
        setBreed(response.breed);
        setVaccines(response.vaccines);
        setMedicalHistory([
          { title: "Vaccines", data: response.vaccines },
          { title: "Medications", data: response.medications },
          { title: "Allergies", data: response.allergies },
        ]);
      })();
    }
    console.log(medicalHistory);
  }, []);

  const onRefresh = async () => {
    setIsLoading(true);
    const response = await getPetDetails(id);
    setVaccines(response.vaccines);
    setMedicalHistory([
      { title: "Vaccines", data: response.vaccines },
      { title: "Medications", data: response.medications },
      { title: "Allergies", data: response.allergies },
    ]);
    setIsLoading(false);
  };

  const savePress = async () => {
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

  const medicalRecordDetailPress = (medID) => {
    router.push({
      pathname: `/medicalHistory/MedicalHistoryScreen`,
      params: { id, medID },
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
      medicalHistory={medicalHistory}
      isLoading={isLoading}
      onRefresh={onRefresh}
      medicalRecordDetailPress={medicalRecordDetailPress}
      id={id}
    />
  );
}
