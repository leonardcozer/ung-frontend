$(document).ready(function () {

    $("#formContato").submit(function (e) {
        e.preventDefault();

        /*
        const dados = {
            nome: $("input[name='nome']").val(),
            email: $("input[name='email']").val(),
            telefone: $("input[name='telefone']").val(),
            mensagem: $("textarea[name='mensagem']").val()
        };

        $.ajax({
            url: "http://172.26.123.157:1000/api/v1/contato/",
            type: "POST",
            data: JSON.stringify(dados),
            contentType: "application/json",
            dataType: "json",
            success: function (response) {
                alert("Enviado com sucesso!");
                console.log(response);
            },
            error: function (xhr) {
                alert("Erro ao enviar!");
                console.log(xhr.responseText);
            }
        });
        */

        alert("Formulário enviado com sucesso!");
    });

});