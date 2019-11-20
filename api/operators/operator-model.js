const db = require('../../database/db');

module.exports = {
    create,
    get,
    getTrucksById,
    update,
    getById,
    remove
}

function create(operator) {
    return db('operators')
        .insert(operator)
}

function get() {
    return db('operators')
}

function getById(id) {
    return db('operators')
      .where({ id })
      .first();
  }


//get trucks by operator id
function getTrucksById(operators_id) {
     return db('trucks')
        .join('operators ', 'operators.id', 'trucks.operators_id', )
        .where('trucks.operators_id', '=', operators_id)
}

function update(id, changes) {
    return db('operators')
      .where({ id })
      .update(changes)
      .then(ids => ({ id: ids[0], changes}));
  }

function remove(id) {
    return db('operators')
    .delete()
    .where({ id })
}