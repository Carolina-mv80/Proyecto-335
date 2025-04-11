//Definir variables
var capital,interes,doblecapital,acum,tiempo, capint, i;

//Inicializar varibles
capital=5000; //Asignar capital
interes=0.3;//30% - Definir porcentaje interés 
doblecapital=capital*2; //identificar doble capital

acum=capital;
capint=capital*interes;
tiempo=0;
i=acum;

//Estructura de repetición mientras se cumpla una condición
while (i<doblecapital){//Condición para validar, si se cumple se ejecutan instrucciones incluidas
    acum=acum+capint;//Incremento para aumentar el capital mas el interés
    tiempo=tiempo+1; //Cuenta las veces que se realiza el proceso
    i=acum; //se actualiza para poder realizar la validacióm
} //Finaliza el mientras

//mensaje para mostrar resultado
console.log("El capital "+capital+" se dobla en:"+tiempo+" años");

