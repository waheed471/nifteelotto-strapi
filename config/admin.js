module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd9d02392b60c7c7ad1d4441b0a3242ae'),
  },
});
