var Calculadora = {

   cifra :"",
   //operando1 :"",
   operador: "",
   coma : 0,
   resultado:0,
   numeroNegativo:"",
   menosverificador:0,
   display : document.getElementById('display'),

  funcionnumero1 : function() { numero1 = "";  var  numero = document.getElementById('1')
  numero.addEventListener('click', function() {

    if(Calculadora.cifra.length<8) {
      numero1 +='1';
      Calculadora.cifra += '1'
      display.innerHTML = Calculadora.cifra

    }

  })},
  funcionnumero2 : function() {var  numero = document.getElementById('2')
  numero.addEventListener('click', function() {

   if(Calculadora.cifra.length<8) {
     numero1 +='2';
     Calculadora.cifra += '2'
     display.innerHTML = Calculadora.cifra

   }
 })},
    funcionnumero3 : function() {var  numero = document.getElementById('3')
  numero.addEventListener('click', function() {

   if(Calculadora.cifra.length<8) {
     numero1 +='3';
     Calculadora.cifra += '3';
     display.innerHTML = Calculadora.cifra
   }

  })},
  funcionnumero4 : function() {var  numero = document.getElementById('4')
  numero.addEventListener('click', function() {

   if(Calculadora.cifra.length<8) {
     numero1 +='4';
     Calculadora.cifra += '4';
     display.innerHTML = Calculadora.cifra
   }

  })},
  funcionnumero5 : function() {var  numero = document.getElementById('5')
  numero.addEventListener('click', function() {

   if(Calculadora.cifra.length<8) {
     numero1 +='5';
     Calculadora.cifra += '5'
     display.innerHTML = Calculadora.cifra
   }

  })},
  funcionnumero6 : function() {var numero = document.getElementById('6')
  numero.addEventListener('click', function() {

   if(Calculadora.cifra.length<8) {
     numero1 +='6';
     Calculadora.cifra += '6'
     display.innerHTML = Calculadora.cifra
   }

  })},
  funcionnumero7 : function() {var  numero = document.getElementById('7')
  numero.addEventListener('click', function() {

   if(Calculadora.cifra.length<8) {
     numero1 +='7';
     Calculadora.cifra += '7'
     display.innerHTML = Calculadora.cifra
   }

  })},
  funcionnumero8 : function() {var  numero = document.getElementById('8')
  numero.addEventListener('click', function() {

   if(Calculadora.cifra.length<8) {
     numero1 +='8';
     Calculadora.cifra += '8'
     display.innerHTML = Calculadora.cifra
   }
  })},
  funcionnumero9 : function() {var  numero = document.getElementById('9')
  numero.addEventListener('click', function() {

   if(Calculadora.cifra.length<8) {
     numero1 +='9';
     Calculadora.cifra += '9'
     display.innerHTML = Calculadora.cifra
   }

  })},
  funcionnumero0 : function() {var  numero = document.getElementById('0')
  numero.addEventListener('click', function() {

   if(Calculadora.cifra.length<8) {
     if(Calculadora.cifra != '0') {
       numero1 +='0';
       Calculadora.cifra += '0'
       display.innerHTML = Calculadora.cifra
     }
   }


  })},
  funcionPunto : function() {var  numero = document.getElementById('punto')
  numero.addEventListener('click', function() {
   if(Calculadora.cifra.length<8 ) {
     if(Calculadora.cifra =='' && Calculadora.coma == 0) {
       var cero ='0';
       var punto ='.';
       numero1 +=('0'+'.')
       Calculadora.cifra += ('0'+'.')
       display.innerHTML = Calculadora.cifra
       Calculadora.coma = 1;
     }else if (Calculadora.coma == 0) {
         numero1 += '.'
         Calculadora.cifra += '.'
         display.innerHTML = Calculadora.cifra
         Calculadora.coma = 1;
       }
    }

 })},


  funcionIgual : function() { var resultado2 ="";var resultado4 ="";var  numero = document.getElementById('igual')
  numero.addEventListener('click', function() {
     resultado2 += Calculadora.cifra

        resultado = eval(numero1)
         display.innerHTML=resultado

         if(Calculadora.operador === '+') {
           resultado4 = '+'+Calculadora.cifra
           numero1+=resultado4

         }
         if(Calculadora.operador === '*') {
           resultado4 = '*'+Calculadora.cifra
           numero1+=resultado4

         }
         if(Calculadora.operador === '/') {
           resultado4 = '/'+Calculadora.cifra
           numero1+=resultado4

         }
         if(Calculadora.operador === '-') {
           resultado4 = '-'+Calculadora.cifra
           numero1+=resultado4

         }


  })},

  funcionSumar : function() { var  numero = document.getElementById('mas')
  numero.addEventListener('click', function() {
    numero1+='+'
    Calculadora.operador='+'
    display.innerHTML=' '
    Calculadora.cifra=''
     Calculadora.coma = 0;
     console.log(Calculadora.cifra)
  })},

  funcionRestar : function() {var  numero = document.getElementById('menos')
  numero.addEventListener('click', function() {
    numero1+='-'
    Calculadora.operador='-'
    display.innerHTML=' '
    Calculadora.cifra=' '
     Calculadora.coma = 0;
  })},

  funcionDividir : function() {var  numero = document.getElementById('dividido')
  numero.addEventListener('click', function() {
    numero1+='/'
    Calculadora.operador='/'
    display.innerHTML=' '
    Calculadora.cifra=' '
     Calculadora.coma = 0;

  })},

  funcionMultiplicar : function() {var  numero = document.getElementById('por')
  numero.addEventListener('click', function() {
    numero1+='*'
    Calculadora.operador='*'
    display.innerHTML=''
    Calculadora.cifra=''
     Calculadora.coma = 0;
  })},

  funcionNegativa : function() {var  numero = document.getElementById('sign')
  numero.addEventListener('click', function() {
     var menos = '-'
       if(Calculadora.menosverificador==0) {
         numero1= menos.concat(numero1)
         display.innerHTML = numero1
         Calculadora.menosverificador= 1
       }


  })},

  funcionResetear : function() {var  numero = document.getElementById('on')
  numero.addEventListener('click', function() {
     numero1 =''
     Calculadora.cifra =''
     display.innerHTML = '0'
     Calculadora.coma = 0
     Calculadora.menosverificador= 0

  })},

funcionApretarBoton: function() {
  var tecla = document.getElementsByClassName('tecla')
  tecla[0].addEventListener('mousedown', function() {
    tecla[0].style.width = "20%";
    tecla[0].style.height = "16%";

  })
  tecla[1].addEventListener('mousedown', function() {
    tecla[1].style.width = "20%";
    tecla[1].style.height = "16%";
  })
  tecla[2].addEventListener('mousedown', function() {
    tecla[2].style.width = "20%";
    tecla[2].style.height = "16%";
  })
  tecla[3].addEventListener('mousedown', function() {
    tecla[3].style.width = "20%";
    tecla[3].style.height = "16%";
  })
  tecla[4].addEventListener('mousedown', function() {
    tecla[4].style.width = "20%";
    tecla[4].style.height = "16%";
  })
  tecla[5].addEventListener('mousedown', function() {
    tecla[5].style.width = "20%";
    tecla[5].style.height = "16%";
  })
  tecla[6].addEventListener('mousedown', function() {
    tecla[6].style.width = "20%";
    tecla[6].style.height = "16%";
  })
  tecla[7].addEventListener('mousedown', function() {
    tecla[7].style.width = "20%";
    tecla[7].style.height = "16%";
  })
  tecla[8].addEventListener('mousedown', function() {
    tecla[8].style.width = "20%";
    tecla[8].style.height = "16%";
  })
  tecla[9].addEventListener('mousedown', function() {
    tecla[9].style.width = "20%";
    tecla[9].style.height = "16%";
  })
  tecla[10].addEventListener('mousedown', function() {
    tecla[10].style.width = "20%";
    tecla[10].style.height = "16%";
  })
  tecla[11].addEventListener('mousedown', function() {
    tecla[11].style.width = "20%";
    tecla[11].style.height = "16%";
  })
  tecla[12].addEventListener('mousedown', function() {
    tecla[12].style.width = "28%";
    tecla[12].style.height = "39%";
  })
  tecla[13].addEventListener('mousedown', function() {
    tecla[13].style.width = "28%";
    tecla[13].style.height = "39%";
  })
  tecla[14].addEventListener('mousedown', function() {
    tecla[14].style.width = "28%";
    tecla[14].style.height = "39%";
  })
  tecla[15].addEventListener('mousedown', function() {
    tecla[15].style.width = "28%";
    tecla[15].style.height = "39%";
  })
  tecla[16].addEventListener('mousedown', function() {
    tecla[16].style.width = "28%";
    tecla[16].style.height = "39%";
  })
  tecla[17].addEventListener('mousedown', function() {
    tecla[17].style.width = "28%";
    tecla[17].style.height = "39%";
  })
  tecla[18].addEventListener('mousedown', function() {
    tecla[18].style.width = "88%";
    tecla[18].style.height = "99%";
  })
},

funcionSoltarBoton: function() {
  var tecla = document.getElementsByClassName('tecla')
  tecla[0].addEventListener('mouseup', function() {
    tecla[0].style.width = "22%";
    tecla[0].style.height = "17%";

  })
  //------------------------------------------------------
  tecla[1].addEventListener('mouseup', function() {
    tecla[1].style.width = "22%";
    tecla[1].style.height = "17%";
  })
  //------------------------------------------------------
  tecla[2].addEventListener('mouseup', function() {
    tecla[2].style.width = "22%";
    tecla[2].style.height = "17%";
  })
  //------------------------------------------------------
  tecla[3].addEventListener('mouseup', function() {
    tecla[3].style.width = "22%";
    tecla[3].style.height = "17%";
  })
  //------------------------------------------------------
  tecla[4].addEventListener('mouseup', function() {
    tecla[4].style.width = "22%";
    tecla[4].style.height = "17%";
  })
  //------------------------------------------------------
  tecla[5].addEventListener('mouseup', function() {
    tecla[5].style.width = "22%";
    tecla[5].style.height = "17%";
  })
  //------------------------------------------------------
  tecla[6].addEventListener('mouseup', function() {
    tecla[6].style.width = "22%";
    tecla[6].style.height = "17%";
  })
  //------------------------------------------------------
  tecla[7].addEventListener('mouseup', function() {
    tecla[7].style.width = "22%";
    tecla[7].style.height = "17%";
  })
  //------------------------------------------------------
  tecla[8].addEventListener('mouseup', function() {
    tecla[8].style.width = "22%";
    tecla[8].style.height = "17%";
  })
  //------------------------------------------------------
  tecla[9].addEventListener('mouseup', function() {
    tecla[9].style.width = "22%";
    tecla[9].style.height = "17%";
  })
  //------------------------------------------------------
  tecla[10].addEventListener('mouseup', function() {
    tecla[10].style.width = "22%";
    tecla[10].style.height = "17%";
  })
  //------------------------------------------------------
  tecla[11].addEventListener('mouseup', function() {
    tecla[11].style.width = "22%";
    tecla[11].style.height = "17%";
  })
  //------------------------------------------------------
  tecla[12].addEventListener('mouseup', function() {
    tecla[12].style.width = "29%";
    tecla[12].style.height = "41%";
  })
  //------------------------------------------------------
  tecla[13].addEventListener('mouseup', function() {
    tecla[13].style.width = "29%";
    tecla[13].style.height = "41%";
  })
  //------------------------------------------------------
  tecla[14].addEventListener('mouseup', function() {
    tecla[14].style.width = "29%";
    tecla[14].style.height = "41%";
  })
  //------------------------------------------------------
  tecla[15].addEventListener('mouseup', function() {
    tecla[15].style.width = "29%";
    tecla[15].style.height = "41%";
  })
  //------------------------------------------------------
  tecla[16].addEventListener('mouseup', function() {
    tecla[16].style.width = "29%";
    tecla[16].style.height = "41%";
  })
  //------------------------------------------------------
  tecla[17].addEventListener('mouseup', function() {
    tecla[17].style.width = "29%";
    tecla[17].style.height = "41%";
  })
  //------------------------------------------------------
  tecla[18].addEventListener('mouseup', function() {
    tecla[18].style.width = "95%";
    tecla[18].style.height = "100%";
  })
},
//--------------------------------------------------
 init: function () {
  Calculadora.funcionnumero1();
  Calculadora.funcionnumero2();
  Calculadora.funcionnumero3();
  Calculadora.funcionnumero4();
  Calculadora.funcionnumero5();
  Calculadora.funcionnumero6();
  Calculadora.funcionnumero7();
  Calculadora.funcionnumero8();
  Calculadora.funcionnumero9();
  Calculadora.funcionnumero0();
  Calculadora.funcionPunto();
  Calculadora.funcionSumar();
  Calculadora.funcionRestar();
  Calculadora.funcionDividir();
  Calculadora.funcionMultiplicar();
  Calculadora.funcionIgual();
  Calculadora.funcionResetear();
  Calculadora.funcionNegativa();
  Calculadora.funcionApretarBoton();
  Calculadora.funcionSoltarBoton();
},
}

Calculadora.init();
