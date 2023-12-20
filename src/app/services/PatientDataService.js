const response = await fetch(`/api/patients/${patientId}/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
    // Les données ont été ajoutées avec succès
  if (response.status === 200) {
    // Met à jour les données de l'interface utilisateur
    setBloodPressureData(data.bloodPressure);
    setLabResultsData(data.labResults);
  } else {
    // Une erreur s'est produite
  
    // Affiche une erreur à l'utilisateur
    alert(`Une erreur s'est produite lors de l'ajout des données. Code d'erreur : ${response.status}`);
  }
  
  