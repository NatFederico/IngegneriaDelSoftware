let express = require('express');
let router = express.Router();


router.get('/:userId', function(req, res) {
    res.send(req.params)
});

module.exports = router;
