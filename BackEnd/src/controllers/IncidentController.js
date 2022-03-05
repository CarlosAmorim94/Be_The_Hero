const express = require('express');
const connection = require('../database/connection');

module.exports = {

  async index(request, response) {
    const { page = 1 } = request.query;

    // colchetes em volta retorna o primeiro valor da chamada
    const [ count ] = await connection('incidents').count();

    const incidents = await connection('incidents')
    .join('ongs', 'ongs_id', '=', 'incidents.ong.id')
    .limit(5) //Limita para 5 registros
    .offset((page - 1) *5 ) //pula 5 registros por página, começa do 0
    .select([
      'incidents.*',
      'ongs.name',
      'ongs.email',
      'ongs.whatsapp',
      'ongs.city',
      'ongs.uf',
    ]);

    response.header('X-Total-Count', count['count(*)']);

    response.json(incidents);
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

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ error: 'Operation not permitted.' });
    };

    await connection('incidents').where('id', id).delete();

    return response.status(204).send();
  },

};