import config from '../config/index';

const URL_CATEGORIES = `${config.URL_TOP}/categorias`;

function getAllWithVideos(){
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
       .then(async (respostaDoServidor)=>{

        if(respostaDoServidor.ok){
            const resposta = await respostaDoServidor.json();

            return resposta;
        }

        throw new Error("Não foi Possivel pegar os dados");

        });
}

export default {
    getAllWithVideos,
}