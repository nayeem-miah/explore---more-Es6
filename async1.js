const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};

myLoader()
  .then((data) => console.log("resolve data", data))
  .catch((err) => console.log("reject value is ", err));

fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

async function loadData () {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}

const taskLoader =async () =>{
    const res = await  fetch('url');
    const data = await res.json();
    console.log(data)
}

loadData();
