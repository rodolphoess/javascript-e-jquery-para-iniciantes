//SINTAXE BÁSICA JQUERY $(seletor).ação();

/* FUNÇÕES SUPORTE */

$(function exibirMensagemDeSucesso() {
   
});

/* DIV-1 */

$(function esconderTituloQuandoCliqueBotao() {
    $('#btn-ola-mundo').click(function() {
        $('h1').hide();
    });
});

$(function aplicarCorVermelhaQuandoClicarBotao() {
    $('#btn-mudar-cor').click(function() {
        $('h1').css("color", "red");
        $('#mensagem').text("Cor alterada com sucesso.")
                      .css({padding: '5px', fontWeight: 'bold'})
                      .addClass('green') //Adiciona a classe CSS feita em arquivo importado na head ou em tag style tbm na head.
                      .fadeOut(3000);
    });
});

$(function ocultarSuavementeTextoQuandoClicarBotao() {
    $('#btn-fade-out').click(function() {
        $('h1').fadeOut();
    });
});

$(function visualizarSuavementeOTextoQuandoClicarBotao() {
    $('#btn-fade-in').click(function() {
        $('h1').fadeIn();
    });
});

$(function ocultarEVisualizarSuavementeOTextoQuandoClicarBotao() {
    $('#btn-fade-out-in').click(function() {
        $('h1').fadeOut()
               .delay(2000)
               .fadeIn();
    });
});

/* DIV-2 */

$(function aplicarCorAzulQuandoClicarBotao(){
    $('#btn-azul').click(function(){
        $('#msg-1').css("color", "blue");
    });
});

$(function aplicarCorVermelhoQuandoClicarBotao(){
    $('#btn-vermelho').click(function(){
        $('#msg-2').css("color", "red");
    });
});

$(function mudarParaCorPreta(){
    $('#btn-natural-color').click(function(){
        $('p').css("color", "black");
    });
});
