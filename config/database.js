module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'db.dw022.nameserver.sk'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'huba_strapi'),
      user: env('DATABASE_USERNAME', 'huba_strapi'),
      password: env('DATABASE_PASSWORD', '7b2eCr3f'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
