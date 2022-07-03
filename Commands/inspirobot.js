/* 
Trigger: !inspirobot
Description: Command makes a request to the inspirobot.me API for a random InspiroBot Quote.
The request returns an image link, so it has been restricted to discord 

 */

$(eval if("$(provider)" == "discord") {decodeURIComponent("$(querystring $(urlfetch https://inspirobot.me/api?generate=true))")} else {`Error: This is a Discord Only Command`})