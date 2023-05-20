let express = require('express');
let router = express.Router();
const Team = require('../shared/team.model')
const User = require("../shared/user.model");

router.get('/:teamId', async function(req, res) {
    const teamId = req.params.teamId
    try {
        const team = await Team.findById(teamId).exec()
        if(!team){
            return res.status(404)
        }
        return res.status(200).send(team)
    } catch (e) {
        res.status(500).json(e)
    }
})
router.put('/:teamId',  async function (req, res){
    const teamId = req.params.teamId
    try {
        return res.status(200).send( await Team.findByIdAndUpdate(teamId, req.body).exec())
    } catch (e) {
        return res.status(500).json(e)
    }
})
router.put('/:teamId/editTeam/:userId', async function (req, res){
    const teamId = req.params.teamId
    const userId = req.params.userId
    try {
        const team = await Team.findById(teamId).exec()
        let users = team.get('UserId')
        for (let i = 0; i < users.length; i++){
            if(users[i].get('_id') === userId){
                return res.status(200).send('User already in team')
            }
        }
        users.push(userId);
        return res.send(200).json(await Team.findByIdAndUpdate(teamId, { userId: users }).exec())
    } catch (e) {
        return res.status(500).json(e)
    }
})
router.post('/:teamId/addUser/:userId', async function (req, res){
    const teamId = req.params.teamId
    const userId = req.params.userId
    try {
        const team = await Team.findById(teamId).exec()
    } catch (e) {
        return res.status(500).json(e)
    }
})
router.delete('/:teamId/removeUser/:userId', async function (req, res){
    const teamId = req.params.teamId
    const userId = req.params.userId
    try {

    } catch (e) {
        return res.status(500).json(e)
    }
})



module.exports = router;
