export async function addPet(name, type, dob, breed) {
  const response = await fetch("http://10.0.0.12:3000/pets", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      type: type,
      dob: dob,
      breed: breed,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `add pets API request failed (${response.status}): ${text}`,
    );
  }

  return response.json();
}

export async function deletePet(id) {
  const response = await fetch(`http://10.0.0.12:3000/pets/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `delete pets API request failed (${response.status}): ${text}`,
    );
  }

  return response.json();
}

export async function editPet(id, name, type, dob, breed) {
  const response = await fetch(`http://10.0.0.12:3000/pets/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      type: type,
      dob: dob,
      breed: breed,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `edit pets API request failed (${response.status}): ${text}`,
    );
  }

  return response.json();
}
