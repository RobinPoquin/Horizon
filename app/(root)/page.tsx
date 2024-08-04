import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
  // Déclaration d'un objet loggedIn avec une propriété firstName
  const loggedIn = { firstName: 'Robin'};

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
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
