import { useRouter } from "expo-router";
import { useState } from "react";
import PetsScreenView from "./PetsScreen.view";

export default function PetsScreen() {
  const [pets] = useState([
    { id: 0, name: "Kitty", type: "Cat" },
    { id: 1, name: "Doggo", type: "Dog" },
    { id: 2, name: "Birdy", type: "Bird" },
  ]);
  const router = useRouter();

  const onDetailPress = (id) => {
    // router.push(`/pets/${pet.id}`);
    router.push(`/pet/PetScreen`);
  };

  return <PetsScreenView pets={pets} navigateToDetailScreen={onDetailPress} />;
}
