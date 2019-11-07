$(document).ready(function() {
    $("#pesquisa").focus(function() {
        $("#div_pesquisa").removeClass("col-sm-2").addClass("col-sm-5");
        $("#vazio").removeClass("col-sm-5").addClass("col-sm-2");
    });
    $("#pesquisa").focusout(function() {
        $("#div_pesquisa").removeClass("col-sm-5").addClass("col-sm-2");
        $("#vazio").removeClass("col-sm-2").addClass("col-sm-5");
    });
});