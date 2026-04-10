import { Picker } from "@react-native-picker/picker";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { AllergyForm } from "./components/AllergyForm";
import { MedicationForm } from "./components/MedicationForm";
import { VaccineForm } from "./components/VaccineForm";

export default function MedicalHistoryScreenView({
  medicalFormType,
  setMedicalFormType,
  vaccineName,
  setVaccineName,
  allergyName,
  setAllergyName,
  allergySeverity,
  setAllergySeverity,
  medicationName,
  setMedicationName,
  setDosage,
  dosage,
  instructions,
  setInstructions,
  onDeletePress,
  onSavePress,
  vaccineDate,
  setVaccineDate,
  showVaccineDate,
  setShowVaccineDate,
  hasRash,
  setRash,
  hasSwelling,
  setSwelling,
  hasHives,
  setHives,
  hasVomiting,
  setVomiting,
  isEdit,
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Medical History</Text>
        {_renderMedicalFormPicker()}
        {medicalFormType === "vaccine" && (
          <VaccineForm
            vaccineName={vaccineName}
            setVaccineName={setVaccineName}
            vaccineDate={vaccineDate}
            setVaccineDate={setVaccineDate}
            showVaccineDate={showVaccineDate}
            setShowVaccineDate={setShowVaccineDate}
          />
        )}
        {medicalFormType === "allergy" && (
          <AllergyForm
            allergyName={allergyName}
            setAllergyName={setAllergyName}
            hasRash={hasRash}
            setRash={setRash}
            hasSwelling={hasSwelling}
            setSwelling={setSwelling}
            hasHives={hasHives}
            setHives={setHives}
            hasVomiting={hasVomiting}
            setVomiting={setVomiting}
            allergySeverity={allergySeverity}
            setAllergySeverity={setAllergySeverity}
          />
        )}
        {medicalFormType === "medication" && (
          <MedicationForm
            medicationName={medicationName}
            setMedicationName={setMedicationName}
            dosage={dosage}
            setDosage={setDosage}
            instructions={instructions}
            setInstructions={setInstructions}
          />
        )}
        <View style={styles.buttonContainer}>
          <Button
            title="Save"
            color={"#052b53"}
            style={styles.button}
            onPress={() => onSavePress()}
          />
          {isEdit && (
            <Button
              title="Delete"
              color={"#531805"}
              style={styles.deleteButton}
              onPress={() => onDeletePress()}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

// ...existing code...
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbfaf261",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    alignSelf: "center",
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
