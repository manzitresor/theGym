async function getState(promise) {
    const pending = 'pending'
    const PromiseRace = Promise.race([promise,pending])
    try{
      let result = await PromiseRace;
        if(result == pending) {
            return 'pending';
        } else{
            return 'fulfilled'
        }
    } catch(error) {
        return 'rejected'
    }
}

function withNoResult(promise) {
    const noResult = new Promise(r => setTimeout(r, 50, "NO_RESULT"));
    return Promise.race([promise, noResult])
  }

const p = new Promise(() => {});
const state = await withNoResult(getState(p));
console.log(state);