import React, { useContext, useState } from 'react';
import { Context } from './imateData';
import './imate.css'
const Imates = () => {

  const dadosJson = useContext(Context);

  const [atualPage, setPaginaAtual] = useState(1);
	const [itensPerPage, setPorPagina] = useState(4);


	// Função para obter os imates da página atual
	const  getImatesPaginados = () => {
		const indiceUltimoImovel = atualPage * itensPerPage;
		const indicePrimeiroImovel = indiceUltimoImovel - itensPerPage;
		return dadosJson.slice(indicePrimeiroImovel, indiceUltimoImovel);
   
	};


	// Função para ir para a próxima página
	const nextPage = () => {
		setPaginaAtual(atualPage + 1);
	};

	// Função para voltar para a página anterior
	const paginaAnterior = () => {
		setPaginaAtual(atualPage - 1);
	};

  return (
    <>
    <div className='card-container'>
      {getImatesPaginados().map((imate, index) => (
      <div className='imate-card' key={imate.id.value}>
   
          <div className='card-img'>
            <img src={imate.picture.large}></img><br />
          
          </div>
          <p className='card-title'>{imate.name.first} {imate.name.last}</p>
          <div className='card-information'>
            <span>{imate.cell}</span>
            <p>{imate.email}</p>
            <p>{imate.gender}</p>
          </div>
        </div>
      ))}
      
    </div>
       <div className='card-button'>
       <button className='button-38' onClick={paginaAnterior} disabled={atualPage === 1}>
         Next Page
         </button>
           
         <button className='button-38' 
             onClick={nextPage}
             disabled={atualPage === Math.ceil(dadosJson.length / itensPerPage)}
           >   Previous 
          </button>
     </div>
     </>
  );

}

export default Imates
