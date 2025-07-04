// function add(x){
//     return function(y){
//         x + y;
//     };
// }

// var ad = add(5);
// console.log(add(5));

let b="Result is ready";
console.log(b)

setTimeout(() => {
  console.log("After some time we get the result ");
});

setTimeout(()=>{
    console.log("1st");
    setTimeout(()=>{
        console.log("2nd")
        setTimeout(() => {
          console.log("3rd");
          setTimeout(() => {
            console.log("4th");
          },1000);
        },1000);
    },1000)
},1000)


var a = 10;
console.log(a);


// promise

let myPromise= new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve("I have to give treat");
    } else{
        reject("I have not to give treat");
    }
}) 

myPromise.then((res)=> console.log(res)).catch((rej)=>console.log(rej));


const handlePromise= async()=> {
    try{
        const a=await myPromise;
        console.log(a);
    }catch(err){
        console.log("Error :"+err);
    }finally{
        console.log("Completed")
    }
}

handlePromise();

const fetchdata = async()=>{
    try {
        const response = await fetch("https://dummyjson.com/product")
        console.log(response);
        if(response.ok){
            const data = await response.json();
            console.log(data);
        }
    } catch (err) {
        console.log(err);
    }
};

fetchdata();


console.log([]+[]);
console.log([]+{});
console.log({}+{});
console.log({}+[]);