import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import MedicalHistoryScreenView from "./MedicalHistoryScreen.view";
import { addVaccine } from "./medicalHistoryApi";

export default function MedicalHistoryScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [medicalFormType, setMedicalFormType] = useState("vaccine");
  const [vaccineName, setVaccineName] = useState("");
  const [vaccineDate, setVaccineDate] = useState("");
  const [allergyName, setAllergyName] = useState("");
  const [allergySeverity, setAllergySeverity] = useState("");
  const [medicationName, setMedicationName] = useState("");
  const [dosage, setDosage] = useState("");
  const [instructions, setInstructions] = useState("");
  const [id] = useState(params?.id ?? null);

  const onSavePress = () => {
    addVaccine(vaccineName, vaccineDate, id);
    router.dismissTo({ pathname: `/pet/PetScreen`, params: { id } });
  };
  const onDeletePress = () => {
    router.dismissTo({ pathname: `/pet/PetScreen`, params: { id } });
  };

  return (
    <MedicalHistoryScreenView
      medicalFormType={medicalFormType}
      setMedicalFormType={setMedicalFormType}
      vaccineName={vaccineName}
      setVaccineName={setVaccineName}
      allergyName={allergyName}
      setAllergyName={setAllergyName}
      setAllergySeverity={setAllergySeverity}
      allergySeverity={allergySeverity}
      medicationName={medicationName}
      setMedicationName={setMedicationName}
      dosage={dosage}
      setDosage={setDosage}
      instructions={instructions}
      setInstructions={setInstructions}
      onSavePress={onSavePress}
      onDeletePress={onDeletePress}
      vaccineDate={vaccineDate}
      setVaccineDate={setVaccineDate}
    />
  );
}
