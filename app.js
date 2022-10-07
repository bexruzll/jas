let mybody = document.querySelector('body')

let myblack = document.querySelector('.dark')

let mywhite = document.querySelector('.light')

console.log(mybody, myblack, mywhite);

myblack.addEventListener('click', function(){
    mybody.classList.add('body2');
});

mywhite.addEventListener('click', function (){
    mybody.classList.remove('body2');
});



let kurs = 10859.45
let wrapperForm = document.querySelector('.form')
let dollarinput = document.querySelector('.sum')
let offinput = document.querySelector('.off')
let myclick = document.querySelector('.cli')


wrapperForm.addEventListener('submit', function(n){
    n.preventDefault()

    offinput.value = (parseFloat(dollarinput.value)*kurs).toFixed(2)
    dollarinput.value = ''
})
