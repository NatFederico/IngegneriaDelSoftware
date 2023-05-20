let express = require('express');
let router = express.Router();

router.get('/:teamId', function (req, res){
    try {

    } catch (e) {
        return res.status(500).json(e)
    }
});

router.get('/:teamId/photo/:photId', function (req, res){
    try {

    } catch (e) {
        return res.status(500).json(e)
    }
})

router.post('/:teamId', function (req, res){
    try {

    } catch (e) {
        return res.status(500).json(e)
    }
})

module.exports = router;
