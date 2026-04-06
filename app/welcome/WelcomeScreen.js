import { useRouter } from "expo-router";
import { useState } from "react";
import WelcomeScreenView from "./WelcomeScreen.view";
import { login } from "./welcomeApi";

export default function WelcomeScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [buttonTitle, setButtonTitle] = useState("Log In");
  const [isLoading, setIsLoading] = useState(false);

  const logInPress = async () => {
    try {
      setIsLoading(true);
      const response = await login(username);
      setButtonTitle(response?.message ?? "Try to Login again");
      if (response?.message === "Login successful") {
        router.push("/pets/PetsScreen");
      }
      setIsLoading(false);
    } catch (err) {
      console.error("login error", err);
      setIsLoading(false);
    }
  };

  return (
    <WelcomeScreenView
      username={username}
      setUsername={setUsername}
      logInPress={logInPress}
      buttonTitle={buttonTitle}
      isLoading={isLoading}
    />
  );
}
