/* ejercicio dia de la semana */
let dia =prompt ("ingresa un dia de la semana");
// validamos el dia si es entre semana o finde
//convertir respuestas del usuario a minusculas
dia = dia.toLowerCase();
if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "miércoles" || dia == "jueves" || dia == "viernes") {
    alert("es un dia entre semana");
} else {
    if (dia == "sabado" || dia == "sábado" || dia == "domingo")  {
        alert("es un fincho");
    } else {
        alert ("Por favor ingrese un dia de la semana ")
    }
   
}
 