const mongoose = require('mongoose');

const Profile = mongoose.model('Profile');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const profiles = await Profile.paginate({ }, { page, limit: 10});

        return res.json(profiles);
    },

    async show(req, res){
        const profile = await Profile.findById(req.params.id);

        return res.json(profile);
    },

    async store(req, res){
        const profile = await Profile.create(req.body);

        return res.json(profile);
    },

    async update(req ,res){
        const profile = await Profile.update({ _id : req.params.id }, { $set: req.body }, { new: true });

        return res.json(profile);
    },

    async destroy(req, res){
        await Profile.findByIdAndRemove(req.params.id);

        return res.send();
    }
}