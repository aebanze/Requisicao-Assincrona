//verificar se a pagina toda ja foi carregada
$(document).ready( function(){
    //disparar um evento apos clicar um botao
    $('.btn_load').click(function(){
        //pegar parte do path do ficheiro desejado
        var caminho = this.id;
        //concatenar o path com a extensao .html
        caminho = caminho+'.html';
        
        //fazer a requisição assincrona atraves do ajax
        $.ajax({
            //passando o path para a variavel url
            url: caminho,
            //caso a requisção seja um sucesso
            success: function(data){
                //passa-se o conteudo retornado pelo "data" para a div #conteudo
                $("#conteudo").html(data);
            },
            //acções no momento de espera
            beforeSend: function(){

            },
            //acções após a conclusão da requisição
            complete: function(){

            }
        });
    });
});