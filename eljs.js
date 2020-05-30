
$('input').on('keydown',function(e)
{
    var keyCode = e.keyCode || e.which;
     if(e.keyCode === 13) {
       e.preventDefault();
       $('input')[$('input').index(this)+1].focus();
       }
});

var p=document.getElementById('titulo');
var b=document.getElementById('btnCambiar');
var idUsuario=document.getElementsByName('idUsuario');
var razon1=document.getElementsByName('razon1');


console.log(idUsuario);

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
//       if(e.keyCode == 13) {
//         e.preventDefault();
//       }
//     }))
//   });

$('input').on('keydown',function(e){
    var keyCode = e.keyCode || e.which;
     if(e.keyCode === 13) {
      e.preventDefault();
      $('input')[$('input').index(this)+1].focus();
      }
});


function cambiar() {
    p.style.color='red';
}

// function onTestChange() {
//     //e.preventDefault();
//     var key = window.event.keyCode;
//     console.log(key);
//     if (key === 13) {
//         console.log('hola');
//         return false;
//     }
//     else {
//         console.log('adios');
//         return true;
//     }
// }

var buscarId = (xx) => { 
    
    //console.log('Salio');
    if (idUsuario[0].name=='idUsuario') {
        console.log('Buscar el Registro ... '); 
        //document.getElementById('uno').select();   
        //document.getElementById('uno').focus();    
    }
    //console.log(document.getElementsByName('idUsuario').name);
    
    //
    
   
   
};

//formUsuario.addEventListener();

b.onclick=cambiar;

