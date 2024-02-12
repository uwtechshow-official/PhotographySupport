const { calculatePing, pnix, mode } = require("../lib");

pnix({
  pattern: "owner",
  type: "main",
  desc: "Contact Owner",
  fromMe: mode
}, async (msg, match) => {
  // Send the text message
  await msg.reply(`Contact Owner\n
   \n 👇🏻 Click Here 👇🏻 \n
   https://api.whatsapp.com/send?phone=+94729674674/`);
});
