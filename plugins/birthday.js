const { calculatePing, pnix, mode } = require("../lib");

pnix({
  pattern: "birthday",
  type: "main",
  desc: "Birthday Shoot",
  fromMe: mode
}, async (msg, match) => {
  // Send the text message
  await msg.reply(`Birthday Shoot Packages 🎂\n
    We Have 3 Main Packages In Birthday Shoots\n
    *Package 1*\n
    20 Photos \n
    Time Duration 2hrs \n
    *Price Rs 6500/= + Transport*\n\n
    *Package 2*\n
    30 Photos \n
    Time Duration 4hrs \n
    *Price Rs 8500/= + Transport*\n\n
    *Package 3*\n
    40 Photos \n
    Time Duration 5hrs \n
    *Price Rs 10500/= + Transport*\n\n
    Contact *Admin* Via WhatsApp By Clicking The Below Link To Bookings\n\n
    https://api.whatsapp.com/send?phone=+94729674674`);
});
