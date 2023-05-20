let express = require('express');
let router = express.Router();
const User = require("../shared/user.model");

router.post('/', async function (req, res) {
    const userId = req.body.uid
    try {
        const user = await User.findById(userId).exec();
        if(user == null) {
            const newUser = User({
                _id: req.body.uid,
                email: req.body.email,
                first_name: req.body.first_name,
                surname: req.body.surname,
                roles: req.body.roles,
            })
            await newUser.save()
        }
        return res.status(201).send(await User.findById(userId, 'roles').exec())
    } catch (e) {
        res.status(500).send(e)
    }
});

router.delete('/:userId', async function(req, res){
    const userId = req.params.userId
    try {
        return res.status(200).send(await User.findByIdAndDelete(userId).exec())
    } catch (e){
        return res.send(500).json(e)
    }
})

router.get('/:userId/role',async function (req, res){
    //se abbiamo token con ruolo
    if(res.locals.roles){
        return res.status(200).json(res.locals.roles)
    } else {
        return  res.status(404).send('Not found')
    }

    //se non abbiamo token con ruolo
    /*const userId = req.params.userId
    try {
        return res.status(200).send( await User.findById(userId, 'roles'))
    } catch (e) {
        res.status(500).json(e)
    }*/
})

router.post('/:userId/role',async function (req, res){
    //se abbiamo token con ruolo
    if(!res.locals.roles){
        return res.status(500).send('Error during auth')
    } else {
        for(let i = 0; i< res.locals.roles.length; i++){
            if(res.locals.roles[i] === process.env.ROLE_TP){
                res.status(200).send(await User.findByIdAndUpdate(userId, {role: req.body.role}))
            }
        }
    }

    //se non abbiamo token con ruolo
    /*const userId = req.params.userId
    try {
        return res.status(200).send( await User.findById(userId, 'roles'))
    } catch (e) {
        res.status(500).json(e)
    }*/
})

module.exports = router;
