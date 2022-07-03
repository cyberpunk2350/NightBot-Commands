/* 
Trigger: !dadjoke
Description: Command makes a request to the icanhazdadjoke.com API for a random Dad Joke.

*/

$(eval jokeString = decodeURIComponent("$(querystring $(urlfetch json https://icanhazdadjoke.com/slack))"); try{joke = JSON.parse(jokeString); (joke&&joke.attachments&&joke.attachments[0]&&joke.attachments[0].text || `Unable to parse joke: ${jokeString}`).substr(0,400)}catch(e){`Unable to parse joke: ${e.message}: ${jokeString}`.substr(0,400)})	