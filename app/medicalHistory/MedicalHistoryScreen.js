import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import MedicalHistoryScreenView from "./MedicalHistoryScreen.view";
import {
  addMedication,
  addVaccine,
  deleteMedication,
  deleteVaccine,
} from "./medicalHistoryApi";
import { MEDICAL_FORM_TYPES } from "./medicalHistoryUtils";

export default function MedicalHistoryScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [medicalFormType, setMedicalFormType] = useState(
    MEDICAL_FORM_TYPES.VACCINE,
  );
  const [vaccineName, setVaccineName] = useState("");
  const [vaccineDate, setVaccineDate] = useState(new Date());
  const [showVaccineDate, setShowVaccineDate] = useState(false);
  const [allergyName, setAllergyName] = useState("");
  const [allergySeverity, setAllergySeverity] = useState("");
  const [medicationName, setMedicationName] = useState("");
  const [dosage, setDosage] = useState("");
  const [instructions, setInstructions] = useState("");
  const [id] = useState(params?.id ?? null);
  const [medID] = useState(params?.medID ?? null);

  const onSavePress = () => {
    switch (medicalFormType) {
      case MEDICAL_FORM_TYPES.VACCINE:
        addVaccine(vaccineName, vaccineDate, id);
        break;
      case MEDICAL_FORM_TYPES.ALLERGY:
        break;
      case MEDICAL_FORM_TYPES.MEDICATION:
        addMedication(medicationName, dosage, instructions, id);
        break;
      default:
        break;
    }
    router.dismissTo({ pathname: `/pet/PetScreen`, params: { id } });
  };
  const onDeletePress = () => {
    switch (medicalFormType) {
      case MEDICAL_FORM_TYPES.VACCINE:
        deleteVaccine(id, medID);
        break;
      case MEDICAL_FORM_TYPES.ALLERGY:
        break;
      case MEDICAL_FORM_TYPES.MEDICATION:
        deleteMedication(id, medID);
        break;
      default:
        break;
    }
    router.dismissTo({ pathname: `/pet/PetScreen`, params: { id } });
  };

  const onChangeDate = (event, newDate) => {
    if (newDate) {
      setVaccineDate(newDate);
    }
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
      setVaccineDate={onChangeDate}
      showVaccineDate={showVaccineDate}
      setShowVaccineDate={setShowVaccineDate}
    />
  );
}
