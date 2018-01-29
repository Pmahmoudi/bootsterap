function berekensubtotaal(a, b, c) {
    var prijs = parseFloat(a.textContent);
    var aantaal = parseInt(b.value);
    var totaalprijs = prijs * aantaal;
    c.textContent = totaalprijs.toFixed(2);

}


//innovativ
var innovativ_price = document.getElementById("innovativ_price");
var innovativ_aantal = document.getElementById("innovativ_aantal");
var innovativ_totaal = document.getElementById("innovativ_totaal");

innovativ_aantal.addEventListener("change", function () {
    berekensubtotaal(innovativ_price, innovativ_aantal, innovativ_totaal)

});


//foranoss
var foranoss_price = document.getElementById("foranoss_price");
var foranoss_aantal = document.getElementById("foranoss_aantal");
var foranoss_totaal =document.getElementById("foranoss_totaal");

foranoss_aantal.addEventListener("change",function () {
    berekensubtotaal(foranoss_price, foranoss_aantal, foranoss_totaal)

});


//kjerneoppgave
var kjerneoppgave_price = document.getElementById("kjerneoppgave_price");
var kjerneoppgave_aantal = document.getElementById("kjerneoppgave_aantal");
var kjerneoppgave_totaal =document.getElementById("kjerneoppgave_totaal");

kjerneoppgave_aantal.addEventListener("change",function () {
    berekensubtotaal(kjerneoppgave_price, kjerneoppgave_aantal, kjerneoppgave_totaal)

});

//totaalknop
totaalknop.addEventListener("click", function () {

    var totaalprijs = ("totaalprijs").textContent =
        parseFloat(innovativ_totaal.textContent) +
        parseFloat(foranoss_totaal.textContent) +
        parseFloat(kjerneoppgave_totaal.textContent);
    var totaalaantaal = parseInt(innovativ_aantal.value) + parseInt(foranoss_aantal.value) + parseInt(kjerneoppgave_aantal.value);
      console.log(totaalaantaal) ;
var nodig = 0;
if (document.getElementById("spoed").checked){
    nodig = 25 * totaalaantaal;
}
    var laten =0;
    if(document.getElementById("bezorging").checked){
        laten = 122 * totaalaantaal;
    }
    document.getElementById("totaalprijs").textContent = (totaalprijs + laten).toFixed(2);


});


