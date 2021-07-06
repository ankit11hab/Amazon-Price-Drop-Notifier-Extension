const back = document.getElementById('back');
const times = document.getElementById('times');
var i = 0;
back.addEventListener('click', ()=>
{
    i++;
    times.innerHTML = i;
    console.log(i);
});