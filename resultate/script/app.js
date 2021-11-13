
const id = (z) => document.getElementById(z);


$(document).ready(function(){
    $('#polo').click(function(){
        id('polo').style.color='#F8BE30';
        id('up').style.color='#fff';

        id('img_back').src = '../img/bg_novo_polo.png';
        id('img_front').src = '../img/novo_polo.png';

        id('p_title').innerHTML = '<strong>POLO</strong><br/>1.0 MPI'
        id('p_desc').innerHTML = 'A PARTIR DE <strong>R$ 49.990,00</strong><br/> + TAXA <strong>0%</strong>';
    });
    $('#up').click(function(){
        id('up').style.color='#F8BE30';
        id('polo').style.color='#fff';

        id('img_back').src = '../img/bg_up.png';
        id('img_front').src = '../img/up.png';

        id('p_title').innerHTML = 'UP! MOVE'
        id('p_desc').innerHTML = 'BONÛS DE <strong>R$3.000,00</strong><br> + TAXA <strong>0%</strong>';
    });
});
