import React from 'react';

const HeaderBox = ({ type ='title', title, subtext, user}: HeaderBoxProps) => {
  return (
    <div className='header-box'>
        <h1 className="header-box-title">
            {title}
            {/* Vérifie si le type est 'greeting' et affiche le nom de l'utilisateur si c'est vrai */}
            {type === 'greeting' && (
                <span className="text-bankGradient">
                    {/* Espace suivi du nom de l'utilisateur */}
                    &nbsp;{user}
                </span>
            )}
        </h1>
        <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};

export default HeaderBox;
