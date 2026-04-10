import { StyleSheet, Text, TextInput, View } from "react-native";

export const MedicationForm = ({
  medicationName,
  setMedicationName,
  dosage,
  setDosage,
  instructions,
  setInstructions,
}) => (
  <View style={styles.textContainer}>
    <Text style={styles.textTitle}>Name of Medication</Text>
    <TextInput
      placeholder="Name..."
      style={styles.textInput}
      value={medicationName}
      onChangeText={setMedicationName}
    />
    <Text style={styles.textTitle}>Dosage</Text>
    <TextInput
      placeholder="e.g. 3.45mg..."
      style={styles.textInput}
      value={dosage}
      onChangeText={setDosage}
    />
    <Text style={styles.textTitle}>Instructions</Text>
    <TextInput
      placeholder="give twice a day morning and night..."
      style={styles.paragraph}
      value={instructions}
      onChangeText={setInstructions}
      multiline
      numberOfLines={4}
    />
  </View>
);

// ...existing code...
const styles = StyleSheet.create({
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 18,
    marginTop: 10,
    color: "#052b53",
  },
  textInput: {
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  paragraph: {
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
    height: "20%",
  },
  textContainer: {
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 50,
  },
});
// ...existing code...
