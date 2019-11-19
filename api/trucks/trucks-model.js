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
      .select('truck.id as truck_id','com_name', 'location', 'position', 'description', 'pay_range', 'selected', 'created_at', 'company_id')
}

function getById(id) {
    return db('company')
      .where({ id })
      .first();
  }

  //get jobs by company id
function getTrucksById(company_id) {
  return db('company as jobs')
     .join('company_profile as company', 'company.id', 'jobs.company_id', 'jobs.id')
     .where('jobs.company_id', '=', company_id)
}

  function update(id, changes) {
    return db('company')
      .where({ id })
      .update(changes)
  }

  function remove(id) {
    return db('company')
      .where({ id })
      .delete()
  }