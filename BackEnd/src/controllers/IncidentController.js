const express = require('express');
const connection = require('../database/connection');

module.exports = {

  async index(request, response) {

    const incidents = await connection('incidents').select('*');

    response.json({ incidents });
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    //Coletando o [id] que será o primeiro item cadastrado no db.
    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return response.json({ id });
  },




};