
const fetchImates = async () => {

        const resposta = await fetch('http://localhost:8080/imates')
        const dadosJson = await resposta.json()
        
        return dadosJson.results
}


export default fetchImates