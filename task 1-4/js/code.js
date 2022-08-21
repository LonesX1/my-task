// const first = document.getElementById('first');
// const secondDiv = document.getElementsByClassName('test');
const button = document.getElementById('button')

// first.style.color = 'white';

button.onclick = () => {
    document.body.style.background = 'orange';
}

document.body.style.background = 'red';
setTimeout(() => document.body.style.background = 'green', 3000);

/*
    for (let i = 0; i <= 5; i++) {    
            let liLast = document.createElement('li');
            liLast.innerHTML = `Element ${i}`;
            if (i % 2 === 0){
                liLast.style.background = 'green'
            } else {
                liLast.style.background = 'purple'
            }
            ol.append(liLast);
    }
*/
let i = -1;

const addElement = setInterval(() => {
    i = i + 1
    let liLast = document.createElement('li');
    liLast.innerHTML = `Element ${i + 1}`;
    if (i % 2 === 0){
        liLast.style.background = 'green'
    } else {
        liLast.style.background = 'purple'
    }
    ol.append(liLast);
}, 2000)

setTimeout(() => {
    clearInterval(addElement);
}, 40000)