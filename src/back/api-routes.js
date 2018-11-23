// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
let seriesController = require('./seriesController');

// Contact routes
router.route('/series')
    .get(seriesController.index)
    .post(seriesController.new);

router.route('/serie/:serie_id')
    .get(seriesController.view)
    .patch(seriesController.update)
    .put(seriesController.update)
    .delete(seriesController.delete);

// Export API routes
module.exports = router;
