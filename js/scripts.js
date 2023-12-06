const textDisplayN = ["tree /home/rafael/senac", "tree /home/rafael/tech", "whoami", "help"];
const websiteUrlN = ["senacPages/senacPages.html", "catTechs/catTechs.html", "whoami/whoami.html", "help.html"];

function buttonPressed(button){
  var tag_id = document.getElementById('stringMenu');
  var tag_id2 = document.getElementById('optionString');
  tag_id.innerHTML = '<h1></h1>';
  tag_id2.innerHTML = '<h1>[rafael@website ~]$ '+ textDisplayN[button] +'</h1>'; //utiliza uma lookup table para redirecionar o usuário
  document.getElementById('allBtns').className = 'buttonFade';
  setTimeout(function() { //redireciona o usuário para a página do botão, o timeout existe para a transição acontecer de boa
    location.href=websiteUrlN[button];
  }, 2000);
  setTimeout(function() { //código MUITO específico pra caso o usuário volte com as setas do browser ao invés de usar
    location.reload();    //o botão clear que cada página tem. faz com que a página atualize automaticamente e fique "normal"
  }, 2500);
}
