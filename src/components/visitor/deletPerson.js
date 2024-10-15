
import '../imate/imate.css'

function DeletPerson ({visitorId}) {
   
    const handleDeleteVisitor = async () => {
        try {
            const response = await fetch(`http://localhost:8080/visitor/${visitorId}`, {
                method: 'DELETE'
            });
            console.log(response)

            if (response.ok) {
                // Atualize o estado ou faça qualquer ação necessária após a exclusão bem-sucedida
                console.log('Visitor excluído com sucesso!');
            } else {
                console.error('Falha ao excluir visitor, ele não existe ou possui pendencias');
            }
        } catch (error) {
            console.error('Erro ao processar solicitação de exclusão:', error);
        }
    };

    return (

        <button className="button-38" onClick={handleDeleteVisitor}>Delete Visitor</button>

    )

}

export default DeletPerson
