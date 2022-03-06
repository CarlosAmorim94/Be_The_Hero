import React from "react";
import { ProfileContainer, ProfileHeader } from "./styles";
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <img src={logoImg} alt="Logo" />
        <span>Bem vinda, APAD</span>

        <Link 
        className="button"
        to="/incidents/new">
          Cadastrar novo 
        </Link>
        <button>
          <FiPower size={18} color="#E02041" />
        </button>
      </ProfileHeader>

      <h1>Casos cadastrados</h1>

      <ul>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste:</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste:</p>

          <strong>VALOR:</strong>
          <p>Valor teste:</p>

          <button type="button">
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>

        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste:</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste:</p>

          <strong>VALOR:</strong>
          <p>Valor teste:</p>

          <button type="button">
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>

        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste:</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste:</p>

          <strong>VALOR:</strong>
          <p>Valor teste:</p>

          <button type="button">
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>

        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste:</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste:</p>

          <strong>VALOR:</strong>
          <p>Valor teste:</p>

          <button type="button">
            <FiTrash2 size={20} color='#a8a8b3' />
          </button>

        </li>

      </ul>
    
    </ProfileContainer>
  )
}