import React, { useState, useEffect } from 'react';
import { createPatientData } from 'services/PatientDataService';

const PatientData = () => {
  const [bloodPressureData, setBloodPressureData] = useState([]);
  const [labResultsData, setLabResultsData] = useState([]);
 
  //const [patientId, setPatientId] = useState(null);
  

  const handleClickAddData = async (event) => {
    event.preventDefault();

    const bloodPressureSystolic = event.target.elements.bloodPressureSystolic.value;
    const bloodPressureDiastolic = event.target.elements.bloodPressureDiastolic.value;
    const labResultTest = event.target.elements.labResultTest.value;
    const labResultValue = event.target.elements.labResultValue.value;

    const data = {
      bloodPressureSystolic,
      bloodPressureDiastolic,
      labResultTest,
      labResultValue,
    };

    const response = await createPatientData(patientId, data);

    if (response.status === 200) {
      // Données ajoutées avec succès

      // Mettre à jour l'interface utilisateur (récupérer les nouvelles données ou afficher un message)

      // Par exemple, on peut recharger les données de l'API :
      const response = await fetch(`/api/patients/${patientId}`);
      const data = response.json();

      setBloodPressureData(data.bloodPressure);
      setLabResultsData(data.labResults);
    } else {
      // Erreur lors de l'ajout

      // Afficher un message d'erreur à l'utilisateur
      alert(`Une erreur s'est produite lors de l'ajout des données. Code d'erreur : <span class="math-inline">\{response\.status\}\`\);
\}
\};
useEffect\(\(\) \=\> \{
// Récupère les données de santé du patient
if \(patientId\) \{
const response \= fetch\(\`/api/patients/</span>{patientId}`);
      const data = response.json();

      // Met à jour les données de l'interface utilisateur
      setBloodPressureData(data.bloodPressure);
      setLabResultsData(data.labResults);
    }
  };

  return (
    <div className="container">
      <h1>Données de santé des patients</h1>

      <div className="row">
        <div className="col-md-6">
          <h2>Graphique de la pression artérielle</h2>
          <Canvas id="blood-pressure-chart" />
        </div>
        <div className="col-md-6">
          <h2>Tableau des résultats de laboratoire</h2>
          <Table>
            <thead>
              <tr>
                <th>Test</th>
                <th>Valeur</th>
                <th>Résultat</th>
              </tr>
            </thead>
            <tbody>
            {labResultsData.map((result) => (
  <tr key={result.id}>
    <td>{result.test}</td>
    <td>{result.value}</td>
    <td>{result.result}</td>
  </tr>
))}
            </tbody>
          </Table>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h2>Filtres</h2>
          <Form>
            <label for="patient-id">ID du patient</label>
            <Input type="number" id="patient-id" value={patientId} onChange={(event) => setPatientId(event.target.value)} />

            <label for="date-range">Plage de dates</label>
            <Input type="date" id="start-date" />
            <Input type="date" id="end-date" />

            <Button type="submit">Appliquer les filtres</Button>
          </Form>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h2>Ajouter de nouvelles données de santé</h2>

          <Form onSubmit={handleClickAddData}>
            <h2>Pression artérielle</h2>
            <label for="blood-pressure-systolic">Pression artérielle systolique</label>
            <Input type="number" id="blood-pressure-systolic" />

            <label for="blood-pressure-diastolic">Pression artérielle diastolique</label>
            <Input type="number" id="blood-pressure-diastolic" />

            <h2>Test de laboratoire</h2>
            <label for="lab-result-test">Test</label>
            <Input type="text" id="lab-result-test" />

            <label for="lab-result-value">Valeur</label>
            <Input type="number" id="lab-result-value" />

            <Button type="submit">Ajouter</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PatientData;
