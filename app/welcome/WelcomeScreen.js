import { useRouter } from "expo-router";
import { useState } from "react";
import WelcomeScreenView from "./WelcomeScreen.view";

export default function WelcomeScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const logInButtonPressed = () => {
    //log in user or create new user
    router.push("/pets/PetsScreen");
  };

  return (
    <WelcomeScreenView
      username={username}
      setUsername={setUsername}
      logInButtonPressed={logInButtonPressed}
    />
  );
}
