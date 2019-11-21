
exports.up = function(knex) {
    return knex.schema.createTable('trucks', trucks => {
      trucks.increments()
      trucks.timestamp('created_at')
      trucks.string('location_lat')
          .notNullable()
          trucks.string('location_lon')
        .notNullable()
        trucks.string('truck_name')
          .notNullable()
          trucks.time('departing_time')
          trucks.time('arrival_time')
          trucks.string('next_location_lat')
          trucks.string('next_location_lon')
          trucks.string('food_type')
          .notNullable()
          trucks.integer('rating')
          trucks.integer('operators_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('operators')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('trucks')
  };
