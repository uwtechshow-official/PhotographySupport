const { calculatePing, pnix, mode} = require("../lib");

pnix({
    pattern: "start",
    type: "main",
    desc: "Bot response.",
    fromMe: mode
  }, async (msg, match) => {
    await msg.reply(`Welcome to UDAVIN WIJESUNDRA PHOTOGRAPHY support! How can I help you?
  Select The Type You Like To Know About
  We Do Both Model And Birthday Shoots

  Type *.model* To Get Details About Model Shoots

  Type *.birthday* To Get Details About Birthday Shoots

  Type *.find* To Find Us On Social Media

  Type *.owner* To Contact Owner`);
})