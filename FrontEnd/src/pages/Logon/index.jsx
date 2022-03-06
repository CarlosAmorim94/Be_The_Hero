import React from 'react';
import { LogonContainer, SectionForm } from './styles';
import { Link } from 'react-router-dom';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import { FaSignInAlt } from 'react-icons/fa';

export default function Logon() {
  return (
    <LogonContainer>

      <SectionForm>

        <img src={logoImg} alt="Logo" />

        <form>

          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID" />
          <button className='button' type='submit'>Entrar</button>

          <Link className='back-link' to="/register">
            <FaSignInAlt size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>

        </form>

      </SectionForm>

      <img src={heroesImg} alt="Heroes" />

    </LogonContainer>
  )
}
