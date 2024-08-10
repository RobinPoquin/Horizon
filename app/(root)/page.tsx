import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
  // Déclaration d'un objet loggedIn avec une propriété firstName
  const loggedIn = { firstName: 'Robin', lastName: 'Poquin', email: 'robpoquin@gmail.com'};

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting" // Définit le type à 'greeting'
            title="Bienvenue" // Titre du HeaderBox
            user= {loggedIn?.firstName || 'Guest'} // Nom de l'utilisateur ou 'Guest' si non défini
            subtext="Consultez et gérez vos comptes et transactions éfficacement" // Sous-texte du HeaderBox
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50}, {currentBalance: 500.50}]}
      />
    </section>
  );
};

export default Home;
