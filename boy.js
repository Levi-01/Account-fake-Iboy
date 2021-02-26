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

//DEV ZANFANA
// ======= [ dev ZANGANA    ] ======== //
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
//devboy
boy6.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  //
  let args = message.content.split(" ").slice(1);

  if (command == config.groupnm + "6") {
    //
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
  //
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
//devboy

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

//devboy
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





/// Token lera dane ("token")
///ITTZ

boy.login("ODEyNDI5MjA2MjM1MjUwNzY5.YDAp3A.rzw-mHuPwHWHkC3f7DYbyN6fELs");
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
