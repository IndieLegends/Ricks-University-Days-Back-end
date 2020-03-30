'use strict';
const query = require('../services/query.js');

module.exports = {
  random: async (ctx) => {
    try
    {
      const {username} = ctx.request.query;
      var user = await strapi.query('user-info').findOne({username: username});
      if (user)
      {
        const cards = await strapi.connections.default.raw(query.random_cards);
        const project = await strapi.connections.default.raw(query.random_project);
        user.cards = [cards[0].id, cards[1].id];
        user.projects = [project[0].id];
        await strapi.query('user-info').update({id: user.id}, user);
        ctx.send([{'cards': cards,'project': project}]);
        return;
      }
      ctx.send('404');
    }
    catch(e)
    {
      ctx.send(e.message);
    }
  }
}
