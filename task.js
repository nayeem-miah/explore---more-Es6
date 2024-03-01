// task 1------------------------------------------------------>
//  1---------reply 5 s late-------------->

setTimeout(()=>{
    // console.log('reply 5 s late :','hello Nayeem');
},5000);


//  2----------------show output name -------------->


// function delayedGreeting(name, time){
//     setTimeout(() => {
//         console.log('name is ',name, 'time is ',time)
//     }, time);
// }
// delayedGreeting('Alice',2000);

const delayedGreeting=(name, time)=>{
    setTimeout(() => {
        console.log('hello ', name, '!' )
    }, time)
}
// delayedGreeting('Alice',2000);
// delayedGreeting('Babor',4000);

// ---------------------------------------------------------->
// task 2---------------------------->


function taskJoke() {
    return 'Why does not semantics trust?';
}

let count = 0;
const jockInterval = setInterval(() => {
    count++;
    if (count > 4) {
        clearInterval(jockInterval);
    }

    console.log(taskJoke());
}, 2000);


