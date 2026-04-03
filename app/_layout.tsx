import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "./store/configureStore";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="welcome/WelcomeScreen"
          options={{ title: "Novellia Pets" }}
        />
        <Stack.Screen name="index" options={{ title: "Novellia Pets" }} />
        <Stack.Screen
          name="pets/PetsScreen"
          options={{ title: "Novellia Pets" }}
        />
        <Stack.Screen
          name="pet/PetScreen"
          options={{ title: "Novellia Pets" }}
        />
      </Stack>
    </Provider>
  );
}
