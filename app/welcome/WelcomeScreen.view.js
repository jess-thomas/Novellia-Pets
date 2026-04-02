import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function WelcomeScreenView({
  username,
  setUsername,
  logInButtonPressed,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Novellia Pets</Text>
      <TextInput
        placeholder="Enter Username to get started"
        style={styles.textInput}
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => logInButtonPressed()}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbfaf261",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    alignSelf: "center",
  },
  textInput: {
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#052b53",
    padding: 10,
    borderRadius: 8,
    margin: 18,
  },
  button: {
    backgroundColor: "#052b53",
    padding: 10,
    borderRadius: 8,
    margin: 18,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    alignSelf: "center",
  },
});
