
exports.up = function(knex) {
    return knex.schema.createTable('trucks', tbl => {
        tbl.increments()
        tbl.timestamp('created_at')
        tbl.string('location_lat')
          .notNullable()
        tbl.string('location_lon')
        .notNullable()
        tbl.string('truck_name')
          .notNullable()
        tbl.string('food_type')
          .notNullable()
        tbl.string('next_location_lon')
        tbl.string('next_location_lat')
        tbl.boolean('selected')
          .defaultTo(false)
          
        tbl.integer('operator_id')
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
