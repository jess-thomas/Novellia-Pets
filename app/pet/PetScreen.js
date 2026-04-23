import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPets } from "../pets/petsApi";
import PetScreenView from "./PetScreen.view";
import { setSelectedPet } from "./petActions";
import { addPet, deletePet, editPet, getPetDetailsThunk } from "./petApi";

export default function PetScreen() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoading } = useSelector((state) => state.pet);
  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [animalType, setAnimalType] = useState("dog");
  const [dob, setDOB] = useState(new Date());
  const params = useLocalSearchParams();
  const [id] = useState(params?.id ?? null);
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [showDOBPicker, setDOBPicker] = useState(false);
  const [isEdit] = useState(!!id);

  useEffect(() => {
    if (isEdit) {
      dispatch(getPetDetailsThunk(id)).then((action) => {
        if (action.payload) {
          dispatch(setSelectedPet(action.payload));
          setPetName(action.payload.name);
          setAnimalType(action.payload.type);
          setDOB(new Date(action.payload.dob));
          setBreed(action.payload.breed);
          setMedicalHistory([
            { title: "Vaccines", data: action.payload.vaccines },
            { title: "Medications", data: action.payload.medications },
            { title: "Allergies", data: action.payload.allergies },
          ]);
        }
      });
    }
  }, [id, isEdit, dispatch]);

  const onRefresh = async () => {
    const action = await dispatch(getPetDetailsThunk(id));
    if (action.payload) {
      setMedicalHistory([
        { title: "Vaccines", data: action.payload.vaccines },
        { title: "Medications", data: action.payload.medications },
        { title: "Allergies", data: action.payload.allergies },
      ]);
    }
  };

  const savePress = async () => {
    let response;
    if (isEdit) {
      response = await editPet(id, petName, animalType, dob, breed);
    } else {
      response = await addPet(petName, animalType, dob, breed);
    }
    getPets();
    router.dismissTo({ pathname: `/pets/PetsScreen` });
  };

  const deletePress = async () => {
    const response = await deletePet(id);
    getPets();
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
      isEdit={isEdit}
    />
  );
}
