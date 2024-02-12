const { calculatePing, pnix, mode } = require("../lib");

pnix({
  pattern: "find",
  type: "main",
  desc: "Find Us",
  fromMe: mode
}, async (msg, match) => {
  // Send the text message
  await msg.reply(`Find Us On Social Media\n
   \n 👇🏻 Click Here 👇🏻 \n
   https://www.udavinwijesundaraphotography.free.nf/contact/`);
});
