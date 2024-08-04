'use client'; // Directive Next.js pour indiquer que ce fichier est destiné à être exécuté côté client

import { formatAmount } from '@/lib/utils';
import React from 'react';
// Importation du composant CountUp pour les animations de compteur
import CountUp from 'react-countup';

const AnimatedCounter = ({amount}: {amount: number}) => {
    return (
      <div className='w-full'> 
        <CountUp 
            end={amount} // Valeur finale du compteur
            duration={2.75} // Durée de l'animation en secondes
            decimals={2} // Nombre de décimales à afficher
            separator=" " // Séparateur des milliers
            decimal="," // Séparateur décimal
            suffix='EUR' // Suffixe ajouté après la valeur
            formattingFn={(value) => formatAmount(value)} // Fonction de formatage pour personnaliser l'affichage de la valeur
        />
      </div>
    )
}

// Exportation du composant AnimatedCounter pour pouvoir l'utiliser dans d'autres fichiers
export default AnimatedCounter
