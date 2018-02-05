/* eslint-disable global-require */

const webhooksMiddleware = (app, socketInterface) => {
  app.use(require('body-parser').json());
  return (req, res) => {
    res.status(204).end();
    socketInterface.emit('webhooks:post',
      {
        category: 'webhook',
        data: req.body,
      }
    );
  };
};

module.exports = (app, socketInterface) => {
  app.use('/hooks', webhooksMiddleware(app, socketInterface));
};
