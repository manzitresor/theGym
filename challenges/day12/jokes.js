async function sayJoke(apiUrl, jokeId){
    const resp = await fetch(apiUrl);
    const data = await resp.json();
    const jokes = data.jokes
    
    if(!jokes) {
        throw new Error(`No jokes at url: ${apiUrl}`)
    }

    const jokeById = jokes.find((joke) => joke.id == jokeId);
    if(!jokeById) {
      throw new Error(`No jokes found id: ${jokeId}`)
      }

    return {
    saySetup: () => jokeById.setup,
    sayPunchLine: ()=> jokeById.punchLine
    }
}



//Test
/*
// Try TDD
// See description for example test data
const asyncTime = 500;
describe('Bad Christmas jokes', asyncTime, () => {
  const url = jokesUrl;
  
  // Just a starting point to test async functions
  it('say the setup line', async (done) => {
    const joke = await sayJoke(url, 101);
    Test.assertEquals(joke.saySetup(), "Who is Santa's favorite singer?");
    done();
  });
    
});

*/