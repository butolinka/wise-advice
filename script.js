const button=document.querySelector('.btn');
const par=document.querySelector('.par');
const wisdomes=["Здоровый сон не только продлевает жизнь, но и сокращает рабочий день.",
"Занятие ерундой на рабочем месте развивает боковое зрение, слух и бдительность!",
"Если руки золотые, то неважно, откуда они растут.",
"Обходя разложенные грабли, вы теряете драгоценный ОПЫТ!!!",
"Налоговый инспектор — это такой человек, который всегда приходит на выручку.",
"Сколько мусорное ведро ни утрамбовывай — выносить все равно придется.",
"Грех предаваться унынию, когда есть другие грехи!",
"Поел гречу - вымой тарелку сразу."];
button.addEventListener('click', function(){
let randomWisdome=wisdomes[Math.floor(Math.random()*wisdomes.length)];
par.style.display='block';
par.textContent=randomWisdome;
})
