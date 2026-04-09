import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedPetID } from "../pet/petActions";
import PetsScreenView from "./PetsScreen.view";
import { getPets } from "./petsApi";

export default function PetsScreen() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getPetsData();
  }, []);

  const getPetsData = async () => {
    setIsLoading(true);
    const response = await getPets();
    setPets(response);
    setIsLoading(false);
  };

  const router = useRouter();

  const onDetailPress = (id) => {
    dispatch(setSelectedPetID(id));
    router.push({ pathname: `/pet/PetScreen`, params: { id } });
  };

  const addNewPetPress = () => {
    router.push({ pathname: `/pet/PetScreen` });
  };
  return (
    <PetsScreenView
      pets={pets}
      onDetailPress={onDetailPress}
      addNewPetPress={addNewPetPress}
      onRefresh={getPetsData}
      isLoading={isLoading}
    />
  );
}
