'use strict';
const {createSchema} = require("./joi_schema");

module.exports = {

  create: async (ctx) => {
    const {nickname, character} = ctx.request.body;

    try {
      const value = await createSchema.validateAsync({
        "nickname": nickname,
        "character": character
      });
      try {
        await strapi.query("user-info").create(value);
        ctx.send({'success': true});
      } catch (e) {
        ctx.send('error');
      }
    } catch (e) {
      ctx.send(e['details'][0].message);
    }
  },
};
