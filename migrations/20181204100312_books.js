
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', function (table) {
        table.increments()
        table.string('title')
        table.string('genre')
        table.string('description', 500)
        table.string('coverURL', 250)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('books')
};
