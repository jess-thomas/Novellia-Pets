import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreenView({
  username,
  setUsername,
  logInPress,
  buttonTitle,
  isLoading,
}) {
  return (
    <View style={styles.container}>
      <Image source={require("./images/pets.jpeg")} style={styles.image} />
      <Text style={styles.title}>Welcome to Novellia Pets</Text>
      <TextInput
        placeholder="Enter Username to get started"
        style={styles.textInput}
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.button} onPress={() => logInPress()}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
      {isLoading && <ActivityIndicator size="large" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbfaf261",
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    alignSelf: "center",
    color: "#052b53",
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: "center",
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
  },
  textInput: {
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#052b53",
    padding: 10,
    borderRadius: 8,
    margin: 18,
    fontSize: 20,
    width: "80%",
  },
  button: {
    backgroundColor: "#052b53",
    padding: 10,
    borderRadius: 8,
    margin: 18,
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    alignSelf: "center",
  },
});
