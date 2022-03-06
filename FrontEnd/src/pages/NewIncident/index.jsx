import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { NewIncidentContainer, NewIncidentContent, NewIncidentForm, NewIncidentSection } from './styles'

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {

  return (
    <NewIncidentContainer>
      <NewIncidentContent>
        <NewIncidentSection>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          
          <Link className='back-link' to="/profile">
          <FiArrowLeft size={16} color="#E02041"/>
          Voltar para home
        </Link>
        </NewIncidentSection>

        <NewIncidentForm >
          <input
            placeholder="Título do caso"
          />
          
          <textarea
            placeholder="Descrição"
          />

          <input
            placeholder="Valor em reais"
          />
          
              
          <button className="button" type="submit"> Cadastrar </button>
        </NewIncidentForm>
      </NewIncidentContent>
    </NewIncidentContainer>
  )
}