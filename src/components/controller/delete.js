
import '../imate/imate.css'

function DeletImate ({imateId}) {
    console.log(imateId)

    const handleDeleteImate = async () => {
        console.log(imateId)
        try {
            const response = await fetch(`http://localhost:8080/imates/${imateId}`, {
                method: 'DELETE'
            });
            console.log(response)

            if (response.ok) {
                // Atualize o estado ou faça qualquer ação necessária após a exclusão bem-sucedida
                console.log('Imate excluído com sucesso!');
            } else {
                console.error('Falha ao excluir imate, ele não existe ou possui pendencias');
            }
        } catch (error) {
            console.error('Erro ao processar solicitação de exclusão:', error);
        }
    };

    return (

        <button className="button-38" onClick={handleDeleteImate}>Delete Imate</button>

    )

}

export default DeletImate
