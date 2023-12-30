import React, { useContext, useState, useEffect } from 'react';
import './imate.css'
import ImateCard from './imateCard';
import Context from '../../context/appContext';
import fetchImates from '../../api/fetchImates';
function Imates() {

  const {dadosJson, setData} = useContext(Context)
  console.log(dadosJson)

  const [atualPage, setPaginaAtual] = useState(1);
  const [itensPerPage] = useState(4);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchImates().then((response) => {
      setData(response)
    })

    }, []);
     
  // Função para obter os imates da página atual
   const getImatesPaginados = () => {
    const indiceUltimoImate = atualPage * itensPerPage;
    const indicePrimeiroImate = indiceUltimoImate - itensPerPage;
    return dadosJson.slice(indicePrimeiroImate, indiceUltimoImate);
  };

  const filteredImate = !!searchValue ? dadosJson.filter(imates => {
    return imates.name.first.toLowerCase().includes(
      searchValue.toLowerCase())
  })
    : getImatesPaginados();
    console.log(getImatesPaginados())

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
      <div>
        <input className='text-input'
          type='search'
          placeholder="Filtrar por nome"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)} />
      </div>

 
    
      {filteredImate.length === 0 && (
        <h1>Não existe imate com esse nome</h1>)}


      {filteredImate.length > 0 && (
        <ImateCard imates={filteredImate} /> 
        ) 
       }
        
      {!searchValue && (
        <>

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
        
      )}
    </>

  );
      }

export default Imates
