import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { InputGroup, RegisterContainer, RegisterContent, RegisterForm, RegisterSection } from './styles'

import logoImg from '../../assets/logo.svg'

export default function Register() {

  return (
    <RegisterContainer>
      <RegisterContent>
        <RegisterSection>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro e ajude pessoas a encontrarem os casos da sua ONG. 🦸‍♂️</p>
          
          <Link className='back-link' to="/">
          <FiArrowLeft size={16} color="#E02041"/>
          Voltar para o logon
        </Link>
        </RegisterSection>

        <RegisterForm >
          <input
            placeholder="Nome da ONG"
          />
          
          <input
            type="email"
            placeholder="E-mail"
          />
          
          <input
            placeholder="Whatsapp"
          />

          <InputGroup>
          
          <input
              placeholder="Cidade"
              
            />
            
            <input
              placeholder="UF"
              style={{ width: 80 }}

            />
          </InputGroup>
          
          <button className="button" type="submit"> Cadastrar </button>
        </RegisterForm>
      </RegisterContent>
    </RegisterContainer>
  )
}