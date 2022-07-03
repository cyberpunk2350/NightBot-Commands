/* 
Trigger: i'm
Description: Anytime a user uses starts a chat message with the keyword "i'm" NightBot wil unleash the ultimate dad joke, "Hi <What they wrote>>, I am NightBot"
This version also enables you to target a specific user with an extra Zinger added to the end, i.e. "Hi <What they wrote>>, I am NightBot. And You Can Not Stop Me!"

Custom Variables: 
targetString = "FriendUN" <- Zinger Target, This is case sensitive
zingString = "Message" <- Message to add after the "I am NightBot."
 */


$(eval targetString = "FriendUN"; zingString = " And You Can Not Stop Me!"; openString = "Hi, "; quoteString = (decodeURIComponent("$(querystring $(query))") || decodeURIComponent("$(querystring $(user))")).split(" "); nbString = ", I am NightBot."; meString = "$(user)"; try{theLineString = openString + quoteString[0] + nbString; if(meString == targetString){ theLineString = theLineString + zingString }; theLineString;}catch{`@admin DadBot Broke`})
