const db = require('../../database/db');

module.exports = {
    create,
    getTrucks,
    getById,
    update,
    remove
}

function create(truck) {
  return db('trucks')//trucks + operators = trucks to operator
    .insert(truck)
}

//returns all trucks  available from all operators
  function getTrucks() {
    return db('trucks')
      .select('trucks.id','truck_name', 'location_lat', 'location_lon','departing_time' ,'food_type', 'rating', 'created_at', 'operators_id', 'next_location_lat','next_location_lon','arrival_time', )
}

// function getById(id) {
//     return db('trucks')
//       .where({ id })
//       .first()
//       .select('trucks.id','truck_name', 'location_lat', 'location_lon','departing_time' ,'food_type', 'rating', 'operators_id', 'next_location_lat','next_location_lon','arrival_time', )
//   }

  // get trucks by operator id
function getById(operator_id) {
  return db('trucks')
     .join('operators as operator', 'operator.id', 'trucks.operator_id', 'trucks.id')
     .where('trucks.operator_id', '=', operator_id)
}

  function update(id, changes) {
    return db('trucks')
      .where({ id })
      .update(changes)
  }

  function remove(id) {
    return db('trucks')
      .where({ id })
      .delete()
  }