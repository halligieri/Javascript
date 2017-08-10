var Calculadora = {

   cifra :"",
   //operando1 :"",
   xnum : "",
   coma : 0,
   resultado:0,
   display : document.getElementById('display'),

  funcionnumero1 : function() { numero1 = "";  var  numero = document.getElementById('1')
  numero.addEventListener('click', function() {

    if(numero1.length<8) {
      numero1 +='1';
      Calculadora.cifra += '1'
      display.innerHTML = Calculadora.cifra

    }

  })},
  funcionnumero2 : function() {var  numero = document.getElementById('2')
  numero.addEventListener('click', function() {

   if(numero1.length<8) {
     numero1 +='2';
     Calculadora.cifra += '2'
     display.innerHTML = Calculadora.cifra

   }
 })},
    funcionnumero3 : function() {var  numero = document.getElementById('3')
  numero.addEventListener('click', function() {

   if(numero1.length<8) {
     numero1 +='3';
     Calculadora.cifra += '3'
     display.innerHTML = Calculadora.cifra
   }

  })},
  funcionnumero4 : function() {var  numero = document.getElementById('4')
  numero.addEventListener('click', function() {

   if(numero1.length<8) {
     numero1 +='4';
     Calculadora.cifra += '4'
     display.innerHTML = Calculadora.cifra
   }

  })},
  funcionnumero5 : function() {var  numero = document.getElementById('5')
  numero.addEventListener('click', function() {

   if(numero1.length<8) {
     numero1 +='5';
     Calculadora.cifra += '5'
     display.innerHTML = Calculadora.cifra
   }

  })},
  funcionnumero6 : function() {var numero = document.getElementById('6')
  numero.addEventListener('click', function() {

   if(numero1.length<8) {
     numero1 +='6';
     Calculadora.cifra += '6'
     display.innerHTML = Calculadora.cifra
   }

  })},
  funcionnumero7 : function() {var  numero = document.getElementById('7')
  numero.addEventListener('click', function() {

   if(numero1.length<8) {
     numero1 +='7';
     Calculadora.cifra += '7'
     display.innerHTML = Calculadora.cifra
   }

  })},
  funcionnumero8 : function() {var  numero = document.getElementById('8')
  numero.addEventListener('click', function() {

   if(numero1.length<8) {
     numero1 +='8';
     Calculadora.cifra += '8'
     display.innerHTML = Calculadora.cifra
   }
  })},
  funcionnumero9 : function() {var  numero = document.getElementById('9')
  numero.addEventListener('click', function() {

   if(numero1.length<8) {
     numero1 +='9';
     Calculadora.cifra += '9'
     display.innerHTML = Calculadora.cifra
   }

  })},
  funcionnumero0 : function() {var  numero = document.getElementById('0')
  numero.addEventListener('click', function() {

   if(numero1.length<8) {
     numero1 +='0';
     Calculadora.cifra += '0'
     display.innerHTML = Calculadora.cifra
   }


  })},
  funcionPunto : function() {var  numero = document.getElementById('punto')
  numero.addEventListener('click', function() {

   if(numero1.length<8 ) {
     if(Calculadora.coma == 0) {
       numero1 +='.';
       Calculadora.cifra += '.'
       display.innerHTML = Calculadora.cifra
       Calculadora.coma = 1;
    }
   }


  })},

  funcionIgual : function() { var resultado1 ="";var  numero = document.getElementById('igual')
  numero.addEventListener('click', function() {
        resultado = eval(resultado2)
         display.innerHTML=resultado
         console.log(Calculadora.cifra)
         resultado1 = Calculadora.cifra
         resultado2+=resultado1

  })},

  funcionSumar : function() {  resultado2="";var  numero = document.getElementById('mas')
  numero.addEventListener('click', function() {
    numero1+='+'
    resultado2=numero1
    numero1 =""
    display.innerHTML=' '
    resultado2 += Calculadora.cifra
    Calculadora.cifra ='+ '
     display.innerHTML = ' '
     Calculadora.coma = 0;
  })},

  funcionRestar : function() {var  numero = document.getElementById('menos')
  numero.addEventListener('click', function() {
    numero1+='-'
    display.innerHTML=' '
    Calculadora.cifra =' '
     display.innerHTML = ' '
     Calculadora.coma = 0;
  })},

  funcionDividir : function() {var  numero = document.getElementById('dividido')
  numero.addEventListener('click', function() {
    numero1+='/'
    display.innerHTML=' '
    Calculadora.cifra =' '
     display.innerHTML = ' '
     Calculadora.coma = 0;
  })},

  funcionMultiplicar : function() {var  numero = document.getElementById('por')
  numero.addEventListener('click', function() {
    numero1+='-'
    display.innerHTML=' '
    Calculadora.cifra =' '
     display.innerHTML = ' '
     Calculadora.coma = 0;
  })},

  funcionNegativa : function() {var  numero = document.getElementById('sign')
  numero.addEventListener('click', function() {
     var menos = '-'

     var numeroNegativo= menos.concat(numero1)
     display.innerHTML = numeroNegativo
     Calculadora.xnum = ""

  })},

  funcionResetear : function() {var  numero = document.getElementById('on')
  numero.addEventListener('click', function() {
     numero1 =''
     Calculadora.cifra =' '
     display.innerHTML = Calculadora.cifra
     Calculadora.xnum = ""

  })},







}
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
console.log(numero1);
