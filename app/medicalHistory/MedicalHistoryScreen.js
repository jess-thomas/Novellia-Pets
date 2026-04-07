import { useState } from "react";
import MedicalHistoryScreenView from "./MedicalHistoryScreen.view";

export default function MedicalHistoryScreen() {
  const [medicalFormType, setMedicalFormType] = useState("vaccine");
  const [vaccineName, setVaccineName] = useState("");
  const [vaccineDate, setVaccineDate] = useState("");
  const [allergyName, setAllergyName] = useState("");
  const [allergySeverity, setAllergySeverity] = useState("");

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
    />
  );
}
