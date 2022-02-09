const wrap = document.querySelector('.wrapper');

const line = document.querySelector('.line');

const info = document.querySelector('.info p');

wrap.addEventListener('click', (e) => {
    let width = e.clientX
    console.log(width)
    lineMove(width)
})

function lineMove(w) {
    let num = w - 6
    line.style.width = num + 'px';
    calculations(num)
}

function calculations(n) {
    let size = n / 43.4
    console.log(size)
    let num = size.toFixed(1)
    showNum(num)
}

function showNum(n) {
    info.innerText = n + ' см'
}









































// let inpChartList = []

// let listCityArray = []


// inp.oninput = function() {
//     let inpValue = inp.value
//     for(let i =0; i< inpValue.length; i++) {
//         inpChartList.push(inpValue[i]);
//     }
//     serchCart(inpValue)
//     inpChartList = []
//     console.log(inpChartList)
// }

// listCity.forEach((nameCity) => {
//     listCityArray.push(nameCity.split(''))
// })

// function serchCart(chart) {
//     let li = document.querySelectorAll('.city-list ul li')
//     for(let i =0; i < li.length; i++) {
//         li[i].remove()
//     }
//     listCity = []
//     for(let i = 0; i < listCityArray.length; i++) {
//         if(listCityArray[i].includes(chart)) {
//             listCity.push(listCityArray[i].join(''))
//         }
//     }
//     newList()
// }

// function newList() {
//     for(let i = 0; i < listCity.length; i++) {
//         let li = document.createElement('li')
//         li.innerHTML = listCity[i];
//         city.append(li)
//     }
// }

// newList()




