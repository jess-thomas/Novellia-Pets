import { Picker } from "@react-native-picker/picker";
import {
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function MedicalHistoryScreenView({
  medicalFormType,
  setMedicalFormType,
  vaccineName,
  setVaccineName,
  allergyName,
  setAllergyName,
  allergySeverity,
  setAllergySeverity,
}) {
  const _renderMedicalFormPicker = () => (
    <View style={styles.textInput}>
      <Picker
        selectedValue={medicalFormType}
        onValueChange={(itemValue) => setMedicalFormType(itemValue)}
      >
        <Picker.Item label="Vaccine" value="vaccine" />
        <Picker.Item label="Allergy" value="allergy" />
        <Picker.Item label="Medication" value="medication" />
      </Picker>
    </View>
  );

  const _renderVaccineForm = () => (
    <View style={styles.textContainer}>
      <Text style={styles.textTitle}>Name of Vaccine</Text>
      <TextInput
        placeholder="Name"
        style={styles.textInput}
        value={vaccineName}
        onChangeText={setVaccineName}
      />
      <Text style={styles.textTitle}>Date Administered</Text>
      <Text style={styles.textTitle}>TO DO: add date picker</Text>
    </View>
  );

  const _renderAllergyForm = () => (
    <View style={styles.textInput}>
      <Text style={styles.textTitle}>Allergy Name</Text>
      <TextInput
        placeholder="Name..."
        style={styles.textInput}
        value={allergyName}
        onChangeText={setAllergyName}
      />
      <View style={styles.textInput}>
        <Text style={styles.textTitle}>Reactions</Text>
        <Text style={styles.textTitle}>to do add check boxes</Text>
      </View>
      <View style={styles.textInput}>
        <Text style={styles.pickerTitleText}>Severity</Text>
        <Picker
          selectedValue={allergySeverity}
          onValueChange={(itemValue) => setAllergySeverity(itemValue)}
        >
          <Picker.Item label="Mild" value="mild" />
          <Picker.Item label="Severe" value="severe" />
        </Picker>
      </View>
    </View>
  );

  const _renderMedicationForm = () => (
    <View style={styles.textInput}>
      <Text>Medication info</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Medical History</Text>
        {_renderMedicalFormPicker()}
        {medicalFormType === "vaccine" && _renderVaccineForm()}
        {medicalFormType === "allergy" && _renderAllergyForm()}
        {medicalFormType === "medication" && _renderMedicationForm()}
        <View style={styles.buttonContainer}>
          <Button
            title="Save"
            color={"#052b53"}
            style={styles.button}
            onPress={() => {}}
          />
          <Button
            title="Delete"
            color={"#531805"}
            style={styles.deleteButton}
            onPress={() => {}}
          />
        </View>
      </View>
    </ScrollView>
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
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 18,
    marginTop: 10,
    color: "#052b53",
  },
  pickerTitleText: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 5,
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
  textContainer: {
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#052b53",
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    borderRadius: 15,
    flex: 1,
  },
  deleteButton: {
    borderRadius: 15,
    marginLeft: 10,
    flex: 1,
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 15,
    width: "50%",
    alignSelf: "center",
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
