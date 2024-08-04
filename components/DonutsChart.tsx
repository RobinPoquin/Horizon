'use client' // Directive Next.js pour indiquer que ce fichier est destiné à être exécuté côté client

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; 
import { Doughnut } from "react-chartjs-2";

// Enregistrement des éléments ArcElement, Tooltip et Legend auprès de ChartJS pour pouvoir les utiliser dans les graphiques
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutsChart = ({ accounts }: DoughnutChartProps) => {
    // Définition des données pour le graphique 
    const data = {
        datasets:[{
            label: 'Banques', // Légende pour le dataset
            data: [1250, 2500, 3750], // Données pour chaque segment du graphique
            backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] // Couleurs pour chaque segment du graphique
        }],
        labels: ['Banque 1', 'Banque 2', 'Banque 3'] // Étiquettes pour chaque segment du graphique
    }

    // Retourne le composant Doughnut avec les données et les options de configuration
    return <Doughnut  
                data={data} // Les données à afficher dans le graphique
                options={{ // Options de configuration pour le graphique
                    cutout: '60%', // Taille de l'anneau
                    plugins:{
                        legend:{
                            display: false // Masquer la légende du graphique
                        }
                    }
                }}
            />
}

export default DonutsChart
