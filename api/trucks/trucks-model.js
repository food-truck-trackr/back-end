const db = require('../../database/db');

module.exports = {
    create,
    getTrucks,
    getById,
    update,
    remove
}

function create(truck) {
  return db('operators')//trucks + operators = trucks to operator
    .insert(truck)
}

//returns all trucks  available from all operators
  function getTrucks() {
    return db('trucks')
      .join('operator', 'operator.id', 'trucks.operator_id')
      .select('truck.id as truck_id','truck_name', 'location_lat', 'location_lon', 'food_type', '', 'selected', 'created_at', 'operator_id')
}

function getById(id) {
    return db('operator')
      .where({ id })
      .first();
  }

  //get trucks by operator id
function getTrucksById(operator_id) {
  return db('trucks')
     .join('operator_profile as operator', 'operator.id', 'trucks.operator_id', 'trucks.id')
     .where('trucks.operator_id', '=', operator_id)
}

  function update(id, changes) {
    return db('operator')
      .where({ id })
      .update(changes)
  }

  function remove(id) {
    return db('operator')
      .where({ id })
      .delete()
  }