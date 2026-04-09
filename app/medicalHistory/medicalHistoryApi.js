export async function addVaccine(name, date, id) {
  const response = await fetch(`http://10.0.0.12:3000/pets/${id}/vaccines`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      dateAdministered: date,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `add vaccine API request failed (${response.status}): ${text}`,
    );
  }

  return response.json();
}

export async function addMedication(name, dosage, instructions, id) {
  const response = await fetch(`http://10.0.0.12:3000/pets/${id}/medications`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      dosage: dosage,
      instructions: instructions,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `add medication API request failed (${response.status}): ${text}`,
    );
  }

  return response.json();
}

export async function addAllergy(name, reactions, severity, id) {
  const response = await fetch(`http://10.0.0.12:3000/pets/${id}/allergies`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      reactions: reactions,
      severity: severity,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `add allergy API request failed (${response.status}): ${text}`,
    );
  }

  return response.json();
}

export async function deleteMedication(id, medicationId) {
  const response = await fetch(
    `http://10.0.0.12:3000/pets/${id}/medications/${medicationId}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `delete medication API request failed (${response.status}): ${text}`,
    );
  }

  return response.json();
}

export async function deleteVaccine(id, vaccineId) {
  const response = await fetch(
    `http://10.0.0.12:3000/pets/${id}/vaccines/${vaccineId}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `delete vaccine API request failed (${response.status}): ${text}`,
    );
  }

  return response.json();
}

export async function deleteAllergy(id, allergyId) {
  const response = await fetch(
    `http://10.0.0.12:3000/pets/${id}/allergies/${allergyId}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `delete allergy API request failed (${response.status}): ${text}`,
    );
  }

  return response.json();
}

export async function editAllergy(name, reactions, severity, id, allergyId) {
  const response = await fetch(
    `http://10.0.0.12:3000/pets/${id}/allergies/${allergyId}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        reactions,
        severity,
      }),
    },
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `edit allergy API request failed (${response.status}): ${text}`,
    );
  }

  return response.json();
}
export async function editMedication(
  name,
  dosage,
  instructions,
  id,
  medicationID,
) {
  const response = await fetch(
    `http://10.0.0.12:3000/pets/${id}/medications/${medicationID}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        dosage,
        instructions,
      }),
    },
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `edit medication API request failed (${response.status}): ${text}`,
    );
  }

  return response.json();
}
export async function editVaccine(name, date, id, vaccineID) {
  const response = await fetch(
    `http://10.0.0.12:3000/pets/${id}/vaccines/${vaccineID}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        dateAdministered: date,
      }),
    },
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `edit vaccines API request failed (${response.status}): ${text}`,
    );
  }

  return response.json();
}
