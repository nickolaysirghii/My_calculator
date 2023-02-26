
let screen = document.querySelector('#window')

let namesOfTheClasses = ['#zero','#one','#two','#three','#four','#five','#six','#seven','#eigth',
'#nine','#plus','#dot','#equals','#multipli','#minus','#slash','#mc','#mp',];

for(let i = 0 ; i < namesOfTheClasses.length ; i++){
    let circle = document.querySelector(namesOfTheClasses[i]);
 
circle.addEventListener('mouseover',function(){circle.style.boxShadow = '0px 0px 3px 5px gray'});
circle.addEventListener('mouseout',function(){circle.style.boxShadow = '0px 0px 0px 0px gray'});
circle.addEventListener('mousedown',function(){circle.style.color = 'red';
screen.innerText =circle.innerText})
circle.addEventListener('mouseup',function(){circle.style.color = 'white'});
};


let somethng = document.querySelector('#one');
let somethng2 = document.querySelector('#two');
console.log(Number(somethng.innerText) +Number(somethng2.innerText));