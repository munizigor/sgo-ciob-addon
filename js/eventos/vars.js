function htmlDivDataIndividual (num) {
    return `
    <label class="control-label col-md-3">Datas do Evento</label>
    <div class="form-group-sm col-md-4">
      <label class="control-label col-md-2"">Início</label
      >
      <div class="col-md-5">
        <input class="data_inicio"
          type="datetime-local"
          autocomplete="off"
          required="required"
        />
      </div>
    </div>
    <div class="form-group-sm col-md-3">
      <label class="control-label col-md-2">Fim</label>
      <div class="col-md-5">
        <input class="data_fim"
          type="datetime-local"
          autocomplete="off"
          required="required"
        />
      </div>
    </div>
    <div class="form-group-sm col-md-1">
        <span class="botao-add" title="Adicionar linha" onclick="adicionaData()"></span>
    </div>
    <div class="form-group-sm col-md-1">
        <span class="botao-del" title="Excluir linha" onclick="removeData()"></span>
    </div>
  `
}

var htmlSEI = `
<label class="control-label col-md-3" for="num_sei_txt">SEI</label>
  <div class="col-md-9">
      <input class="form-control text-box single-line observacoes_box" id="num_sei_txt" maxlength="250" input_name="SEI" placeholder="Informe o Número do Documento SEI" type="text" value="">
</div>
`

var htmlPontoEncontro = `
<label class="control-label col-md-3" for="ponto_encontro_txt">Ponto De Encontro</label>
  <div class="col-md-9">
      <input class="form-control text-box single-line observacoes_box" id="ponto_encontro_txt" maxlength="250" input_name="Ponto de Encontro" placeholder="Especifique" type="text" value="">
</div>
`

var htmlNovaObservacao = `
<label class="control-label col-md-3" for="observacao_txt">Observações</label>
  <div class="col-md-9">
      <textarea class="form-control custom-scroll observacoes_box" input_name="Observações" cols="20" data-val="true" data-val-length="O campo deve ser uma cadeia de caracteres com um comprimento máximo de 7500." data-val-length-max="7500" id="observacao_txt" maxlength="7500" placeholder="Opcional" rows="4"></textarea>
</div>
`

var htmlIOACoordenadora = `
<label class="control-label col-md-3" for="ioa_coordenadora_txt"
    >IOA Coordenadora</label
  >
  <div class="col-md-9">
    <select id="tipoEvento" name="ioa_coordenadora_txt" class="form-control observacoes_box" input_name="IOA Coordenadora" required="required">
      <option value="">-- Não Selecionado --</option>
      <option value="PMDF">PMDF</option>
      <option value="CBMDF">CBMDF</option>
      <option value="PCDF">PCDF</option>
      <option value="DETRAN">DETRAN</option>
      <option value="SEAPE">SEAPE</option>
    </select>
  </div>
`