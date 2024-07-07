const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_15_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUsXG4gICAgICAgIDc3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MixcbiAgICAgICAgMTg0LFxuICAgICAgICA2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDcwLFxuICAgICAgICA1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgMTcyLFxuICAgICAgICA0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM5LFxuICAgICAgICA1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg0LFxuICAgICAgICAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxOCxcbiAgICAgICAgNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieVdjK25aWm9oVVdiRkc3SkdaL0tpVmdpTnc3VVB0citIYnFjeWVaYk5nVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaU5OWUFLSktTNFNSRnZzWjNlS1Vwd1wiLFxuICBcInBob25lSWRcIjogXCIyM2I4ZjgwMy1iNTVlLTRkNmMtOGFlOS1jMzdiNmExODNiMzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAyNDcsXG4gICAgICA1NyxcbiAgICAgIDI0MCxcbiAgICAgIDEwNSxcbiAgICAgIDIsXG4gICAgICAyMTUsXG4gICAgICAxMDYsXG4gICAgICAyNTMsXG4gICAgICAyMjAsXG4gICAgICAxNzMsXG4gICAgICAxNzksXG4gICAgICAyMjMsXG4gICAgICAyMjgsXG4gICAgICAxNzAsXG4gICAgICAxNzYsXG4gICAgICAyNDUsXG4gICAgICAxNDEsXG4gICAgICAzOCxcbiAgICAgIDEzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMjEsXG4gICAgICAyNDksXG4gICAgICAxMyxcbiAgICAgIDE1OCxcbiAgICAgIDE1OSxcbiAgICAgIDE3OSxcbiAgICAgIDY5LFxuICAgICAgMTgzLFxuICAgICAgNDQsXG4gICAgICAxNDYsXG4gICAgICAxMzIsXG4gICAgICAxMDcsXG4gICAgICAxNTgsXG4gICAgICAxNzYsXG4gICAgICA5MixcbiAgICAgIDEyNixcbiAgICAgIDE1NyxcbiAgICAgIDg2LFxuICAgICAgMjM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTStuNEZZUS9LbXF0QVlZRGlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNckFObzJ0V3pGVy9qR0dzZEQ0ZDNTb3M3TG80RnJTNmtiRlJPaHpteHhNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxtaUkzSExQdElvU0VqVSs4SjgwaFZSZGRibVRLbDJRMUNwdEFtMXppTzg3YXZOMVJKUHAwYW8reFlQemVLMEpHNmxoM3dWbGJ2Z2pOb21YazgzL0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInMxZ3BHcitDTDBIL0xRTEVnTG1oUGRUZm5ZL1Z1azJ6NmlhSU50NTRqRkFIT3F6b2lYcml2dUJSWTlUUEZKZThraXg0SG0vMGRCNDIwdnVPZlY0d2pRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI1MDk5NjQyOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDU2NzI2NTc0ODE4MzU6MjBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MjUwOTk2NDI6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNTgxNDZcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/ HANDLERS: process.env.PREFIX  || ".",
   BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
