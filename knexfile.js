// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      connection: 'postgres://localhost/[gREADSdb]'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      connection: process.env.DATABASE_URL + '?ssl=true'
    }

  }
}