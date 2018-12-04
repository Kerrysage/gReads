
exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors', function (table) {
        table.increments()
        table.string('firstName')
        table.string('lastName')
        table.string('biography', 1000)
        table.string('portraitURL', 500)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('authors')
};
