import React from 'react';
import PageDefault from '../../../pageDefault';

import { Link } from 'react-router-dom';
import { Form } from './style';

function CadastroCategoria(){
    return(
        <PageDefault>
            <h1>Cadastro de Categorias</h1>

            <Form>
                <label>
                    Nome da Categoria
                </label>
                
                <input type="text"
                    />

                <button>
                    Cadastrar
                </button>
            </Form>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;