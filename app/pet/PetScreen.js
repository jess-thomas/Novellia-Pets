import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PetScreenView from "./PetScreen.view";
import { setSelectedPet } from "./petActions";
import { addPet, deletePet, editPet, getPetDetails } from "./petApi";

export default function PetScreen() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [dob, setDOB] = useState(new Date());
  const params = useLocalSearchParams();
  const [id] = useState(params?.id ?? null);
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDOBPicker, setDOBPicker] = useState(false);

  useEffect(() => {
    if (!!params?.id) {
      (async () => {
        const response = await getPetDetails(id);
        dispatch(setSelectedPet(response));
        setPetName(response.name);
        setAnimalType(response.type);
        setDOB(new Date(response.dob));
        setBreed(response.breed);
        setMedicalHistory([
          { title: "Vaccines", data: response.vaccines },
          { title: "Medications", data: response.medications },
          { title: "Allergies", data: response.allergies },
        ]);
      })();
    }
  }, []);

  const onRefresh = async () => {
    setIsLoading(true);
    const response = await getPetDetails(id);
    dispatch(setSelectedPet(response));
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

  const medicalRecordDetailPress = (medID, type) => {
    router.push({
      pathname: `/medicalHistory/MedicalHistoryScreen`,
      params: { id, medID, type },
    });
  };

  const onChangeDate = (event, newDate) => {
    if (newDate) {
      setDOB(newDate);
    }
    setDOBPicker(false);
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
      showDOBPicker={showDOBPicker}
      dob={dob}
      onChangeDate={onChangeDate}
      setShowDOBPicker={setDOBPicker}
    />
  );
}
