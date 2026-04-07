import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import PetsScreenView from "./PetsScreen.view";
import { getPets } from "./petsApi";

export default function PetsScreen() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
