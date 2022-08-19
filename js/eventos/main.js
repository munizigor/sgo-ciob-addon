class PageInitializer {
  constructor() {
    this.diasDeEvento = function () {return document.getElementsByClassName("data_field").length;}
    this.diasDeEventoLimite = 5;
    this.dataIniEventoId = "dataIniEvento";
    this.dataFimEventoId = "dataFimEvento";
    this.observacoesId = "DSC_OBSERVACAO";
    this.dataIniEventoDiv = getDataDiv(this.dataIniEventoId);
    this.dataFimEventoDiv = getDataDiv(this.dataFimEventoId);
    this.observacoesDiv = getDataDiv(this.observacoesId);
    window.onload = this.init();
  }


  init() {
    escondeDiv(this.dataIniEventoDiv);
    escondeDiv(this.dataFimEventoDiv);
    escondeDiv(this.observacoesDiv);
    this.divGrupoDatas = criarDiv("datasEvento", this.dataIniEventoDiv);
    criaDivData(0, this.divGrupoDatas);
    criarDiv("ioa_coordenadora", this.observacoesDiv, htmlIOACoordenadora);
    criarDiv("num_sei", this.observacoesDiv, htmlSEI);
    criarDiv("ponto_encontro", this.observacoesDiv, htmlPontoEncontro);
    criarDiv("observacoes", this.observacoesDiv, htmlNovaObservacao);
    //TODO: usar datepicker do jquery-ui para data inicial e data final
  }

}

newPage = function () {
  try {
    modifiedPage = new PageInitializer();
  }
  catch (e) {
    console.log (e);
  }
}

class Evento {
  constructor() {
    this.prepareSubmit()
  }

  prepareSubmit() {
    alteraBotaoCriar();
    adicionarScript(scriptTxt);
  }
}

newEvent = function () {
  try {
    newevent = new Evento();
  }
  catch (e) {
    console.log (e);
  }
}

newPage();
newEvent();