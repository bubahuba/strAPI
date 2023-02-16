module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6afe38e5a7460a6446c1f45f57a18d6b'),
  },
});
