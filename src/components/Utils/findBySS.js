


export const getImateBySocialSecurity = async (socialSecurityNumber) => {
    const apiBaseUrl = process.env.REACT_APP_API_URL;

    try {
        const response = await fetch(`${apiBaseUrl}imates/ssn/${socialSecurityNumber}`, {
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
