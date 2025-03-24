usuario1 = localStorage.getItem('Usuário');
alert(usuario1);
document.getElementById('resultados').value = usuario1;

var dados = JSON.stringify({'Nome' : , 'Altura' : '1,73' , 'Signo' : 'Gêmeos'});
localStorage.setItem('usuario1' , dados);

alert('Digite o número do usuário que deseja consultar: 1,2,3,4,5');
