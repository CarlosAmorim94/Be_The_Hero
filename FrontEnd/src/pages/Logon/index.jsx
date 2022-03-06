import React, {useState} from 'react';
import { LogonContainer, SectionForm } from './styles';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import { FaSignInAlt } from 'react-icons/fa';

export default function Logon() {

  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      console.log(response.data.name);

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');

    } catch (err) {
      alert('Falha no login, tente novamente!')
    }

  }

  return (
    <LogonContainer>

      <SectionForm onSubmit={handleLogin}>

        <img src={logoImg} alt="Logo" />

        <form>

          <h1>Faça seu logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
            />
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
