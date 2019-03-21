function carregaInformacoes() {
    var data = new Date();
    var dias = new Array('Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado');
    var meses = new Array('Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho',
        'Agosto','Setembro','Outubro','Novembro','Dezembro');
    var dia     = data.getDate();               // 1-31
    var mes     = meses[data.getMonth()];       // 0-11 (zero=janeiro)
    var ano4    = data.getFullYear();           // 4 dígitos
    var dataCompleta = dia + ' de ' + (mes) + ' de ' + ano4;
    document.getElementById('dataAtual').innerHTML = '<b>'+dias[data.getDay()]+', '+dataCompleta+'<b>';
}

function chamaFuncoes() {
    LimpaCampos();
}

function LimpaCampos() {
    document.getElementById('btnReset').click();
}