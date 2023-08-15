
// export async function data(){

//     let key = process.env.REACT_API_KEY;
//     let url = `https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG?apikey=${key}`;

//     try {
//         let response = await fetch(url)
//         //will wait until the url is found, API will respond with a promise stored in response
//         let data = await response.json()
//         console.log(data) 
//         // when the response is finished then we wait for the data in response.jason that gets stored in data
//     } catch(error){
//         console.log(error)
//     }

// } 