import React, { useContext, useState } from 'react';
import { Context } from './imateData';
import './imate.css'
import ImateCard from './imateCard';
const Imates = () => {

  const dadosJson = useContext(Context);

  const [atualPage, setPaginaAtual] = useState(1);
  const [itensPerPage, setPorPagina] = useState(4);

  const [searchValue, setSearchValue] = useState('');

  // Função para obter os imates da página atual
  const getImatesPaginados = () => {
    const indiceUltimoImovel = atualPage * itensPerPage;
    const indicePrimeiroImovel = indiceUltimoImovel - itensPerPage;
    return dadosJson.slice(indicePrimeiroImovel, indiceUltimoImovel);

  };

  const filteredImate = !!searchValue ? dadosJson.filter(imates => {
    return imates.name.first.toLowerCase().includes(
      searchValue.toLowerCase())
  })
    : getImatesPaginados();

  console.log(filteredImate)

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

      {filteredImate.length > 0 && (
        <ImateCard imates={filteredImate} />)}

      {filteredImate.length === 0 && (
        <h1>Não existe imate com esse nome</h1>)}

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
