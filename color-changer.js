
const btn = document.querySelector('.btn');
const span = document.querySelector('.span');

const array = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

const bgChanger = () => {
    const newArray = [];
    for (let i = 0; i < 6; i++) {
        const int = Math.floor(Math.random() * array.length)
        newArray.push(array[int])
    };
    document.body.style.backgroundColor = `#${newArray.join('')}`;
    span.innerHTML = `#${newArray.join('')}`;
}

btn.addEventListener('click', bgChanger);
