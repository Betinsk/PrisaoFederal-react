

const API_URL = 'http://localhost:8080/imates'; // Altere para a URL do seu servidor

export const getImateBySocialSecurity = async (socialSecurityNumber) => {
    try {
        const response = await fetch(`${API_URL}/ssn/${socialSecurityNumber}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Imate not found');
            } else {
                throw new Error('An error occurred while fetching the Imate');
            }
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Imate by Social Security Number:', error);
        throw error;
    }
};
