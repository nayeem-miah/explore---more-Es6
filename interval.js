console.log(1);
console.log(2);
// setTimeout(() =>{
//     console.log(3);
// })
setTimeout(()=>{
    // console.log(3);
},4000)

console.log(4);
console.log(5);
console.log(6);

let num = 0 ;
const clockId= setInterval(() => {
    num++;
    // num += 1;
    // num= num + 1;
    if(num > 6){
        clearInterval (clockId);
    }
    // console.log(`${clockId} i love allah and muhammed ${num}`)
},2000);

let count =0;
const timeout = setTimeout(()=>{
    console.log('time out excute one time ')
} , 3000);
// clearTimeout( timeout);  stop time out 
const interval = setInterval(()=> {
    count ++;
    if(count > 5){
        clearInterval(interval);
    }
console.log(count,'run one more then or infinite time ')},3000);


//  if you stop the program 
