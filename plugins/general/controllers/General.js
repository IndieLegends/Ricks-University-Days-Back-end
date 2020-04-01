'use strict';
const query  = require('../services/query.js');
const {schema} = require('./joi_schema.js');

module.exports = {
  random: async (ctx) => {
    const {username}  = ctx.request.query;
    try {
      const value     = await schema.validateAsync({
        "username": username
      });
      try {
        const user       = await strapi.query('user-info').findOne({username: username});
        if (user) {
          const cards    = await strapi.connections.default.raw(query.random_cards);
          const projects = await strapi.connections.default.raw(query.random_project);
          user.cards     = [cards[0].id, cards[1].id];
          user.projects  = [projects[0].id];
          await strapi.query('user-info').update({id: user.id}, user);
          ctx.send({"cards": cards, "projects": projects});
        }
        else
        {
          ctx.throw(404);
        }
      }
      catch (e) {
        ctx.send(e.message);
      }
    }
    catch (e) {
      ctx.send(e['details'][0].message);
    }
  }
}
