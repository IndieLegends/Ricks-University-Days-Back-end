'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports =
{
  random: async (ctx) => {
    try
    {
      var rand1 = Math.floor(Math.random() * 92);
      var rand2 = Math.floor(Math.random() * 92);
      while(rand1 === rand2 || rand1 === 0 || rand2 === 0)
      {
        rand1 = Math.floor(Math.random() * 92);
        rand2 = Math.floor(Math.random() * 92);
      }
      const result = await strapi.query('card').find({ id_in: [rand1, rand2]});
      ctx.send(result);
    }
    catch (e)
    {
      ctx.send(e.message);
    }
  }
};
