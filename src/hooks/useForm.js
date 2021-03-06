import {useState} from 'react';

function useForm(valoresIniciais){

    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(e){      
        setValue(e.target.getAttribute('name'),
                 e.target.value);
    }

    
    return{
        values,
        handleChange
    }

}

export default useForm;
