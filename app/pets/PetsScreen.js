import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import PetsScreenView from "./PetsScreen.view";
import { getPets } from "./petsApi";

export default function PetsScreen() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await getPets();
      console.warn(response);
      setPets(response);
    })();
  }, []);

  const router = useRouter();

  const onDetailPress = (id) => {
    // router.push(`/pets/${pet.id}`);
    router.push({ pathname: `/pet/PetScreen`, params: { id: 1 } });
  };

  const addNewPetPress = () => {
    router.push({ pathname: `/pet/PetScreen` });
  };
  return (
    <PetsScreenView
      pets={pets}
      onDetailPress={onDetailPress}
      addNewPetPress={addNewPetPress}
    />
  );
}
