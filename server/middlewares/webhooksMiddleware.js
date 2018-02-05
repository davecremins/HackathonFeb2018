let webhooksMiddleware = (app, socketInterface) => {
   app.use(require('body-parser').json());
   return (req, res, next) => {
      res.status(204).end();
      socketInterface.emit('hooks:post', 
         {
            category: 'webhook', 
            data: req.body
         }
      );
   }
};

module.exports = (app, socketInterface) => {
   app.use('/hooks', webhooksMiddleware(app, socketInterface));
 };