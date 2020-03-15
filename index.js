const TgBot = require('node-telegram-bot-api');

const token = '1141734518:AAHMSKIHhN2qrtK3armAzaOoDJkqIsT2NEM';

const bot = new TgBot(token, {polling: true});

// --------Commands--------
{
  bot.onText(/\/echo (.+)/, (msg, match) => {
    const fromId = msg.from.id;
    const resp = match[1];
    bot.sendMessage(fromId, resp);
  });

  bot.onText(/givmecat/, (msg) => {
    const chatId = msg.chat.id;
    const photo = "./img/cat.png";
    bot.sendPhoto(chatId, photo, { caption: "Coolcat" });
  });

  bot.onText(/scaryme/, (msg) => {
    const chatId = msg.chat.id;
    const photo = './img/savka.png';
    const firstName = msg.from.first_name;
    bot.sendPhoto(chatId, photo, { caption: `${firstName}, change your pants` });
  });
}

// --------OnMessage--------
{
  bot.on('message', (msg)=>{
    const chatId = msg.chat.id;
    const userFirstName = msg.from.first_name;
    const msgText = msg.text.toString().toLowerCase();

    if (msgText.includes("шо ви піськи")) {
      bot.sendMessage(chatId, `${userFirstName}, сама ти піська`);
    }

    if (
      msgText.includes("добраніч") ||
      msgText.includes("солодких снів") ||
      msgText.includes("надобраніч") ||
      msgText.includes("на добраніч")
    ) {
      bot.sendPhoto(chatId, "./img/goodnight.jpg");
    }

  })
}