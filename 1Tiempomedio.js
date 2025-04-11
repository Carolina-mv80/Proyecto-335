var distancia, tiempo_medio, horas, minutos, tiempo_total;

//Información entrada
distancia=42.195;
horas=2;
minutos=25;

//Procesos
tiempo_total=(horas*60)+minutos;
tiempo_medio=distancia/tiempo_total;

//información de salida
console.log ("El tiempo medio es "+ tiempo_medio +"km por minuto");