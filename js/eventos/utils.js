onError = function(error) {
  console.log(`Erro: ${error}`);
}

getDataDiv = function(id){
  return document.getElementById(id).parentNode.parentNode;
}

escondeDiv = function(div) {
  return div.style.display = "none";
}

criarDiv = function(id, elementoPosterior, conteudo) {
    var novaDiv = criarElemento("div",id,"form-group");
    (conteudo !== undefined) ? novaDiv.innerHTML = conteudo : "";
    var divReferencia = elementoPosterior;
    divReferencia.parentNode.insertBefore(novaDiv, divReferencia);  
    return novaDiv;
};

criarElemento = function(tag, id, classe) {
  var novoElemento = document.createElement(tag);
  novoElemento.setAttribute("id", id);
  novoElemento.setAttribute("class", classe);
  return novoElemento;
}

criaDivData = function(id,div) {
    var novaDiv = this.criarElemento("div","dia-"+String(id),"form-group data_field");
    novaDiv.innerHTML += htmlDivDataIndividual(id);
    div.appendChild(novaDiv);
}

getElemValueByName = function(NameTag) {
  return document.getElementsByName(NameTag)[0].value;
}

alteraBotaoCriar = function() {
  success_buttons = document.getElementsByClassName("btn-success") 
  criar_button = success_buttons[success_buttons.length-1]
  if (criar_button.innerHTML == "Criar") {
    criar_button.onclick = MontarNovoSubmit;
  }
  else {
    console.log("ERRO: Botão Criar não encontrado")
  }

}

MontarNovoSubmit = function() {
  consolidaDadosObservacoes();
  criarDataPorData(divDias());
}

consolidaDadosObservacoes = function() {
  var sep = " |-|\n"
  var observacoes = document.getElementsByClassName("observacoes_box");
  var observacoes_text = "";
  document.getElementById("DSC_OBSERVACAO").value = "";
  for (var i = 0; i < observacoes.length; i++) {
    var titulo = String(observacoes[i].getAttribute("input_name"));
    var valor = String(observacoes[i].value);
    observacoes_text += titulo + ": " + valor + sep;
  }
  document.getElementById("DSC_OBSERVACAO").value = observacoes_text;
}

criarDataPorData = function(dates) {
      for (var i = 0; i < dates.length; i++) {
        parseData(dates[i], "data_inicio", "DATA_INICIO");
        parseData(dates[i], "data_fim", "DATE_FIM");
        try {
          criar(this); //TODO: Criar não está definido
        }
        catch (e) {
          console.log(e);
        }
    }
    alert("Eventos cadastrados com sucesso!");
  }

parseData = function(divData, idOrigem,idDestino) {
  var _d = 'numeric';
  var _h = '2-digit';
  var lan = 'pt-br';

  var data = divData.getElementsByClassName(idOrigem)[0].value;
  data = new Date(Date.parse(data))
  data = data.toLocaleString([lan], {year: _d, month: _d, day: _d,hour: _h, minute: _h});
  document.getElementById(idDestino).value = data;
  console.log(idDestino+": " + data);
}

divDias = function () {return document.getElementsByClassName("data_field");}
diasDeEvento = function () {return divDias().length;}

adicionarScript = function(text) {
  var script = document.createElement("script");
  script.textContent = text;
  document.head.appendChild(script);
}

scriptTxt = `
divDias = function () {return document.getElementsByClassName("data_field");}
diasDeEvento = function () {return divDias().length;}
var diasDeEventoLimite = 5;

adicionaData = function() {
  try{
    if (diasDeEvento() >= diasDeEventoLimite) {
        alert("Não é possível cadastrar mais que "+diasDeEventoLimite+" dias de evento");
        return;
    }
    var ultima_div_data = document.getElementsByClassName("data_field")[diasDeEvento()-1];
    var nova_div_data = ultima_div_data.cloneNode(true);
    nova_div_data.id = "dia-"+String(diasDeEvento());
    document.getElementById("datasEvento").appendChild(nova_div_data);
  }
  catch(e) {
    console.log(e);
  }
}

removeData = function() {
  try{
    if (diasDeEvento() <= 1) {
      alert("Não é possível remover mais datas");
      return;
    }
    var ultima_div_data = document.getElementsByClassName("data_field")[diasDeEvento()-1];
    document.getElementById("datasEvento").removeChild(ultima_div_data);
  }
  catch(e) {
    console.log(e);
  }
}
`