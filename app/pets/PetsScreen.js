import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import PetsScreenView from "./PetsScreen.view";
import { getPets } from "./petsApi";

export default function PetsScreen() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getPets();
      console.warn(response);
      setPets(response);
    })();
  }, []);

  const onRefresh = async () => {
    setIsLoading(true);
    const response = await getPets();
    console.warn(response);
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
      onRefresh={onRefresh}
      isLoading={isLoading}
    />
  );
}
