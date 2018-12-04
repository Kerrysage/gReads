//UP moves db forward 
exports.up = function(knex, Promise) {
    knex.schema.createTable([table name], function (table) {
        table.increments()
        table.string('name')
        table.integer('height')
        table.integer('mass')
    })
};
//DOWN in the event that you need to rollback changes
exports.down = function(knex, Promise) {
    knex.schema.table('users', function (table) {
        table.dropColumn('name');
        table.string('first_name');
        table.string('last_name');
      })
};
