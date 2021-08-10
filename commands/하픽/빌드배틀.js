const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");
const fs = require('fs');
const fetch = require('node-fetch');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(hpapikey);
const commaNumber = require('comma-number');

module.exports = {
    name: "빌드배틀",
    execute(message, args) {
        message.delete()
        
        const user = message.author
        const Embed3 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`특정 유저에게 메시지를 보낼 수 없습니다`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)


        if(args[0] == null)
        {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`ERROR REPORTED by ${owner}`, img3)
            .setThumbnail(img3)
            .setTitle(`유저를 찾을 수 없습니다`)
            .setImage(img4)
            .setFooter(`${owner}`, img3)
            .setTimestamp()
            .setColor(`${errorcolor}`)

            message.channel.send(Embed)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
        }

        hypixelAPIReborn.getPlayer(args[0]).then((player) => {
            const Embed = new Discord.MessageEmbed()
            .setAuthor(`HYPIXEL INFO BY ${owner}`, img3)
            .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BuildBattle-64.png')
            .setTitle('Build Battle Stats')
            .setDescription(`[${player.rank}] ${player.nickname}`)
            .setColor(color)
            .setFooter(owner, img3)
            .addField('Coins:', `${commaNumber(player.stats.buildbattle.coins)}`, true)
            .addField('Total Wins:', `${commaNumber(player.stats.buildbattle.winsTotal)}`, true)
            .addField('Total Games:', `${commaNumber(player.stats.buildbattle.playedGames)}`, true)
            .addField('Total Votes:', `${commaNumber(player.stats.buildbattle.totalVotes)}`, true)
            .addField('Score:', `${commaNumber(player.stats.buildbattle.score)}`, true)
            .addField('Solo Wins:', `${commaNumber(player.stats.buildbattle.wins.solo)}`, true)
            .addField('Team Wins:', `${commaNumber(player.stats.buildbattle.wins.team)}`, true)
            .addField('Pro Wins:', `${commaNumber(player.stats.buildbattle.wins.pro)}`, true)
            .addField('Guess That Build Wins:', `${commaNumber(player.stats.buildbattle.wins.gtb)}`, true)
            .setImage(img4)
            .setFooter(`${owner}`, img3)
            .setTimestamp()
            .setColor(`${color}`)

            message.channel.send(Embed)
            .then(msg => {setTimeout(() => msg.delete(), 3000)})
            try
            {
                user.send(Embed)
            }
            catch(e)
            {
                message.channel.send(Embed3)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
        }).catch(e => {
            if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                const Embed = new Discord.MessageEmbed()
                .setAuthor(`ERROR REPORTED by ${owner}`, img3)
                .setThumbnail(img3)
                .setTitle(`유저를 찾을 수 없습니다`)
                .setImage(img4)
                .setFooter(`${owner}`, img3)
                .setTimestamp()
                .setColor(`${errorcolor}`)
    
                message.channel.send(Embed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }     
        });
    }
}