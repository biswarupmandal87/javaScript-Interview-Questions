//write a async promise function that will return promise {3,"Fail"}  
// if the input is [Promise.resolve(3),Promise.reject("Fail")]

async function processPromises(promises) {
    const results = await Promise.allSettled(promises);
    
    return results.map(res => res.status === "fulfilled" ? res.value : res.reason);
}

// Test case
const input = [Promise.resolve(3), Promise.reject("Fail")];

processPromises(input).then(result => console.log(result)); 
// Output: [3, "Fail"]
