        var httpRequest;

        function requisicao(url, destino){
            //verificando a versão do navegador e suas compatibilidades
            if(window.XMLHttpRequest){
                httpRequest = new XMLHttpRequest;
            } else if(window.ActiveXObject){
                try{
                    httpRequest = new ActiveXObject("Msxm12.XMLHTTP");

                } catch(e){
                    try {
                        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (e) {
                        alert("impossivel criar uma instancia do XMLHTTPRequest para este navegador");
                    }
                }
            }
            if(!httpRequest){
                alert("falha ao instanciar o objecto XMLHTTP");
                return false;
            }

            httpRequest.onreadystatechange = situacao;

            httpRequest.open('GET', url);
            httpRequest.send();
        }
        //verificar se a requisição está pronta ou não
        function situacao(){
            if(httpRequest.readyState == 4){
                if(httpRequest.status == 200){
                    document.getElementById('conteudo').innerHTML = httpRequest.responseText;
                }
            }
        }