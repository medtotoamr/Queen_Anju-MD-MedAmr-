/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                                                                                                                         //
//________/\\\________/\\\________/\\\__/\\\\\\\\\\\\\\\__/\\\\\\\\\\\\\\\__/\\\\\_____/\\\_______________/\\\\\\\\\_____/\\\\\_____/\\\______/\\\\\\\\\\\__/\\\________/\\\____________/\\\\____________/\\\\__/\\\\\\\\\\\\____          //
// _____/\\\\/\\\\____\/\\\_______\/\\\_\/\\\///////////__\/\\\///////////__\/\\\\\\___\/\\\_____________/\\\\\\\\\\\\\__\/\\\\\\___\/\\\_____\/////\\\///__\/\\\_______\/\\\___________\/\\\\\\________/\\\\\\_\/\\\////////\\\__         //
//  ___/\\\//\////\\\__\/\\\_______\/\\\_\/\\\_____________\/\\\_____________\/\\\/\\\__\/\\\____________/\\\/////////\\\_\/\\\/\\\__\/\\\_________\/\\\_____\/\\\_______\/\\\___________\/\\\//\\\____/\\\//\\\_\/\\\______\//\\\_        //
//   __/\\\______\//\\\_\/\\\_______\/\\\_\/\\\\\\\\\\\_____\/\\\\\\\\\\\_____\/\\\//\\\_\/\\\___________\/\\\_______\/\\\_\/\\\//\\\_\/\\\_________\/\\\_____\/\\\_______\/\\\___________\/\\\\///\\\/\\\/_\/\\\_\/\\\_______\/\\\_       //
//    _\//\\\______/\\\__\/\\\_______\/\\\_\/\\\///////______\/\\\///////______\/\\\\//\\\\/\\\___________\/\\\\\\\\\\\\\\\_\/\\\\//\\\\/\\\_________\/\\\_____\/\\\_______\/\\\___________\/\\\__\///\\\/___\/\\\_\/\\\_______\/\\\_      //
//     __\///\\\\/\\\\/___\/\\\_______\/\\\_\/\\\_____________\/\\\_____________\/\\\_\//\\\/\\\___________\/\\\/////////\\\_\/\\\_\//\\\/\\\_________\/\\\_____\/\\\_______\/\\\___________\/\\\____\///_____\/\\\_\/\\\_______\/\\\_     //
//      ____\////\\\//_____\//\\\______/\\\__\/\\\_____________\/\\\_____________\/\\\__\//\\\\\\___________\/\\\_______\/\\\_\/\\\__\//\\\\\\__/\\\___\/\\\_____\//\\\______/\\\____________\/\\\_____________\/\\\_\/\\\_______/\\\__    //
//       _______\///\\\\\\___\///\\\\\\\\\/___\/\\\\\\\\\\\\\\\_\/\\\\\\\\\\\\\\\_\/\\\___\//\\\\\___________\/\\\_______\/\\\_\/\\\___\//\\\\\_\//\\\\\\\\\_______\///\\\\\\\\\/_____________\/\\\_____________\/\\\_\/\\\\\\\\\\\\/___   //
//        _________\//////______\/////////_____\///////////////__\///////////////__\///_____\/////____________\///________\///__\///_____\/////___\/////////__________\/////////_______________\///______________\///__\////////////_____  //
//                                                                                                                                                                                                                                         //
//                                           ===========================================================*CREATED BY GAMING RASH*=====================================================                                                      //
//                                                                                                                                                                                                                                         //       
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qQ8BhY5T#I5P5wPJo21XpSXXdDgtka6qwS0VUfq2FC5lrBhNElzo",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/f64326277f3adb60ed204.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLOW THEIR, Med Amr IS ALIVE...\n\nOWNER: MED AMR\n\nTHANKS FOR USING Med Amr MD\n\n> *© Med Amr ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*/n/n*> WhatsApp :* https://wa.me/212663302056",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
BOT_NUMBER: process.env.BOT_NUMBER || "212663302056",
OWNER_REACT: process.env.OWNER_REACT || "🔆",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
WC_GB: process.env.WC_GB || "true",  //To turn on or off welcome msg and goodbye msg
};

