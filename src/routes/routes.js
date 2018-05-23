const controller = require('../controllers/usercontroller')

module.exports = (app) => {
  app.route('/user')
    .get(controller.list)
    .post(controller.create)
    .put(controller.update)
  app.route('/user/:id')
    .get(controller.read)
    .delete(controller.delete)
  app.use((req, res) => {
    res.status(404).send({ data: `${req.method}:${req.originalUrl} not found.` })
  })
}
