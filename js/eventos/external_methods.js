removeData = function() {
    if (this.diasDeEvento <= 0) {
        alert(`Não é possível remover mais eventos`);
        return;
    }
    var ultima_div_data = document.getElementById("dia-"+String(this.diasDeEvento));
    ultima_div_data.parentNode.removeChild(ultima_div_data);
    this.diasDeEvento--;
}