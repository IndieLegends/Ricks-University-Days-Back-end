'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports =
{
  random: async (ctx) => {
    //36
    try
    {
      var rand = Math.floor(Math.random() * 36);
      while(rand === 0) {rand = Math.floor(Math.floor(Math.random() * 36));}
      const result = await strapi.query('project').find({id: rand});
      ctx.send(result);
    }
    catch (e)
    {
      ctx.send(e.message);
    }
  }
};
