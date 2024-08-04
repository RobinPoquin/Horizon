import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DonutsChart from './DonutsChart'

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className="total-balance-chart">
            {/* Graphique Donuts */}
            <DonutsChart accounts={accounts}/>
        </div>

        <div className="flex flex-col gap-6">
            <h2 className="header-2">
            Compte Bancaire : {totalBanks} 
            </h2>
            <div className="flex flex-col gap-2">
                <p className="total-balance-label">
                    Argent Total Actuel
                </p>
                <div className="total-balance-amount flex-center gap-2">
                    <AnimatedCounter
                        amount={totalCurrentBalance}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox