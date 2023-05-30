var input = document.getElementById("textoOriginal");
    var output = document.getElementById("textoCodificado");
    //var button = document.querySelector("button");
    //button.onclick = encriptar;

    function desencriptar(){
        var cod = input.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.getElementById("textoCodificado").value = cod;
        document.getElementById("textoOriginal").value = "";
    }

    function encriptar(){
        var cod = input.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        document.getElementById("textoCodificado").value = cod;
        document.getElementById("textoOriginal").value = "";
        //alert(cod);
    }

    function copiar(){
        var contenido = document.getElementById("textoCodificado");
        contenido.select();
        document.execCommand("copy");
        alert("Copiado");
    }
