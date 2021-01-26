const { Router } = require('express');
const Account = require('./models/Account');

const routes = Router();

routes.get('/accounts', async (request, response) => {
    const accounts = await Account.find();

    return response.json(accounts);
});

routes.post('/accounts', async (request, response) => {
    const { name } = request.body;

    if(!name) return response.status(400).json({error: 'Name is required.'})

    const account = await Account.create({ name });

    return response.json(account);
});

module.exports = routes;
