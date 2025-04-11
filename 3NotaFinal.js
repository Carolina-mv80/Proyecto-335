//Definir variables
var taller1,taller2,quiz,examen,ntrabajos,nexamen;

//Se cargan valores en la variables
taller1=5.0;
taller2=4.3;
quiz=3.0;
examen=3.8;

//Realizar cálculos
ntrabajos=((taller1+taller2+quiz)/3)*(0.3);
nexamen=examen*(70/100);
nparcial1=ntrabajos+nexamen;

//Mostrar resultado
console.log("La nota final para el primer parcial es: "+nparcial1);