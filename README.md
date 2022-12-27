# Requisicao-Assincrona
Requisição Assíncrona com Javascript Vanilla e jQuery


Por quê requisição assincrona?
O modelo XMLHTTPRequest suporta comunicações síncronas e assíncronas, mas, dependendo do tamanho
 do conteudo do site, as requisições síncronas podem congelar a tela, ou seja, bloquear o código 
 prejudicando assim a experiência do usuário. Com a requisição assíncrona o usuário recebe um callback
  quando os dados são recebidos, assim sendo, com a requisição assíncrona o usuário pode continuar
   a navegar pelo site normalmente enquanto a sua requisição é processada.


O objecto XMLHTTPRequest compreende os seguintes métodos:
	-open(String method, String url, String asynch): é um metodo void, onde deve se especificar 
	o metodo (GET ou POST) e dar o caminho do 		ficheiro que se pretende requisitar/chamar;
	
	-send(): esse método envia a requisição HTTP;
	
O objecto XMLHTTPRequest tem as seguintes propriedades:
	-responseText: propriedade que nos permite recuperar a informação requisitada;
	-Onreadystatechange que permite disparar um evento a cada mudança de status. Os status podem ser:
	-Código 200: requisição processada com sucesso;
	-Código 505: Erro interno do servidor;
	-Código 404: ficheiro não encontrado.
	entre outros...
	
Quanto aos readyState podemos ter os seguintes retornos:
	-0: Objecto não inicializado, ou seja, o método open() ainda não foi chamado;
	-1: Dados a ser carregados, o método send() ainda não foi chamado;
	-3: Modo interartivo, a propriedade responseText já contém dados parciais;
	-4: Operação concluida.

No directorio ./js/requisicaoAssincrona.js é feita a reqisição Assincrona com JavaScript vanilla 
e no ./js/jQueryRequisicaoAssincrona.js a requisição é feita com recurso a biblioteca jQuery, do javascript 
que vem para facilitar o processo de programação com a filosofia "write less, do more", mais sobre jQuery em jQuery.com.
