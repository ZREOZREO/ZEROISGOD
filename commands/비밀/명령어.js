const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const {prefix, basic, color, errorcolor, owner, ownerid, img, img2, img3, img4, covidapi, hpapikey} = require("../../config.json");

module.exports = {
    name: '๋ช๋ น์ด',
    execute(message, category){
        message.delete()
        const Embed = new Discord.MessageEmbed()
        .setAuthor(`๐${prefix}+ ๋ช๋ น์ด๐`, img)
        .setThumbnail(img)
        .setTitle(`DM์ผ๋ก ๋ช๋ น์ด๋ฅผ ๋ณด๋ด๋๋ ธ์ด์!`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const Embed2 = new Discord.MessageEmbed() 
        .setAuthor(`ERROR REPORTED by ${owner}`, img)
        .setThumbnail(img)
        .setTitle(`ํน์  ์ ์ ์๊ฒ ๋ฉ์์ง๋ฅผ ๋ณด๋ผ ์ ์์ต๋๋ค`)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${errorcolor}`)

        const MainEmbed = new Discord.MessageEmbed()
        .setAuthor(`๐${prefix}+ ๋ช๋ น์ด๐`, img)
        .setThumbnail(img)
        .setTitle(`<>๋ ํ์, []๋ ์ ํ์ฌํญ์๋๋ค`)
        .setDescription(`์ ๋์ฌ = ${prefix} \n**>**๋ ๋ช๋ น์ด์ ํฌํจ๋์ง ์์ต๋๋ค!`)
        .addField(`**>** ๋ช๋ น์ด ๊ด๋ฆฌ`, `๊ด๋ฆฌ์ ๊ดํ ์ปค๋งจ๋๋ค`)
        .addField(`**>** ๋ช๋ น์ด ์ ๋ณด`, `์ ๋ณด์ ๊ดํ ์ปค๋งจ๋๋ค`)
        // .addField(`**>** ๋ช๋ น์ด ํ๋ฌ`, `ํ๋ฌ์ ๊ดํ ์ปค๋งจ๋๋ค`)
        .addField(`**>** ๋ช๋ น์ด ํํฝ`, `ํํฝ์ ๊ดํ ์ปค๋งจ๋๋ค`)
        .addField(`**>** ๋ช๋ น์ด ๊ธฐํ`, `๊ธฐํ ๋ช๋ น์ด์ ๊ดํ ์ปค๋งจ๋๋ค`)
        .setImage(img2)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const ManageEmbed = new Discord.MessageEmbed()
        .setAuthor(`๐${prefix}+ ๋ช๋ น์ด๐`, img)
        .setThumbnail(img)
        .addField(`**>** ${prefix}๋ฐด <์ ์ > <์ฌ์ >`, `์ ์ ๋ฅผ ๋ฐดํฉ๋๋ค`)
        .addField(`**>** ${prefix}์ธ๋ฐด <์ ์ >`, `์ ์ ๋ฅผ ์ธ๋ฐดํฉ๋๋ค`)
        .addField(`**>** ${prefix}ํฅ <์ ์ > <์ฌ์ >`, `์ ์ ๋ฅผ ํฅํฉ๋๋ค`)
        // .addField(`**>** ${prefix}๋ฎคํธ <์ ์ >`, `์ ์ ๋ฅผ ๋ฎคํธํฉ๋๋ค`) -๋ด์ธ
        // .addField(`**>** ${prefix}์ธ๋ฎคํธ <์ ์ >`, `์ ์ ๋ฅผ ์ธ๋ฎคํธํฉ๋๋ค`) -๋ด์ธ
        // .addField(`**>** ${prefix}์ฒญ์ <์๋>`, `์ ํํ ์ ๋งํผ์ ๋ฉ์์ง๋ฅผ ์ญ์ ํฉ๋๋ค`) -๋ถ๊ฐ๋ฅ(for๋ก ํด๊ฒฐ์์ )
        // .addField(`**>** ${prefix}๊ฒฝ๊ณ ์ง๊ธ <์ ์ > <ํ์>`, `์ ์ ์๊ฒ ๊ฒฝ๊ณ ๋ฅผ ์ง๊ธํฉ๋๋ค`) -db
        // .addField(`**>** ${prefix}๊ฒฝ๊ณ ํ์ <์ ์ > <ํ์>`, `์ ์ ์๊ฒ์ ๊ฒฝ๊ณ ๋ฅผ ํ์ํฉ๋๋ค`)
        // .addField(`**>** ${prefix}๊ฒฝ๊ณ ์ด๊ธฐํ <์ ์ >`, `์ ์ ์ ๊ฒฝ๊ณ ๋ฅผ ์ด๊ธฐํํฉ๋๋ค`)
        // .addField(`**>** ${prefix}๊ฒฝ๊ณ ํ์ธ <์ ์ >`, `์ ์ ์ ๊ฒฝ๊ณ ๋ฅผ ํ์ธํฉ๋๋ค`)
        .addField(`**>** ${prefix}์ญํ ์์ฑ <์ด๋ฆ> <HEX COLOR>`, `์ญํ ์ ์์ฑํฉ๋๋ค`)
        .addField(`**>** ${prefix}์ญํ ์ญ์  <์ญํ >`, `์ญํ ์ ์ญ์ ํฉ๋๋ค`)
        .addField(`**>** ${prefix}์ญํ ์ง๊ธ <์ ์ > <์ญํ >`, `์ ์ ์๊ฒ ์ญํ ์ ์ค๋๋ค`)
        .addField(`**>** ${prefix}์ญํ ํ์ <์ ์ > <์ญํ >`, `์ ์ ์๊ฒ์ ์ญํ ์ ๋บ์ต๋๋ค`)
        .addField(`**>** ${prefix}๊ณต์ง <๋ด์ฉ>`, `DM์ผ๋ก ๊ณต์ง๋ฅผ ๋ณด๋๋๋ค`)
        // .addField(`**>** ${prefix}ํฐ์ผ`, `ํฐ์ผ์ ์์ฑํฉ๋๋ค`)
        .setImage(img2)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const InfoEmbed = new Discord.MessageEmbed()
        .setAuthor(`๐${prefix}+ ๋ช๋ น์ด๐`, img)
        .setThumbnail(img)
        .addField(`**>** ${prefix}์๋ฒ์ ๋ณด`, `์๋ฒ์ ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}์ ์ ์ ๋ณด <๋ฉ์>`, `์ ์ ์ ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}๋ด์ ๋ณด`, `๋ด์ ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}์ฝ๋ก๋`, `์ฝ๋ก๋ ์ ๋ณด ํ์ํ๊ธฐ`) //-API ํด๊ฒฐํ๊ธฐ
        .setImage(img2)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const TerrorEmbed = new Discord.MessageEmbed()
            .setAuthor(`๐${prefix}+ ๋ช๋ น์ด๐`, img)
            .setThumbnail(img)
            .addField(`**>** ${prefix}๋๋ฐฐ <์ซ์> <๋ด์ฉ>`, `์ฑ๋์ <์ซ์>๋ฒ๋งํผ ๋๋ฐฐํ๊ธฐ`)
            .addField(`**>** ${prefix}์ญํ ์ฌ์ญ์ `, `๋ชจ๋  ์ญํ ์ ์ญ์ ํ๊ธฐ`)
            // .addField(`**>** ${prefix}์ญํ ํ๋ฌ`, `์ญํ ์ ์์ฑํด ํ๋ฌํ๊ธฐ`)
            // .addField(`**>** ${prefix}์ด๋๋ฏผ์ฃผ๊ธฐ`, `๋ชจ๋  ์ฌ๋์๊ฒ ๊ด๋ฆฌ์์ฃผ๊ธฐ`)
            // .addField(`**>** ${prefix}์๋ฒ์ด๋ฆ๋ฐ๊พธ๊ธฐ <์ด๋ฆ>`, `์๋ฒ์ ์ด๋ฆ์ ๋ฐ๊พธ๊ธฐ`)
            // .addField(`**>** ${prefix}๋ฐ์ <์ด๋ชจ์ง>`, `์ด๋ชจ์ง๋ก ๋ฐ์๋ฌ๊ธฐ`)
            // .addField(`**>** ${prefix}๋ฐ์ ๋ฌด์ง๊ฐ`, `๋ฌด์ง๊ฐํํธ๋ก ๋ฐ์๋ฌ๊ธฐ`)
            // .addField(`**>** ${prefix}์์น์ถ์ `, `์์ดํผ๋ก ์์น ์์๋ด๊ธฐ`)
            // .addField(`**>** ${prefix}์ฑ๋์ญ์ `, `์ฑ๋์ ๋ชจ๋ ์ญ์ ํ๊ธฐ`)
            // .addField(`**>** ${prefix}์ฑ๋์ด๋ฆ๋ฐ๊พธ๊ธฐ`, `์ฑ๋์ ์ด๋ฆ์ ๋ฐ๊พธ๊ธฐ`)
            // .addField(`**>** ${prefix}์ฑ๋ํ๋ฌ`, `์ฑ๋์ ์์ฑํด ํ๋ฌํ๊ธฐ`)~
            // .addField(`**>** ${prefix}์ฌ๋ <๋๋ค์>`, `๋ชจ๋  ์ฌ๋์ ๋์ ๋ฐ๊พธ๊ธฐ`)
            // .addField(`**>** ${prefix}์ฌ๋ฐด`, `๋ชจ๋  ์ฌ๋์ ๋ฐดํ๊ธฐ`)
            // .addField(`**>** ${prefix}์ฌ์ธ๋ฐด`, `๋ชจ๋  ์ฌ๋์ ์ธ๋ฐดํ๊ธฐ`)
            // .addField(`**>** ${prefix}์ฌํฅ`, `๋ชจ๋  ์ฌ๋์ ํฅํ๊ธฐ`)
            // .addField(`** **`, `** **`)
            // .addField(`**>** ${prefix}ํญํ`, `์๋ฒ๋ฅผ ํญํํฉ๋๋ค`)
            // .addField(`**>** ${prefix}ํ๋ฌ`, `์๋ฒ๋ฅผ ์ฌ๊ธฐ๋กญ๊ฒ ์กฐ์ ธ์ค๋๋ค`)
            .setImage(img2)
            .setFooter(`${owner}`, img)
            .setTimestamp()
            .setColor(`${color}`)

        const HypixelEmbed = new Discord.MessageEmbed()
        .setAuthor(`๐${prefix}+ ๋ช๋ น์ด๐`, img)
        .setThumbnail(img)
        .addField(`**>** ${prefix}๋ฒ ์ <๋๋ค์>`, `BEDWARS ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}์ค์ <๋๋ค์>`, `SKYWARS ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}๋์ผ <์ข๋ฅ> <๋๋ค์>`, `DUELS ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}ํฐ์คํฐ <๋๋ค์>`, `TNT GAMES ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}์ ์ฑ <๋๋ค์>`, `UHC ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}์คํผ๋์ ์ฑ <๋๋ค์>`, `SPEED UHC ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}๋น๋๋ฐฐํ <๋๋ค์>`, `BUILD BATTLE ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}๋น๋ฆฌ์น <๋๋ค์>`, `BLITZ SURVIVAL ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}์ฝฅ์คํฌ <๋๋ค์>`, `COPS AND CRIMES ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}๋ฉ์ <๋๋ค์>`, `MEGAWALLS ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}๋จธ๋ <๋๋ค์>`, `MURDER MYSTERY ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}๋ฑํ์ด์ด <๋๋ค์>`, `VAMPIRE Z ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}์ค๋งค์ <๋๋ค์>`, `SMASH HEROS ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}์์น๋`, `WATCHDOG ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}๊ธธ๋ <๋๋ค์>`, `๊ธธ๋ ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}ํ๋กํ <๋๋ค์>`, `ํ๋กํ ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}๋๋ณ <๋๋ค์>`, `๋๋ณ ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}์๋ฒ <๋๋ค์>`, `์๋ฒ ์ ๋ณด ํ์ํ๊ธฐ`)
        .addField(`**>** ${prefix}uuid <๋๋ค์>`, `UUID ์ ๋ณด ํ์ํ๊ธฐ`)

        .setImage(img2)
        .setFooter(`${owner}`, img)
        .setTimestamp()
        .setColor(`${color}`)

        const OtherEmbed = new Discord.MessageEmbed()
            .setAuthor(`๐${prefix}+ ๋ช๋ น์ด๐`, img)
            .setThumbnail(img)
            // .addField(`**>** ${prefix}๊ณ์ฐ <์>`, `์์ ๊ณ์ฐํ๊ธฐ(์ฌ์น์ฐ์ฐ)`)
            // .addField(`**>** ${prefix}๊ณต๋ฐฑ`, `๊ณต๋ฐฑ ๋ฉ์์ง ๋ณด๋ด๊ธฐ`) - ** **
            // .addField(`**>** ${prefix}๋ํธ๋ก <๊ฐ์>`, `๋๋ค ๋ํธ๋ก ๋ณด๋ด๊ธฐ`)
            // .addField(`**>** ${prefix}๋๋ฐ`, `๋๋ฐํ๊ธฐ(์ฌ๋กฏ๋๋ฐ)`)
            // .addField(`**>** ${prefix}๋ก๊ณ `, `๋ก๊ณ  ๋ณด๋ด๊ธฐ`)
            // .addField(`**>** ${prefix}๋งคํฌ๋ก <์ข๋ฅ>`, `๋งคํฌ๋ก ๊ธฐ๋ฅ(ํฌ์, ๋ง๋ฅ, ๋ฒํ)`)
            .addField(`**>** ${prefix}๋ฌธ์`, `๋๋ค ๋ฌธ์ ๋ณด๋ด๊ธฐ`)
            .addField(`**>** ${prefix}์ฃผ์ฌ์ <์ซ์> <์ต๋๊ฐ>`, `<์ซ์>๋งํผ์ฃผ์ฌ์ ๊ตด๋ฆฌ๊ธฐ`)
            // .addField(`**>** ${prefix}๋ฒ์ญ <์ธ์ด> <๋ฉ์์ง>`, `๋ฉ์์ง๋ฅผ ์ ํํ ์ธ์ด๋ก ๋ฒ์ญํ๊ธฐ`)
            // .addField(`**>** ${prefix}์์คํค <์์ด๋ฉ์์ง>`, `์์คํค ๋ฉ์์ง๋ก ๋ฐ๊พธ๊ธฐ`)
            // .addField(`**>** ${prefix}์ํ์`, `์ํ์ ํ์ํ๊ธฐ`)
            // .addField(`**>** ${prefix}ํด๋ฆฌ์ด`, `์ฑํ์ ์ฒญ์ํ๊ธฐ`)
            // .addField(`**>** ${prefix}ํ ํฐ <์ ์ >`, `๋๋ค ํ ํฐ ํ์ํ๊ธฐ`)
            // .addField(`**>** ${prefix}ํฌํ`, `ํฌํ ๋ฉ์์ง ๋ง๋ค๊ธฐ`)
            // .addField(`**>** ${prefix}ํ์ด`, `ํ์ด ๊ฐ ํ์ํ๊ธฐ`)
            .addField(`**>** ${prefix}ํ`, `ํ์ ํ์ํ๊ธฐ(ms ๋จ์)`)
            .setImage(img2)
            .setFooter(`${owner}`, img)
            .setTimestamp()
            .setColor(`${color}`)


        if(category == `๊ด๋ฆฌ`) 
        {
            try
            {
                message.author.send(ManageEmbed)
                message.channel.send(Embed) 
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                message.channel.send(ManageEmbed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            catch(e)
            {
                message.channel.send(Embed2)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                console.error(e)
            }
        }
        else if(category == `์ ๋ณด`) 
        {
            try
            {
                message.author.send(InfoEmbed)
                message.channel.send(Embed) 
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                message.channel.send(InfoEmbed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            catch(e)
            {
                message.channel.send(Embed2)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                console.error(e)
            }
        }
        else if(category == `ํ๋ฌ`) 
        {
            try
            {
                message.author.send(TerrorEmbed)
                message.channel.send(Embed) 
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                message.channel.send(TerrorEmbed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            catch(e)
            {
                message.channel.send(Embed2)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                console.error(e)
            }


        }
        else if(category == `ํํฝ`) 
        {
            try
            {
                message.author.send(HypixelEmbed)
                message.channel.send(Embed) 
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                message.channel.send(HypixelEmbed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            catch(e)
            {
                message.channel.send(Embed2)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                console.error(e)
            }


        }
        else if(category == `๊ธฐํ`) 
        {
            try
            {
                message.author.send(OtherEmbed)
                message.channel.send(Embed) 
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                message.channel.send(OtherEmbed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            catch(e)
            {
                message.channel.send(Embed2)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                console.error(e)
            }
            
        }
        else //์ ๋ก์ผ ๋ช๋ น์ด
        {
            try
            {
                message.author.send(MainEmbed)
                message.channel.send(Embed) 
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                message.channel.send(MainEmbed)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
            }
            catch(e)
            {
                message.channel.send(Embed2)
                .then(msg => {setTimeout(() => msg.delete(), 3000)})
                console.error(e)
            }

        }                
    }
};