// const db = require("../../mongoDB");
// module.exports = async (client, queue, song) => {
// let lang = await db?.musicbot?.findOne({ guildID: queue?.textChannel?.guild?.id })
// lang = lang?.language || client.language
// lang = require(`../../languages/${lang}.js`);
// queue?.textChannel?.send({ content: `<@${song.user.id}>, **${song.name}** ${lang.msg79}` }).catch(e => { })
// }
const db = require("../../mongoDB");

module.exports = async (client, queue, song) => {
    let lang = await db?.musicbot?.findOne({ guildID: queue?.textChannel?.guild?.id });
    lang = lang?.language || client.language;
    lang = require(`../../languages/${lang}.js`);

    // Add the song to the queue
    // Assuming there is a function called addToQueue that adds the song to the queue
    await addToQueue(queue, song);

    // Once the song is successfully added to the queue, send the message
    queue?.textChannel?.send({ content: `<@${song.user.id}>, **${song.name}** ${lang.msg79}` }).catch(e => { });
}