function criar(el) {
    var resultOne = verificaEmail();
    var resultTwo = comparaData();

    if (resultOne == true && resultTwo == true) {
        $(el).prop("type", "submit");
        $(el).submit();
    }
}

function verificaEmail() {
    var email = $("#email").val();
    if (email !== "") {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var response = filter.test(email)
        if (response == false) {
            alert('Email do Organizador/Solicitante INVÁLIDO. Verifique!');
            return false;
        }
    }
    return true;
}

function comparaData() {
    // Compara data inicial com final
    dateTimeInicial = $("input[id='dataInicialRazor']");

    if (dateTimeInicial.length > 1) {
        var result = verificaData();
        if (result == false) {
            result == false;
        } else {
            result = true;
            $(dateTimeInicial).each(function () {
                if ($(this).val() != "") {
                    dateTimeFinal = $(this).parents(".row").find("input[id='dataFinalRazor']").val();
                    dataFim = dateTimeFinal.split(/:| |\//);
                    dataFim = new Date(dataFim[2], dataFim[1] - 1, dataFim[0], dataFim[3], dataFim[4]);
                    dataInicio = $(this).val().split(/:| |\//);
                    dataInicio = new Date(dataInicio[2], dataInicio[1] - 1, dataInicio[0], dataInicio[3], dataInicio[4]);
                    if (dataInicio > dataFim) {
                        alert("Data/Hora Final não pode ser menor do que a Inicial!");
                        $(this).parents(".row").find("input[id='dataFinalRazor']").val("");
                        $(this).parents(".row").find("input[id='dataFinalRazor']").css("background-color", "rgb(255, 223, 223)");
                        $(this).parents(".control-group").css("border", "3px solid #ff8181");
                        result = false;
                    }
                }
            })
        }
    }
    if (result == false) {
        return false;
    } else {
        return true;
    }
}

function verificaData() {
    var re = /^(\d{1,2})\/(\d{1,2})\/(\d{4}) (\d{1,2}):(\d{2})$/;
    var anoMaisUm = new Date().getFullYear() + 1;
    var retorno;
    dateTimes = $(".dataHora");

    $(dateTimes).each(function (i, element) {
        console.log(element.value);
        if (element.value != "") {
            valor = $(this).val();

            if (regs = valor.match(re)) {
                // dia entre 1 e 31
                if (regs[1] < 1 || regs[1] > 31) {
                    alert("Valor inválido para 'Dia': " + regs[1]);
                    $(this).css("background-color", "rgb(255, 223, 223)");
                    $(this).parents(".control-group").css("border", "3px solid #ff8181");
                    retorno = false;
                } else
                    // mês entre 1 e 12
                    if (regs[2] < 1 || regs[2] > 12) {
                        alert("Valor inválido para 'Mês': " + regs[2]);
                        $(this).css("background-color", "rgb(255, 223, 223)");
                        $(this).parents(".control-group").css("border", "3px solid #ff8181");
                        retorno = false;
                    } else
                        // ano entre 2018 e ano atual +1
                        if (regs[3] < 2018 || regs[3] > anoMaisUm) {
                            alert("Valor inválido para 'Ano': " + regs[3]);
                            $(this).css("background-color", "rgb(255, 223, 223)");
                            $(this).parents(".control-group").css("border", "3px solid #ff8181");
                            retorno = false;
                        } else
                            // hora entre 00 e 23
                            if (regs[4] > 23) {
                                alert("Valor inválido para 'Hora': " + regs[4]);
                                $(this).css("background-color", "rgb(255, 223, 223)");
                                $(this).parents(".control-group").css("border", "3px solid #ff8181");
                                retorno = false;
                            } else
                                // minuto entre 00 e 59
                                if (regs[5] > 59) {
                                    alert("Valor inválido para 'Minuto': " + regs[5]);
                                    $(this).css("background-color", "rgb(255, 223, 223)");
                                    $(this).parents(".control-group").css("border", "3px solid #ff8181");
                                    retorno = false;
                                } else {

                                    $(this).css("background-color", "");
                                    $(this).parents(".control-group").css("border", "0px solid rgb(255, 255, 255)");
                                }
            }
        }
    })
    if (retorno == false) {
        return false;
    } else {
        return true;
    }
}

// Formata em DateTime (Evento)
function gerarDataHoraInicial() {
    var data = "";
    data = $('#dataIniEvento').val();
    var hora = "";
    if ($('#horaIniEvento').val() == "") {
        $('#horaIniEvento').val('00:00');
        hora = "00:00";
    } else {
        hora = $('#horaIniEvento').val();
    }
    var dataHora = data + " " + hora;
    // console.log(dataHora);
    document.getElementById('DATA_INICIO').value = dataHora;

    // Validação Data Final não pode ser menor que Inicial
    var dataSelecionada = $("#dataIniEvento").val();
    var arrData = dataSelecionada.split('/');
    dataSelecionada = new Date(arrData[2], arrData[1] - 1, arrData[0]);
    var dd = dataSelecionada.getDate();
    var mm = dataSelecionada.getMonth() + 1;
    var y = dataSelecionada.getFullYear();
    var dtFormatted = new Date(y, mm - 1, dd);
    $("#dataFimEvento").datepicker("option", "minDate", dtFormatted);
}

function gerarDataHoraFinal() {
    var data = "";
    data = $('#dataFimEvento').val();
    var hora = "";
    if ($('#horaFimEvento').val() == "") {
        $('#horaFimEvento').val('23:59');
        hora = "23:59";
    } else {
        hora = $('#horaFimEvento').val();
    }
    var dataHora = data + " " + hora;
    // console.log(dataHora);
    document.getElementById('DATE_FIM').value = dataHora;
    $('#dataFimEvento').datepicker('option', 'dateFormat', 'dd/mm/yy');

    // Validação Data Final não pode ser menor que Inicial
    var dataSelecionada = $("#dataFimEvento").val();
    var arrData = dataSelecionada.split('/');
    dataSelecionada = new Date(arrData[2], arrData[1] - 1, arrData[0]);
    var dd = dataSelecionada.getDate();
    var mm = dataSelecionada.getMonth() + 1;
    var y = dataSelecionada.getFullYear();
    var dtFormatted = new Date(y, mm - 1, dd);
    $("#dataIniEvento").datepicker("option", "maxDate", dtFormatted);
}