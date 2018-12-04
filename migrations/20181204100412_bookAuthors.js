//UP moves db forward 
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bookAuthors', function (table) {
        table.increments()
        table.string('name')
        table.integer('height')
        table.integer('mass')
    })
};
//DOWN in the event that you need to rollback changes
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('bookAuthors')
};
