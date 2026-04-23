export async function getPets() {
  const response = await fetch("http://10.0.0.12:3000/pets", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`pets API request failed (${response.status}): ${text}`);
  }

  return response.json();
}
