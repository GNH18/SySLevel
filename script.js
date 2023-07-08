let nivel = 1;
let xpatual = 0;
let xpteto = 10;


function action(){

    while(nivel < 10){
        if(xpatual < xpteto){
            break;
        }
        if(xpatual >= xpteto){
            xpteto = xpteto + xpteto / 100 * 50;
        }
        nivel++;
    };

    let a = document.getElementById('nivelinner').innerHTML = nivel;
    let b = document.getElementById('xpinner').innerHTML = xpatual + '/' + xpteto.toFixed(0);

};

function mais(){
    let add = action(xpatual++);
};
function zerar(){
    nivel = 1;
    xpatual = 0;
    xpteto = 10;
    let a = document.getElementById('nivelinner').innerHTML = nivel;
    let b = document.getElementById('xpinner').innerHTML = xpatual + '/' + xpteto;
}
