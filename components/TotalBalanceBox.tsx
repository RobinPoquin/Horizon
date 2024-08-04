import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import DonutsChart from './DonutsChart';

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'> 
        <div className="total-balance-chart">
            {/* Graphique Donuts */}
            <DonutsChart accounts={accounts}/> {/* Affichage du graphique avec les données des comptes */}
        </div>

        <div className="flex flex-col gap-6">
            <h2 className="header-2">
                Compte Bancaire : {totalBanks} {/* Affichage du nombre total de banques */}
            </h2>
            <div className="flex flex-col gap-2">
                <p className="total-balance-label">
                    Argent Total Actuel {/* Étiquette pour la somme totale actuelle */}
                </p>
                <div className="total-balance-amount flex-center gap-2">
                    <AnimatedCounter
                        amount={totalCurrentBalance} /* Affichage du compteur animé avec la somme totale actuelle */
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

// Exportation du composant TotalBalanceBox pour pouvoir l'utiliser dans d'autres fichiers
export default TotalBalanceBox
