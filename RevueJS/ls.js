$(function(){
    $("#ecriture").on("click", function(){
        window.localStorage.setItem("texte", $("#texte").val());
    });
    $("#lecture").on("click", function(){
        $("#texte2").val(window.localStorage.getItem("texte"));
    });
});