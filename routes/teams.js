const router = require('express').Router();

const TeamsController = require('../controllers/teamsController');

// Begin routes

router.get('/', TeamsController.index);
router.get('/new', TeamsController.new);
router.get('/:id', TeamsController.show);
router.get('/:id/edit', TeamsController.edit);
router.post('/', TeamsController.create);
router.post('/update', TeamsController.update);
router.post('/delete', TeamsController.delete);

// End routes

module.exports = router;