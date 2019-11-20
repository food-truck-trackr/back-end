const db = require('../../database/db');

module.exports = {
    create,
    get,
    getById,
    update,
    remove,
}

function create(diner) {
    return db('diners')
      .insert(diner)
      .then(ids => {
        return getById(ids[0]);
      });
  }

function get() {
    return db('diners')
}


function getById(id) {
    return db('diners')
      .where({ id })
      .first();
  }

function update(id, changes) {
    return db('diners')
      .where({ id })
      .update(changes)
      .then(ids => ({ id: ids[0], changes}));
  }

function remove(id) {
  return db('diners')
    .where({ id })
    .delete()
}