module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: env('DATABASE_HOST', 'niftee-testserver.mysql.database.azure.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'nifteelottoDev'),
        user: env('DATABASE_USERNAME', 'bouncylion1'),
        password: env('DATABASE_PASSWORD', 'P@ss123321'),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  });
  