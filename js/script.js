  function nonTo() {document.getElementById('tombo').style.display = "none";}
  function showTo() {document.getElementById('tombo').style.display = "block";}
  function nonFo() {document.getElementById('idfoto').style.display = "none";}
  function showFo() {document.getElementById('idfoto').style.display = "block";}
  function nonDiv() {document.getElementById('Content').style.display = "none";}
  function showDiv() {document.getElementById('Content').style.display = "block";}
  function iloveu() {if(u==text2.length){document.getElementById('sp1').style.display = "none";document.getElementById('sp2').style.display = "block";}}
  function fotoKt() {document.getElementById('ftKm').style.opacity = "0";document.getElementById('ftAk').style.opacity = "1";}
  
  var i=0,text;
  text = ""
  var u=0,text2;
  text2 = ""
  var o=0,text3;
  text3 = "...                                 "
  
  function ketik() {
    if(i<text.length){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(ketik,100);
    }
    if(i==text.length){
    document.getElementById("text").innerHTML = text + emotnama;
    ketikk();}
  }
  function ketikk() {
    if(u<text2.length){
      document.getElementById("text2").innerHTML += text2.charAt(u);
      u++;
      setTimeout(ketikk,200);
    }
    if(u==text2.length){
    iloveu();siap();}
  }
  async function siap() {
    if(o<text3.length){
      document.getElementById("text3").innerHTML += text3.charAt(o);
      o++;
      setTimeout(siap,80);
    }
    if(o==text3.length){
    document.getElementById("text3").innerHTML = pesanakhir;
    fotoKt();}   
  }