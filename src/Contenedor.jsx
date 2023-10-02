import React from 'react';

export const Contenedor = ({ cantidad }) => {
  return (
    <div className='container'>
      {Array.from({ length: cantidad }).map((_, index) => (
        <h1 key={index}>Hola</h1>
      ))}
    </div>
  );
};