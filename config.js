

const toBool = (x) => x === 'true';

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'inrl~fe38fkim83e52f69c2af2dbc9595db837318',
    HANDLERS: process.env.HANDLERS || '.',
    BOT_NAME: process.env.BOT_NAME || 'udavin-wijesundara-photography-support-bot',
    OWNER_NAME: process.env.OWNER_NAME || 'Udavin Wijesundara',
    OWNER_NUMBER: process.env.OWNER_NUMBER || '94729674674',
    SUDO: process.env.SUDO || '94758900210,94729674674,94761192103,94722777000',
    MODE: (process.env.MODE || 'public').trim(),
    STICKER_DATA: process.env.STICKER_DATA || 'Support Bot',
};
