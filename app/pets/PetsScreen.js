import { useRouter } from "expo-router";
import { useState } from "react";
import PetsScreenView from "./PetsScreen.view";

export default function PetsScreen() {
  const [pets] = useState([
    {
      id: 0,
      name: "Kitty",
      type: "Cat",
      history: [
        { name: "Vaccination", type: "Vaccine", id: 0 },
        { name: "Rabies", type: "Vaccine", id: 1 },
      ],
    },
    { id: 1, name: "Doggo", type: "Dog" },
    { id: 2, name: "Birdy", type: "Bird" },
  ]);
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
