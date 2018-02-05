module.exports = (express, app, socketInterface) => {
   app.use(require('body-parser').json());
   app.post('/hooks', (req, res) => {
      res.status(204).end();
      socketInterface.emit('hooks:post', 
         {
            category: 'webhook', 
            data: req.body
         }
      );
   });
 };