
const fetchImates = async () => {

        const resposta = await fetch('https://randomuser.me/api/?results=25')
        const dadosJson = await resposta.json()
        
        return dadosJson.results
}


export default fetchImates