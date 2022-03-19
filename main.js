// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program
let panacekX = 420
let panacekY = 260

function init(){
	panacek.style.left = '420px';
    panacek.style.top = '260px';
}

function jdi(event){

	let panacek = document.querySelector("#panacek")
	console.log(event)

	if (event.key==="ArrowRight"){
		panacekX= panacekX + 10;
		panacek.style.left = panacekX + "px";

	} 
	else if (event.key==="ArrowLeft"){
		panacekX= panacekX - 10;
		panacek.style.left = panacekX + "px"

	} else if (event.key==="ArrowDown") {
		panacekY= panacekY + 10;
		panacek.style.top = panacekY + "px"

	}else if (event.key==="ArrowUp") {
		panacekY= panacekY - 10;
		panacek.style.top = panacekY + "px"
	}
}

// funkce pro pocitanni souradnic mince. Asi random math. Když panáček dojde do bounder boxu? mince, tak mince zmizí a objeví se jinde. 