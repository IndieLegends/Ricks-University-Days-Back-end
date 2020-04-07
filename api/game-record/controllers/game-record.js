'use strict';
const {schema} = require('./joi_schema.js');
/**
* Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
* to customize this controller
*/

module.exports = {
  record: async (ctx) => {
    const {game_number, action, reaction} = ctx.request.body;
    console.log(`game_number = ${game_number}\naction = ${action}\nreaction = ${reaction}`);
    try
    {
      const values = await schema.validateAsync({
        "game_number": game_number,
        "action": action,
        "reaction": reaction
      });
      console.log("Passed");
      try
      {
        strapi.query('game-record').create(values);
        ctx.send("done");
      }
      catch(e)
      {
        ctx.send(e.message);
      }
    }
    catch(e)
    {
      ctx.send(e['details'][0].message);
    }
  }
};
