let btn = document.getElementById('btn')
btn.addEventListener('click', calcular)
 function calcular () {
    let msg = document.getElementById('msg')
    let num = Number (document.getElementById('num').value);
    let res = document.getElementById('res');
    let calcular = '';
    for (let count=1; count <=10 ; count++)
        calcular += num + "x" + count + "=" + num*count + "<br>" ;
        res.innerHTML = calcular;
        msg.innerText = (`Tabuada do numero ${num} é =`)
   
 }
 function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.getElementById('titulo');
typeWrite(titulo);


