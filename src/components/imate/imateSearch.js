import React, { useState } from 'react';
import { getImateBySocialSecurity } from '../Utils/findBySS';// O arquivo onde a função de serviço está

export const ImateSearch = () => {
    const [ssn, setSsn] = useState('');
    const [imate, setImate] = useState(null);
    const [error, setError] = useState('');

     const handleSearch = async () => {
        try {
            const result = await getImateBySocialSecurity(ssn);
            
            setImate(result);
            setError('');
            console.log(imate)

        } catch (err) {
            setImate(null);
            setError(err.message);
        }
    };

    return (
        <div>
                <h2>Locate a Federal Inmate</h2>
                <input
                type="text"
                placeholder="Enter Social Security Number"
                value={ssn}
                onChange={(e) => setSsn(e.target.value)}
            />
            <button onClick={handleSearch} className='button-38'> Find </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {imate && (
                <div>
                    <h2>Imate Found</h2>
                    <p>Name: {imate.name}</p>
                    <p>Gender: {imate.gender}</p>
                    <p>Location: {imate.addresses[0].city.state.state} </p>
                    {/* Adicione mais detalhes conforme necessário */}
                </div>
            )}
        </div>
    );
};

