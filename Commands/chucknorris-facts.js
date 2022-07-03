/* 
Trigger: !chuck
Description: Command makes a request to the chucknorris.io API for a random Chuck Norris Fact

 */

$(eval jokeString = decodeURIComponent("$(querystring $(urlfetch json https://api.chucknorris.io/jokes/random))"); try{joke = JSON.parse(jokeString); (joke.value || `Unable to parse joke: ${jokeString}`).substr(0,400)}catch(e){`Unable to parse joke: ${e.message}: ${jokeString}`.substr(0,400)})	