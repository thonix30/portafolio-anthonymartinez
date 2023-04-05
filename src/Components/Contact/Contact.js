import React,{useState, useRef} from 'react';
import * as S from './Contact.styles';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [contactDates, setContactDates] = useState({
      name:"",
      email:"",
      message:"",
      checkedTerms: false,
    });

    const [emptyInputs, setEmptyInputs] = useState(false);
    const [successSendForm, setSuccesSendForm] = useState(false);
    const [errorSendForm, setErrorSendForm] = useState(false);

    const form = useRef();

    const onSubmit =(e) => {
      //evitar recargar pagina
      e.preventDefault();

      //validar form
      if(
        contactDates.name === "" ||
        contactDates.email === "" || 
        contactDates.message === "" || 
        contactDates.checkedTerms === false
        ) {
        setEmptyInputs(true);
      } else {
        emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
         )    
         .then(
          (result) => {
            setSuccesSendForm(true);
         },
         (error)=> {
          setErrorSendForm(true);
         }   
       );
      }
      

      //enviar formulario
       
    };

  return (
      <S.ContainerContact>
      <S.Title>Contact with me 🤙</S.Title>
      <S.ContainerForm>
         {successSendForm ?(
        <S.TextEnviado >El formulario ha sido enviado</S.TextEnviado>
      ):(
          <S.Form onSubmit={onSubmit} ref={form}>
            <S.InputForm placeholder='your name' type='text'name='name' onChange={(e) => setContactDates({...contactDates, name: e.target.value}) } 
            value={contactDates.name}
            />

            <S.InputForm placeholder='your email' type='email'name='email'onChange={(e) => setContactDates({...contactDates, email: e.target.value}) }
            value={contactDates.email}
            />

            <S.TextArea placeholder='write your message'name='message'onChange={(e) => setContactDates({...contactDates, message: e.target.value}) }
            value={contactDates.message}
            />

            <S.ContainerConditions>
                <input type="checkbox" onChange={(e)=>
                  setContactDates({...contactDates,checkedTerms: e.target.checked,}) /* checkCheckbox(e) */}/>
                <span>Acepto todos los terminos y condiciónes</span>
            </S.ContainerConditions>
            <S.Button type='submit'>Enviar</S.Button>
          </S.Form>
      )}
       {emptyInputs && (
        <S.TextError>por favor complete los campos.</S.TextError>
   )}
   {errorSendForm &&(<S.TextError>Ha ocurrido un error</S.TextError>)}
         </S.ContainerForm>
      
  </S.ContainerContact>
  );
  
};

export default Contact