const mongoose = require("mongoose");
const warns = require('../models/warns.js');
var mongoUrl

class DiscordWarns {
    /**
    * @param {string} [dbUrl] - A mongo database URI.
    */

    static async setDB(dbUrl) {
        if (!dbUrl) throw new Error('No database URL provided.');
        mongoUrl = dbUrl;
        mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    /**
     * @param {string} [userID] - The user ID.
     * @param {string} [guildID] - The guild ID.
     * @param {string} [reason] - The reason for the warn.
     * @param {string} [moderator] - The moderator who warned the user.
     * @param {string} [date] - The date the warn was issued.
     * @returns {Promise<DiscordWarns>}
     * @example
     * const DiscordWarns = require('discord-warning');
     * 
     * DiscordWarns.setDB('mongodb://localhost:27017/database');
     * 
     * DiscordWarns.addWarn('123456789', '987654321', 'Spamming', 'Moderator', '2022-01-01');
     * 
     * // Returns
     * 
     * {
     *  userID: '123456789',
     * guildID: '987654321',
     * reason: 'Spamming',
     * moderator: 'Moderator',
     * date: '2022-01-01'
     * }
     */

    static async addWarn(userID, guildID, reason, moderator, date) {
        if (!mongoUrl) throw new Error('No database URL provided.');
        if (!userID) throw new Error('No user ID provided.');
        if (!guildID) throw new Error('No guild ID provided.');
        if (!reason) throw new Error('No reason provided.');
        if (!moderator) throw new Error('No moderator provided.');
        if (!date) throw new Error('No date provided.');

        const newWarn = new warns({
            userID: userID,
            guildID: guildID,
            reason: reason,
            moderator: moderator,
            date: date
        });
        return newWarn.save();
    }

    /**
     * @param {string} [userID] - The user ID.
     * @param {string} [guildID] - The guild ID.
     * @param {string} [reason] - The reason for the warn.
     * @param {string} [moderator] - The moderator who warned the user.
     * @param {string} [date] - The date the warn was issued.
     * @returns {Promise<DiscordWarns>}
     * @example
     * const DiscordWarns = require('discord-warning');
     * 
     * DiscordWarns.setDB('mongodb://localhost:27017/database');
     * 
     * DiscordWarns.getWarns('123456789', '987654321');
     * 
     * // Returns
     * 
     * [
     * {
     * userID: '123456789',
     * guildID: '987654321',
     * reason: 'Spamming',
     * moderator: 'Moderator',
     * date: '2022-01-01'
     * }
     */
    static async getWarns(userID, guildID) {
        if (!mongoUrl) throw new Error('No database URL provided.');
        if (!userID) throw new Error('No user ID provided.');
        if (!guildID) throw new Error('No guild ID provided.');
        return warns.find({
            userID: userID,
            guildID: guildID,
            reason: reason,
            moderator: moderator,
            date: date
        });
    }
}

module.exports = DiscordWarns;