import React,{ useState, useEffect } from 'react';
import PageDefault from '../../../pageDefault';

import { Link } from 'react-router-dom';
import { Form } from './style';
import FormField from '../../../formField';
import useForm from '../../../../hooks/useForm';

function CadastroCategoria(){
   
    const valoresIniciais = {
        nome:"",
        descricao:"",
        cor:""
    }

    const { handleChange, values } = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState(['']);


    useEffect(()=>{
        const URL = 'http://localhost:3001/categorias';
        fetch(URL)
        .then(async (respostaDoServidor)=>{
            const resposta = await respostaDoServidor.json();
            setCategorias([
                ...resposta,
            ])
        })
    })

    return(
        <PageDefault>
            <h1>Cadastro de Categorias: {values.nome}</h1>

            <Form onSubmit={(e)=>{
                e.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ])
            }} >

                <FormField 
                   label="Nome da Categoria"
                   name="nome"
                   type="text"
                   value={values.nome}
                   onChange={handleChange}
                />

              <div>
                <label>
                 Descrição:
                  <textArea
                     type="text"
                     name="descricao"
                     value={values.descricao}
                     onChange={handleChange}
                  />
                  </label>
              </div>

                <FormField 
                   label="Cor"
                   name="color"
                   type="color"
                   value={values.color}
                   onChange={handleChange}
                />
                
                
               

                <button>
                    Cadastrar
                </button>
            </Form>

        
            <ul>
                {categorias.map((categoria, indice)=>{
                    return(
                      <li key={categoria + indice} >{categoria.titulo}</li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;