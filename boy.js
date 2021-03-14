const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://spam-1-20.glitch.me/`);
}, 280000);

//
//
const Discord = require("discord.js");
const Canvas = require("canvas");
const fs = require("fs");
const cmd = require("node-cmd");
const config = require("./config.json");
const prefix = config.prefix;
//
const boy = new Discord.Client();
const boy2 = new Discord.Client();
const boy3 = new Discord.Client();
const boy4 = new Discord.Client();
const boy5 = new Discord.Client();
const boy6 = new Discord.Client();
const boy7 = new Discord.Client();
const boy8 = new Discord.Client();
const boy9 = new Discord.Client();
const boy10 = new Discord.Client();
const boy11 = new Discord.Client();
const boy12 = new Discord.Client();
const boy13 = new Discord.Client();
const boy14 = new Discord.Client();
const boy15 = new Discord.Client();
const boy16 = new Discord.Client();
const boy17 = new Discord.Client();
const boy18 = new Discord.Client();
const boy19 = new Discord.Client();
const boy20 = new Discord.Client();
//

const boy21 = new Discord.Client();
const boy22 = new Discord.Client();
const boy23 = new Discord.Client();
const boy24 = new Discord.Client();
const boy25 = new Discord.Client();
const boy26 = new Discord.Client();
const boy27 = new Discord.Client();
const boy28 = new Discord.Client();
const boy29 = new Discord.Client();
const boy30 = new Discord.Client();
const boy31 = new Discord.Client();
const boy32 = new Discord.Client();
const boy33 = new Discord.Client();
const boy34 = new Discord.Client();
const boy35 = new Discord.Client();
const boy36 = new Discord.Client();
const boy37 = new Discord.Client();
const boy38 = new Discord.Client();
const boy39 = new Discord.Client();
const boy40 = new Discord.Client();

const boy41 = new Discord.Client();
const boy42 = new Discord.Client();
const boy43 = new Discord.Client();
const boy44 = new Discord.Client();
const boy45 = new Discord.Client();
const boy46 = new Discord.Client();
const boy47 = new Discord.Client();
const boy48 = new Discord.Client();
const boy49 = new Discord.Client();
const boy50 = new Discord.Client();
const boy51 = new Discord.Client();
const boy52 = new Discord.Client();
const boy53 = new Discord.Client();
const boy54 = new Discord.Client();
const boy55 = new Discord.Client();
const boy56 = new Discord.Client();
const boy57 = new Discord.Client();
const boy58 = new Discord.Client();
const boy59 = new Discord.Client();
const boy60 = new Discord.Client();

const boy61 = new Discord.Client();
const boy62 = new Discord.Client();
const boy63 = new Discord.Client();
const boy64 = new Discord.Client();
const boy65 = new Discord.Client();
const boy66 = new Discord.Client();
const boy67 = new Discord.Client();
const boy68 = new Discord.Client();
const boy69 = new Discord.Client();
const boy70 = new Discord.Client();
const boy71 = new Discord.Client();
const boy72 = new Discord.Client();
const boy73 = new Discord.Client();
const boy74 = new Discord.Client();
const boy75 = new Discord.Client();
const boy76 = new Discord.Client();
const boy77 = new Discord.Client();
const boy78 = new Discord.Client();
const boy79 = new Discord.Client();

const boy80 = new Discord.Client();
const boy81 = new Discord.Client();
const boy82 = new Discord.Client();
const boy83 = new Discord.Client();
const boy84 = new Discord.Client();
const boy85 = new Discord.Client();
const boy86 = new Discord.Client();
const boy87 = new Discord.Client();
const boy88 = new Discord.Client();
const boy89 = new Discord.Client();
const boy90 = new Discord.Client();
const boy91 = new Discord.Client();
const boy92 = new Discord.Client();
const boy93 = new Discord.Client();
const boy94 = new Discord.Client();
const boy95= new Discord.Client();
const boy96 = new Discord.Client();
const boy97 = new Discord.Client();
const boy98 = new Discord.Client();
const boy99 = new Discord.Client();
const boy100 = new Discord.Client();

const help = `**
    IBOY
**`;
// I BOY

const err = `** \`\`\`  [ERORR] : لازم تسوي رتبة بـ اسم  \`\`\`
         \`\`  \`\` **`;

// ======= [ settings JSON   ] ======== //
const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
boy.on("message", async msg => {
  if (!msg.guild) return;
  if (msg.author.bot) return;
  if (!dinfo)
    dinfo = {
      // 
      owner: config.kahrbaaid,
      serverid: "NONE",
      channelid: "NONE", 
      timespam: "NONE",
      timestop: "NONE"
    };
  if (msg.content.startsWith(config.prefix + "setownerID")) {
    
    if (msg.channel.type == "dm")
    
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.owner = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لصاحب التوكانات __  \`${args}\`**`)
      .then(m => m.delete(5000));8
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh");
  }
  if (msg.content.startsWith(config.prefix + "setserverID")) {
    if (msg.channel.type == "dm")
      
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "IBOY"
    dinfo.serverid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لسيرفر الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "setchannelID")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.channelid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لروم الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeSpam")) {

    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع وقت الاسبام بـ الثواني **");
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timespam = args;
    await msg
      .reply(`** __ تم اضافة مدة ارسال الاسبام ب الثواني __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeStop")) {
    // جمــيع الحقوق محفوظة لدي "boy"
    if (msg.channel.type == "dm")
      return msg.reply("** ناتوانیت بە تەنها بەکاری بهێنیت .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return msg.channel.send(
        "** قم بوضع وقت توقف البوت بعد بداء الاسبام بـ الساعات **"
      );
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timestop = args;
    await msg
      .reply(`** __ تم اضافة مدة توقف الاسبام بـ الساعات  __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
}); 

boy.on("message", async message => {
  if (message.content === prefix + "reset") {
    if (!dinfo.owner.includes(message.author.id)) return; 
    dinfo.serverid = "NONE";
    dinfo.channelid = "NONE";
    dinfo.timespam = "NONE"; 
    dinfo.timestop = "NONE";
    message.channel.send(`**⚠️ restsettings , <@${dinfo.owner}>**`);
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh"); 
  }
});

// ======= [ settings JSON - END   ] ======== //


// ======= [ Reload JSON   ] ======== //
boy.on("message", async message => {
  if (message.author.id !== dinfo.owner) return;
  if (message.content === config.prefix + "reload") {
    await cmd.run("refresh");
    await message.channel.send("Done,");
  }
});
// ======= [ Reload JSON - END   ] ======== //

//DEV IBOY
// ======= [ dev IBOY    ] ======== //
boy.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 1`);
  console.log(`Hi ${boy.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy.guilds.size} " ]`);
});
boy2.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 2 `);
  console.log(`Hi ${boy2.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy2.guilds.size} " ]`);
});
boy3.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 3`);
  console.log(`Hi ${boy3.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy3.guilds.size} " ]`);
});
boy4.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 4`);
  console.log(`Hi ${boy4.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy4.guilds.size} " ]`);
});
boy5.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 5`);
  console.log(`Hi ${boy5.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy5.guilds.size} " ]`);
});
boy6.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 6`);
  console.log(`Hi ${boy6.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy6.guilds.size} " ]`);
});
boy7.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 7`);
  console.log(`Hi ${boy7.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy7.guilds.size} " ]`);
});
boy8.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 8`);
  console.log(`Hi ${boy8.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy8.guilds.size} " ]`);
});
boy9.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 9`);
  console.log(`Hi ${boy9.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy9.guilds.size} " ]`);
});
boy10.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 10`);
  console.log(`Hi ${boy10.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy10.guilds.size} " ]`);
});
boy11.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 11`);
  console.log(`Hi ${boy11.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy11.guilds.size} " ]`);
});
boy12.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 12`);
  console.log(`Hi ${boy12.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy12.guilds.size} " ]`);
});
boy13.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 13`);
  console.log(`Hi ${boy13.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy13.guilds.size} " ]`);
});
boy14.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 14`);
  console.log(`Hi ${boy14.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy14.guilds.size} " ]`);
});
boy15.on("ready", () => {
  console.log(`[boy] : ئەکاونتی15`);
  console.log(`Hi ${boy15.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy15.guilds.size} " ]`);
});
boy16.on("ready", () => {
  console.log(`[boy] : ئەکاونتی16`);
  console.log(`Hi ${boy16.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy16.guilds.size} " ]`);
});
boy17.on("ready", () => {
  console.log(`[boy] : ئەکاونتی17`);
  console.log(`Hi ${boy17.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy17.guilds.size} " ]`);
});
boy18.on("ready", () => {
  console.log(`[boy] : ئەکاونتی18`);
  console.log(`Hi ${boy18.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy18.guilds.size} " ]`);
});
boy19.on("ready", () => {
  console.log(`[boy] : ئەکاونتی19`);
  console.log(`Hi ${boy19.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy19.guilds.size} " ]`);
});
boy20.on("ready", () => {
  console.log(`[boy] : ئەکاونتی20`);
  console.log(`Hi ${boy20.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy20.guilds.size} " ]`);
});

boy21.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 21`);
  console.log(`Hi ${boy21.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy21.guilds.size} " ]`);
});
boy22.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 22 `);
  console.log(`Hi ${boy22.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy22.guilds.size} " ]`);
});
boy23.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 23`);
  console.log(`Hi ${boy23.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy23.guilds.size} " ]`);
});
boy24.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 24`);
  console.log(`Hi ${boy24.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy24.guilds.size} " ]`);
});
boy25.on("ready", () => {
  console.log(`[boy] : 2ئەکاونتی 5`);
  console.log(`Hi ${boy25.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy25.guilds.size} " ]`);
});
boy26.on("ready", () => {
  console.log(`[boy] : 2ئەکاونتی 6`);
  console.log(`Hi ${boy26.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy26.guilds.size} " ]`);
});
boy27.on("ready", () => {
  console.log(`[boy] : 2ئەکاونتی 7`);
  console.log(`Hi ${boy27.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy27.guilds.size} " ]`);
});
boy28.on("ready", () => {
  console.log(`[boy] : 2ئەکاونتی 8`);
  console.log(`Hi ${boy28.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy28.guilds.size} " ]`);
});
boy29.on("ready", () => {
  console.log(`[boy] : 2ئەکاونتی 9`);
  console.log(`Hi ${boy29.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy29.guilds.size} " ]`);
});
boy30.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 30`);
  console.log(`Hi ${boy30.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy30.guilds.size} " ]`);
});
boy31.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 31`);
  console.log(`Hi ${boy31.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy31.guilds.size} " ]`);
});
boy32.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 32`);
  console.log(`Hi ${boy32.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy32.guilds.size} " ]`);
});
boy33.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 33`);
  console.log(`Hi ${boy33.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy33.guilds.size} " ]`);
});
boy34.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 34`);
  console.log(`Hi ${boy34.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy34.guilds.size} " ]`);
});
boy35.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 35`);
  console.log(`Hi ${boy35.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy35.guilds.size} " ]`);
});
boy36.on("ready", () => {
  console.log(`[boy] : ئەکاونتی36`);
  console.log(`Hi ${boy36.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy36.guilds.size} " ]`);
});
boy37.on("ready", () => {
  console.log(`[boy] : ئەکاونتی37`);
  console.log(`Hi ${boy37.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy37.guilds.size} " ]`);
});
boy38.on("ready", () => {
  console.log(`[boy] : ئەکاونتی38`);
  console.log(`Hi ${boy38.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy38.guilds.size} " ]`);
});
boy39.on("ready", () => {
  console.log(`[boy] : ئەکاونتی39`);
  console.log(`Hi ${boy39.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy39.guilds.size} " ]`);
});
boy40.on("ready", () => {
  console.log(`[boy] : ئەکاونتی40`);
  console.log(`Hi ${boy40.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy40.guilds.size} " ]`);
});

boy41.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 41 `);
  console.log(`Hi ${boy41.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy41.guilds.size} " ]`);
});
boy42.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 42`);
  console.log(`Hi ${boy42.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy42.guilds.size} " ]`);
});
boy43.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 43`);
  console.log(`Hi ${boy43.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy43.guilds.size} " ]`);
});
boy44.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 44`);
  console.log(`Hi ${boy44.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy44.guilds.size} " ]`);
});
boy45.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 45`);
  console.log(`Hi ${boy45.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy45.guilds.size} " ]`);
});
boy46.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 46`);
  console.log(`Hi ${boy46.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy46.guilds.size} " ]`);
});
boy47.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 47`);
  console.log(`Hi ${boy47.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy47.guilds.size} " ]`);
});
boy47.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 47`);
  console.log(`Hi ${boy47.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy47.guilds.size} " ]`);
});
boy48.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 48`);
  console.log(`Hi ${boy48.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy48.guilds.size} " ]`);
});
boy49.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 49`);
  console.log(`Hi ${boy49.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy49.guilds.size} " ]`);
});
boy50.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 50`);
  console.log(`Hi ${boy50.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy50.guilds.size} " ]`);
});
boy51.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 51`);
  console.log(`Hi ${boy51.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy51.guilds.size} " ]`);
});
boy52.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 52`);
  console.log(`Hi ${boy52.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy52.guilds.size} " ]`);
});
boy53.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 53`);
  console.log(`Hi ${boy53.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy53.guilds.size} " ]`);
});
boy54.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 54`);
  console.log(`Hi ${boy54.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy54.guilds.size} " ]`);
});
boy55.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 55`);
  console.log(`Hi ${boy55.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy55.guilds.size} " ]`);
});
boy56.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 56`);
  console.log(`Hi ${boy56.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy56.guilds.size} " ]`);
});
boy57.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 57`);
  console.log(`Hi ${boy57.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy57.guilds.size} " ]`);
});
boy58.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 58`);
  console.log(`Hi ${boy58.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy58.guilds.size} " ]`);
});

boy59.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 59`);
  console.log(`Hi ${boy59.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy59.guilds.size} " ]`);
});
boy60.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 60 `);
  console.log(`Hi ${boy60.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy60.guilds.size} " ]`);
});
boy61.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 61`);
  console.log(`Hi ${boy61.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy61.guilds.size} " ]`);
});
boy62.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 62`);
  console.log(`Hi ${boy62.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy62.guilds.size} " ]`);
});
boy63.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 63`);
  console.log(`Hi ${boy63.user.tag} , This Code by : IBOY `);
  console.log(`i Have [ " ${boy63.guilds.size} " ]`);
});
boy64.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 64`);
  console.log(`Hi ${boy64.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy64.guilds.size} " ]`);
});
boy65.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 65`);
  console.log(`Hi ${boy65.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy65.guilds.size} " ]`);
});
boy66.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 66`);
  console.log(`Hi ${boy66.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy66.guilds.size} " ]`);
});
boy67.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 67 `);
  console.log(`Hi ${boy67.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy67.guilds.size} " ]`);
});
boy68.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 68`);
  console.log(`Hi ${boy68.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy68.guilds.size} " ]`);
});
boy69.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 69`);
  console.log(`Hi ${boy69.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy69.guilds.size} " ]`);
});
boy70.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 70`);
  console.log(`Hi ${boy70.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy70.guilds.size} " ]`);
});
boy71.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 71`);
  console.log(`Hi ${boy71.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy71.guilds.size} " ]`);
});
boy72.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 72`);
  console.log(`Hi ${boy72.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy72.guilds.size} " ]`);
});
boy73.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 73`);
  console.log(`Hi ${boy73.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy73.guilds.size} " ]`);
});
boy74.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 74 `);
  console.log(`Hi ${boy74.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy74.guilds.size} " ]`);
});
boy75.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 75 `);
  console.log(`Hi ${boy75.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy75.guilds.size} " ]`);
});
boy76.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 76 `);
  console.log(`Hi ${boy76.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy76.guilds.size} " ]`);
});
boy77.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 77 `);
  console.log(`Hi ${boy77.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy77.guilds.size} " ]`);
});
boy78.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 78 `);
  console.log(`Hi ${boy78.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy78.guilds.size} " ]`);
});

boy79.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 79 `);
  console.log(`Hi ${boy79.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy79.guilds.size} " ]`);
});
boy80.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 80`);
  console.log(`Hi ${boy80.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy80.guilds.size} " ]`);
});
boy81.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 81`);
  console.log(`Hi ${boy81.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy81.guilds.size} " ]`);
});
boy82.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 82`);
  console.log(`Hi ${boy82.user.tag} , This Code by : IBOY `);
  console.log(`i Have [ " ${boy82.guilds.size} " ]`);
});
boy83.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 83`);
  console.log(`Hi ${boy83.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy83.guilds.size} " ]`);
});
boy84.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 84`);
  console.log(`Hi ${boy84.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy84.guilds.size} " ]`);
});
boy85.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 85`);
  console.log(`Hi ${boy85.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy85.guilds.size} " ]`);
});
boy86.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 86 `);
  console.log(`Hi ${boy86.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy86.guilds.size} " ]`);
});
boy87.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 87`);
  console.log(`Hi ${boy87.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy87.guilds.size} " ]`);
});
boy88.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 88`);
  console.log(`Hi ${boy88.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy88.guilds.size} " ]`);
});
boy89.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 89`);
  console.log(`Hi ${boy89.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy89.guilds.size} " ]`);
});

boy90.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 90 `);
  console.log(`Hi ${boy90.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy90.guilds.size} " ]`);
});
boy91.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 91`);
  console.log(`Hi ${boy91.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy91.guilds.size} " ]`);
});
boy92.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 92`);
  console.log(`Hi ${boy92.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy92.guilds.size} " ]`);
});
boy93.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 93`);
  console.log(`Hi ${boy93.user.tag} , This Code by : IBOY `);
  console.log(`i Have [ " ${boy93.guilds.size} " ]`);
});
boy94.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 94`);
  console.log(`Hi ${boy94.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy94.guilds.size} " ]`);
});
boy95.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 95`);
  console.log(`Hi ${boy95.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy95.guilds.size} " ]`);
});
boy96.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 96`);
  console.log(`Hi ${boy96.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy96.guilds.size} " ]`);
});
boy97.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 97 `);
  console.log(`Hi ${boy97.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy97.guilds.size} " ]`);
});
boy98.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 98`);
  console.log(`Hi ${boy98.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy98.guilds.size} " ]`);
});
boy99.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 99`);
  console.log(`Hi ${boy99.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy99.guilds.size} " ]`);
});
boy100.on("ready", () => {
  console.log(`[boy] : ئەکاونتی 100`);
  console.log(`Hi ${boy100.user.tag} , This Code by : IBOY `);
  console.log(`i Have  [ " ${boy100.guilds.size} " ]`);
});

// [ dev boy ]  //
const iboyDEV = require("request");
const invitecode = config.invite;
boy.on("ready", () => {
  console.log(`[BOT] ${boy.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN }
  });
});

boy2.on("ready", () => {
  console.log(`[BOT] ${boy2.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

boy3.on("ready", () => {
  console.log(`[BOT] ${boy3.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

boy4.on("ready", () => {
  console.log(`[BOT] ${boy4.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

boy5.on("ready", () => {
  console.log(`[BOT] ${boy5.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});

boy6.on("ready", () => {
  console.log(`[BOT] ${boy6.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN6 }
  });
});

boy7.on("ready", () => {
  console.log(`[BOT] ${boy7.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN7 }
  });
});

boy8.on("ready", () => {
  console.log(`[BOT] ${boy8.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN8 }
  });
});

boy9.on("ready", () => {
  console.log(`[BOT] ${boy9.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN9 }
  });
});

boy10.on("ready", () => {
  console.log(`[BOT] ${boy10.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN10 }
  });
});

boy11.on("ready", () => {
  console.log(`[BOT] ${boy11.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN11 }
  });
});

boy12.on("ready", () => {
  console.log(`[BOT] ${boy12.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN12 }
  });
});

boy13.on("ready", () => {
  console.log(`[BOT] ${boy13.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN13 }
  });
});

boy14.on("ready", () => {
  console.log(`[BOT] ${boy14.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN14 }
  });
});

boy15.on("ready", () => {
  console.log(`[BOT] ${boy15.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN15 }
  });
});

boy16.on("ready", () => {
  console.log(`[BOT] ${boy16.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN16 }
  });
});

boy17.on("ready", () => {
  console.log(`[BOT] ${boy17.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN17 }
  });
});

boy18.on("ready", () => {
  console.log(`[BOT] ${boy18.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN18 }
  });
});

boy19.on("ready", () => {
  console.log(`[BOT] ${boy19.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN19 }
  });
});

boy20.on("ready", () => {
  console.log(`[BOT] ${boy20.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN20 }
  });
});

boy21.on("ready", () => {
  console.log(`[BOT] ${boy21.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

boy22.on("ready", () => {
  console.log(`[BOT] ${boy22.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

boy23.on("ready", () => {
  console.log(`[BOT] ${boy23.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

boy24.on("ready", () => {
  console.log(`[BOT] ${boy24.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});

boy25.on("ready", () => {
  console.log(`[BOT] ${boy25.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN6 }
  });
});

boy26.on("ready", () => {
  console.log(`[BOT] ${boy26.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN7 }
  });
});

boy27.on("ready", () => {
  console.log(`[BOT] ${boy27.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN8 }
  });
});

boy28.on("ready", () => {
  console.log(`[BOT] ${boy28.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN9 }
  });
});

boy29.on("ready", () => {
  console.log(`[BOT] ${boy29.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN10 }
  });
});

boy30.on("ready", () => {
  console.log(`[BOT] ${boy30.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN11 }
  });
});

boy31.on("ready", () => {
  console.log(`[BOT] ${boy31.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN12 }
  });
});

boy32.on("ready", () => {
  console.log(`[BOT] ${boy32.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN13 }
  });
});

boy33.on("ready", () => {
  console.log(`[BOT] ${boy33.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN14 }
  });
});

boy34.on("ready", () => {
  console.log(`[BOT] ${boy34.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN15 }
  });
});

boy35.on("ready", () => {
  console.log(`[BOT] ${boy35.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN16 }
  });
});

boy36.on("ready", () => {
  console.log(`[BOT] ${boy36.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN17 }
  });
});

boy37.on("ready", () => {
  console.log(`[BOT] ${boy37.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN18 }
  });
});

boy38.on("ready", () => {
  console.log(`[BOT] ${boy38.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN19 }
  });
});

boy39.on("ready", () => {
  console.log(`[BOT] ${boy39.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN20 }
  });
});

boy40.on("ready", () => {
  console.log(`[BOT] ${boy40.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

boy41.on("ready", () => {
  console.log(`[BOT] ${boy41.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

boy42.on("ready", () => {
  console.log(`[BOT] ${boy42.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

boy43.on("ready", () => {
  console.log(`[BOT] ${boy43.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});

boy44.on("ready", () => {
  console.log(`[BOT] ${boy44.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN6 }
  });
});

boy45.on("ready", () => {
  console.log(`[BOT] ${boy45.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN7 }
  });
});

boy46.on("ready", () => {
  console.log(`[BOT] ${boy46.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN8 }
  });
});

boy47.on("ready", () => {
  console.log(`[BOT] ${boy47.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN9 }
  });
});

boy48.on("ready", () => {
  console.log(`[BOT] ${boy48.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN10 }
  });
});

boy49.on("ready", () => {
  console.log(`[BOT] ${boy49.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN11 }
  });
});

boy50.on("ready", () => {
  console.log(`[BOT] ${boy50.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN12 }
  });
});

boy51.on("ready", () => {
  console.log(`[BOT] ${boy51.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN13 }
  });
});

boy52.on("ready", () => {
  console.log(`[BOT] ${boy52.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN14 }
  });
});

boy53.on("ready", () => {
  console.log(`[BOT] ${boy53.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN15 }
  });
});

boy54.on("ready", () => {
  console.log(`[BOT] ${boy54.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN16 }
  });
});

boy55.on("ready", () => {
  console.log(`[BOT] ${boy55.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN17 }
  });
});

boy56.on("ready", () => {
  console.log(`[BOT] ${boy56.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN18 }
  });
});

boy57.on("ready", () => {
  console.log(`[BOT] ${boy57.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN19 }
  });
});

boy58.on("ready", () => {
  console.log(`[BOT] ${boy58.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN20 }
  });
});

boy59.on("ready", () => {
  console.log(`[BOT] ${boy59.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

boy60.on("ready", () => {
  console.log(`[BOT] ${boy60.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

boy61.on("ready", () => {
  console.log(`[BOT] ${boy61.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

boy62.on("ready", () => {
  console.log(`[BOT] ${boy62.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});

boy63.on("ready", () => {
  console.log(`[BOT] ${boy63.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN6 }
  });
});

boy64.on("ready", () => {
  console.log(`[BOT] ${boy64.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN7 }
  });
});

boy65.on("ready", () => {
  console.log(`[BOT] ${boy65.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN8 }
  });
});

boy66.on("ready", () => {
  console.log(`[BOT] ${boy66.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN9 }
  });
});

boy67.on("ready", () => {
  console.log(`[BOT] ${boy67.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN10 }
  });
});

boy68.on("ready", () => {
  console.log(`[BOT] ${boy68.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN11 }
  });
});

boy69.on("ready", () => {
  console.log(`[BOT] ${boy69.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN12 }
  });
});

boy70.on("ready", () => {
  console.log(`[BOT] ${boy70.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN13 }
  });
});

boy71.on("ready", () => {
  console.log(`[BOT] ${boy71.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN14 }
  });
});

boy72.on("ready", () => {
  console.log(`[BOT] ${boy72.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN15 }
  });
});

boy73.on("ready", () => {
  console.log(`[BOT] ${boy73.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN16 }
  });
});

boy74.on("ready", () => {
  console.log(`[BOT] ${boy74.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN17 }
  });
});

boy75.on("ready", () => {
  console.log(`[BOT] ${boy75.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN18 }
  });
});

boy76.on("ready", () => {
  console.log(`[BOT] ${boy76.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN19 }
  });
});

boy77.on("ready", () => {
  console.log(`[BOT] ${boy77.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN20 }
  });
});

boy78.on("ready", () => {
  console.log(`[BOT] ${boy78.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

boy79.on("ready", () => {
  console.log(`[BOT] ${boy79.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

boy80.on("ready", () => {
  console.log(`[BOT] ${boy80.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

boy81.on("ready", () => {
  console.log(`[BOT] ${boy81.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});

boy82.on("ready", () => {
  console.log(`[BOT] ${boy82.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN6 }
  });
});

boy83.on("ready", () => {
  console.log(`[BOT] ${boy83.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN7 }
  });
});

boy84.on("ready", () => {
  console.log(`[BOT] ${boy84.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN8 }
  });
});

boy85.on("ready", () => {
  console.log(`[BOT] ${boy85.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN9 }
  });
});

boy86.on("ready", () => {
  console.log(`[BOT] ${boy86.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN10 }
  });
});

boy87.on("ready", () => {
  console.log(`[BOT] ${boy87.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN11 }
  });
});

boy88.on("ready", () => {
  console.log(`[BOT] ${boy88.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN12 }
  });
});

boy89.on("ready", () => {
  console.log(`[BOT] ${boy89.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN13 }
  });
});

boy90.on("ready", () => {
  console.log(`[BOT] ${boy90.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN14 }
  });
});

boy91.on("ready", () => {
  console.log(`[BOT] ${boy91.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN15 }
  });
});

boy92.on("ready", () => {
  console.log(`[BOT] ${boy92.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN16 }
  });
});

boy93.on("ready", () => {
  console.log(`[BOT] ${boy93.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN17 }
  });
});

boy94.on("ready", () => {
  console.log(`[BOT] ${boy94.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN18 }
  });
});

boy95.on("ready", () => {
  console.log(`[BOT] ${boy95.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN19 }
  });
});

boy96.on("ready", () => {
  console.log(`[BOT] ${boy96.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN20 }
  });
});

boy97.on("ready", () => {
  console.log(`[BOT] ${boy97.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

boy98.on("ready", () => {
  console.log(`[BOT] ${boy98.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

boy99.on("ready", () => {
  console.log(`[BOT] ${boy99.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

boy100.on("ready", () => {
  console.log(`[BOT] ${boy100.user.username} Ready!`);
  iboyDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});


// DONE //
// ======= [ Console LOG - END   ] ======== //

boy.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.toLowerCase() === config.prefix + "yalla") {
    message.delete(5000);
    if (!message.channel.guild) return;
    message.channel.send(help);
  }
});

// ======= [ Say MODE  ] ======== //
boy.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "1") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy2.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "2") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy3.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "3") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy4.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "4") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy5.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "5") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy6.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  
  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "6") {
    
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});


boy7.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "7") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy8.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "8") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy9.on("message", message => {
  if (message.author.bot) return; //
  if (!message.content.startsWith(config.prefix)) return;
  
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "9") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy10.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "10") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
boy11.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "11") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy12.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "12") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy13.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "13") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy14.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "14") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy15.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "15") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy16.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "16") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy17.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "17") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy18.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  //
  if (command == config.groupnm + "18") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
boy19.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //dav zangana

  if (command == config.groupnm + "19") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy"); //devIboy
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy20.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //devzangana

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length); //devzangana

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "20") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

/////////

boy21.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "21") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
boy22.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "22") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy23.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "23") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy24.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "24") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy25.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "25") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy26.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "26") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy27.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "27") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy28.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "28") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy29.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  //
  if (command == config.groupnm + "29") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
boy30.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //dav zangana

  if (command == config.groupnm + "30") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy"); //devIboy
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy31.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //devzangana

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length); //devzangana

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "31") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy32.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "32") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
boy33.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "33") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy34.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "34") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy35.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "35") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy36.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "36") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy37.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "37") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy38.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "38") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy39.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "39") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy40.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  //
  if (command == config.groupnm + "40") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
boy41.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //dav zangana

  if (command == config.groupnm + "41") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy"); //devIboy
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy42.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //devzangana

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length); //devzangana

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "42") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy43.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "43") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
boy44.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "44") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy45.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "45") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy46.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "46") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy47.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "47") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy48.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "48") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy49.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "49") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy50.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "50") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy51.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  //
  if (command == config.groupnm + "51") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
boy52.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //dav zangana

  if (command == config.groupnm + "52") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy"); //devIboy
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy53.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //devzangana

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length); //devzangana

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "53") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy54.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "54") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
boy55.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "55") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy56.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "56") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy57.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "57") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy58.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "58") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy59.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "59") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy60.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "60") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy61.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "61") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy62.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  //
  if (command == config.groupnm + "62") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
boy63.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //dav zangana

  if (command == config.groupnm + "63") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy"); //devIboy
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy64.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //devzangana

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length); //devzangana

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "64") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy65.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "65") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
boy66.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "66") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy67.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "67") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy68.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "68") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy69.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "69") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy70.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "70") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy71.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "71") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy72.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "72") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy73.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  //
  if (command == config.groupnm + "73") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy74.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "74") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
boy75.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "75") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy76.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "76") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy77.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "77") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy78.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "78") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy79.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "79") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy80.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "80") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy81.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "81") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy82.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  //
  if (command == config.groupnm + "82") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
boy83.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //dav zangana

  if (command == config.groupnm + "83") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy"); //devIboy
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy84.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //devzangana

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length); //devzangana

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "84") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
boy85.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //dav zangana

  if (command == config.groupnm + "85") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy"); //devIboy
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy86.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //devzangana

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length); //devzangana

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "86") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy87.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "87") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
boy88.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "88") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy89.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "89") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy90.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "90") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy91.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "91") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy92.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "92") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy93.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "93") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy94.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "94") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy95.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  //
  if (command == config.groupnm + "95") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000)); //
    message.channel.send(args.join("  "));
    message.delete();
  }
});

//
boy96.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1); //dav zangana

  if (command == config.groupnm + "96") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy"); //devIboy
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy97.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return; //devzangana

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length); //devzangana

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "97") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy98.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "98") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});
boy99.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "99") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

boy100.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "100") {
    if (!dinfo.owner.includes(message.author.id)) return;
    let rank = message.guild
      .member(message.author)
      .roles.find("name", "Role.boy");
    if (!rank) return message.channel.send(err).then(m => m.delete(5000));
    message.channel.send(args.join("  "));
    message.delete();
  }
});

// ======= [ Say MODE - END   ] ======== //

// ======= [ MODE - Join Server , add Friend   ] ======== //
boy.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy2.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy3.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy4.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy5.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy6.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy7.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy8.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy9.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy10.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy11.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy12.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy13.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy14.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy15.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy16.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy17.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy18.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy19.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy20.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy21.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy22.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy22.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy23.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy24.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy25.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy26.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy27.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy28.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy29.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy30.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy31.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy32.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy33.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy34.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy35.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy36.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy37.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy38.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy39.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy40.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy41.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy42.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy43.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy44.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy45.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy46.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy47.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy48.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy49.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy50.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy51.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy52.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy53.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy54.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy55.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy56.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy57.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy58.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy59.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy60.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy61.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy62.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy63.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy64.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy65.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy66.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy67.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy68.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy69.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy70.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy71.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy72.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy73.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy74.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy75.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy76.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy77.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy78.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy79.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy80.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy81.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy82.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy83.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy84.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy85.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy86.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy87.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy88.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy89.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

boy90.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy91.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy92.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy93.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy94.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy95.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy96.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy97.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy98.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy99.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});
boy100.on("message", async message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.startsWith(config.prefix + "friend")) {
    await addFriend(message.content.split(" ").slice(1)[0], message);
  } else if (message.content.startsWith(config.prefix + "join")) {
    joinServer(message.content.split(" ").slice(1)[0], message);
  } else return null;
});

        
        

// boy

async function joinServer(invite, message) {
  console.log(invite);
  require("request")(
    {
      method: "POST",
      url: `https://discordapp.com/api/v6/invites/${invite}`,
      json: true,
      headers: {
        authorization: message.client.token
      }
    },
    async (err, res, body) => {
      if (err) {
        console.log(err);
        await console.log(`[ERROR] - ${err}`);
        return;
      } else {
        if (body.message.includes("Unknown Invite"))
          return console.log("[ERROR] - Unkown Invite.");
        if (body.message.includes("banned"))
          return console.log("[ERROR] - Banned from this server.");
        await console.log(`[INFO] - Done.`);
      }
    }
  );
}

async function addFriend(id, message) {
  try {
    let user = await message.client.fetchUser(id);
    await require("request")(
      {
        url: `https://discordapp.com/api/v6/users/@me/relationships`,
        method: "POST",
        json: true,
        headers: {
          "Content-Type": "application/json",
          authorization: message.client.token
        },
        body: {
          username: user.username,
          discriminator: parseInt(user.discriminator)
        }
      },
      async (err, res, body) => {
        if (err) {
          await console.log(err);
          await console.log(`[ERROR] - ${err}`);
          return;
        } else {
          await console.log(body ? body.message : "No status message.");
          await console.log(`[INFO] - Done.`);
        }
      }
    );
  } catch (e) {
    console.log(`[ERROR] - ${e}`);
  }
}

// 

// ======= [ DEV I BOY ] ======== //
boy.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy2.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy3.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy4.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy5.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy6.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy7.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy8.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
    }
 });
boy9.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy10.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy11.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy12.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return; // cod by  "zangana"
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy13.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy14.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy15.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy16.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy17.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy18.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy19.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy20.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});

boy21.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});

boy22.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});

boy23.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy23.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy24.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy25.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy26.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy27.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy28.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
    }
 });
boy29.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy30.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy31.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy32.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return; // cod by  "zangana"
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy33.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy34.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy35.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy36.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy37.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy38.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy39.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy40.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});

boy41.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy41.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy42.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy43.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy44.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy45.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy46.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
    }
 });
boy47.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy48.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy49.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy50.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return; // cod by  "zangana"
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy51.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy52.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy53.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy54.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy55.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy56.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy57.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy58.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});

boy59.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy60.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy61.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy62.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy63.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy64.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy65.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
    }
 });
boy66.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy67.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy68.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy69.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return; // cod by  "zangana"
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy70.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy71.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy72.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy73.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy74.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy75.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy76.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy77.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});

boy78.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy79.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy80.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy81.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy82.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy83.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy84.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
    }
 });
boy85.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy86.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy87.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy88.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return; // cod by  "zangana"
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy89.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy90.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy91.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy92.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy93.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy94.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy95.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy96.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});

boy97.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy98.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy99.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});
boy100.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "voice") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("**WORK**!");
        })
        .catch(console.log);
    } else {
      message.reply(
        "`Please Join Channel First`"
      );
    }
  }
});

// 




////////

boy.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
    ///// 
  `Ready!`,
  `I BOY`,
    
    
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    boy.user.setActivity(STREAMING, {      
    type: "playing", 
    url: "https://www.twitch.tv/ninja"
    });
  }, 2000);
});


boy2.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy2.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy3.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy3.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy4.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy4.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy5.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy5.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy6.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`,`ITTZ` ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy6.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy7.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy7.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy8.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy8.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy9.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy9.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy10.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy10.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy11.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy11.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy12.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy12.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy13.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy13.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy14.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
 `بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy14.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy15.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy15.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy16.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy16.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy17.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy17.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy18.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy18.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy19.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy19.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});


boy20.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy20.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy21.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy2.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy22.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy3.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy23.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy4.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy24.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy5.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy25.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`,`ITTZ` ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy6.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy26.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy7.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy27.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy8.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy28.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy9.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy29.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy10.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy30.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy11.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy31.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy12.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy32.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy13.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy33.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
 `بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy14.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy34.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy15.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy35.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy16.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy36.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy17.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy37.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy18.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy38.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy19.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});


boy39.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy20.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy40.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy2.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy41.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy3.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy42.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy4.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy43.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy5.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy44.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`,`ITTZ` ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy6.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy45.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy7.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy46.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy8.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy47.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy9.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy48.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy10.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy49.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy11.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy50.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy12.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy51.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy13.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy52.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
 `بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy14.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy53.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy15.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy54.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy16.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy55.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy17.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy56.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy18.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy57.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy19.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});


boy58.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy20.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy59.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy2.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy60.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy3.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy61.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy4.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy62.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy5.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy63.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`,`ITTZ` ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy6.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy64.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy7.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy65.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy8.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy66.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy9.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy67.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy10.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy68.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy11.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy69.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy12.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy70.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy13.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy71.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
 `بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy14.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy72.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy15.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy73.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy16.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy74.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy17.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy75.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy18.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy76.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy19.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});


boy77.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy20.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy78.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy2.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy79.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy3.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy80.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy4.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy81.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy5.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy82.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`,`ITTZ` ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy6.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy83.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy7.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy84.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy8.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy85.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy9.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy86.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy10.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy87.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy11.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy88.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy12.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy89.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy13.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy90.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
 `بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy14.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy91.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy15.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy92.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy16.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy93.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy17.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy94.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy18.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy95.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy19.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});


boy96.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy20.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy97.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy20.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy98.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy20.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy99.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy20.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});

boy100.on("ready", () => { console.log( `Online In Servers` ); let statuses = [ 
`بــاپیرە گــەورەی بــۆتەکـــان`, `ITTZ`, ]; setInterval(function() { let STREAMING = statuses[Math.floor(Math.random() * statuses.length)]; boy20.user.setActivity(STREAMING, { type: "playing", url: "https://www.twitch.tv/ninja" }); }, 2000);});


/// Token lera dane ("token")
///ITTZ

boy.login("");
boy2.login("");
boy3.login("");
boy4.login("");          
boy5.login("");
boy6.login("");
boy7.login("");
boy8.login("");
boy9.login("");
boy10.login("");
boy11.login("");
boy12.login("");
boy13.login("");
boy14.login("");
boy15.login("");
boy16.login("");
boy17.login("");
boy18.login("");
boy19.login("");
boy20.login("");
boy21.login("");
boy22.login("");
boy23.login("");
boy24.login("");          
boy25.login("");
boy26.login("");
boy27.login("");
boy28.login("");
boy29.login("");
boy30.login("");
boy31.login("");
boy32.login("");
boy33.login("");
boy34.login("");
boy35.login("");
boy36.login("");
boy37.login("");
boy38.login("");
boy39.login("");
boy40.login("");
boy41.login("");
boy42.login("");
boy43.login("");
boy44.login("");          
boy45.login("");
boy46.login("");
boy47.login("");
boy48.login("");
boy49.login("");
boy50.login("");
boy51.login("");
boy52.login("");
boy53.login("");
boy54.login("");
boy55.login("");
boy56.login("");
boy57.login("");
boy58.login("");
boy59.login("");
boy60.login("");
boy61.login("");
boy62.login("");
boy63.login("");
boy64.login("");          
boy65.login("");
boy66.login("");
boy67.login("");
boy68.login("");
boy69.login("");
boy70.login("");
boy71.login("");
boy72.login("");
boy73.login("");
boy74.login("");
boy75.login("");
boy76.login("");
boy77.login("");
boy78.login("");
boy79.login("");
boy80.login("");
boy81.login("");
boy82.login("");
boy83.login("");
boy84.login("");          
boy85.login("");
boy86.login("");
boy87.login("");
boy88.login("");
boy89.login("");
boy90.login("");
boy91.login("");
boy92.login("");
boy93.login("");
boy94.login("");
boy95.login("");
boy96.login("");
boy97.login("");
boy98.login("");
boy99.login("");
boy100.login("");
