/* 
Trigger: im
Description: Anytime a user uses starts a chat message with the keyword "i'm" NightBot wil unleash the ultimate dad joke, "Hi <What they wrote>>, I am NightBot"
This version will also give the user a lashing for not using proper punctuation.
This version also enables you to target a specific user with an extra Zinger added to the end, i.e. "Hi <What they wrote>>, I am NightBot. And You Can Not Stop Me!"

Custom Variables: 
targetString = "FriendUN" <- Zinger Target, This is case sensitive
zingString = "Message" <- Message to add after the "I am NightBot."
 */


$(eval tgtStg="FriendUN"; zStg=" And You Can Not Stop Me"; oStg="Hi, "; qStg=(decodeURIComponent("$(querystring $(query))") || decodeURIComponent("$(querystring $(user))")).split(" "); nbStg=", I am NightBot…Now learn to use proper punctuation!"; meStg = "$(user)"; try{tLStg=oStg+qStg[0]+nbStg; if(meStg == tgtStg){tLStg=tLStg+zStg}; tLStg;}catch{`@admin DadBot Broke`})
