/*
* @READ_THIS For multiple forward tasks, copy this plugin and make a new one with another plugin name!!!
*/
var source = "120363223920922920@g.us,120363183792763965@g.us,120363038863538002@g.us,120363265504428761@g.us,120363280718557259@g.us" // Messages' source (SPLIT WITH COMMAS)
var target = "120363030055961127@g.us" // Messages will be sent here! (SPLIT WITH COMMAS)
let types = [
   "video",

 //  "extendedText", // remove first 2 slashes to forward large text
 //  "conversation",  // remove first 2 slashes to forward text

]
// =========================================================================
// ======================== END OF EDITABLES ===============================
// =========================================================================
let {Module} = require('../main');
// pattern: 'autoforward_1 ?(.*)',
Module({on:"message",fromMe:false},async (m)=>{
if (source.split(",").includes(m.jid)){
let mtp = Object.keys(m.data.message)[0].replace("Message","")
if (types.includes(mtp)){
if (m.data.message[Object.keys(m.data.message)[0]].caption){
let caption = m.data.message[Object.keys(m.data.message)[0]].caption
var isLink = (/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/gi).test(caption)
if (isLink) m.data.message[Object.keys(m.data.message)[0]].caption = ""
}
await m.forwardMessage(target,m.data,{contextInfo:{isForwarded:false}})
}
}
})
