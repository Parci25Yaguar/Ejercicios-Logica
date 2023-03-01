class Ejercicio1{
    sumaDosNumers = (num1, num2) => {
        let suma;
        console.log(`Numero 1 = ${num1}`);
        console.log(`Numero 2 = ${num2}`);
        (num1 > num2) ? console.log(`La suma de ${num1} + ${num2} es :`, suma = num1 + num2)
        : console.log(`El segundo numero ${num2} es Mayor al numero ${num1} no se puede sumar`);

        //console.log(`La suma de ${num1} + ${num2} es`, suma)
        //if( num1 > num2){
        //    suma = num1 + num2
        //    console.log(`La suma del ${num1} y del ${num2} es =`,suma)
        //}else{
        //    console.log(`No se puede sumar porque el ${num2} es el MAYOR`)
        //}
    }

    Operador = (suma,resta,multiplicacion,division,residuo) => {
        let operacion = ''; //Ingresar elemento
        switch(operacion){
           case 'suma':
                suma = num1 + num2;
                console.log(`La Suma de ${num1} + ${num2} es`,suma);
                break;
           case 'resta':
                resta = num1 - num2;
                console.log(`La Resta de ${num1} - ${num2} es`,resta);
                break;
           case 'multiplicacion':
                multiplicacion = num1 * num2;
                console.log(`La multiplicacion de ${num1} * ${num2} es`,multiplicacion)
                break;
           case 'division':
                division = Math.floor(num1 / num2);
                console.log(`La division de ${num1} / ${num2} es`,division)
                break;
           case 'residuo':
                residuo = num1 % num2
                console.log(`El residuo de ${num1} % ${num2} es`,residuo)
                break;
        }
    }

    mayorDos = (num1, num2) =>{
        console.log(`Numero 1 = ${num1}`);
        console.log(`Numero 2 = ${num2}`);
        (num1 > num2) ? console.log(`El numero Mayor es el ${num1}`)
         : console.log(`El numero Mayor es el ${num2}`)
    }

    nombre = () => {
        let nombre = '' //Ingresar nombre
        console.log(`%cHola me Llamo ${nombre}`,'color:blue;font-weight:bold')
    }

    valorDeCompraIva = (valorIva) => {
        let total = 0;
        let valorAPagar;
        total = valorIva * 0.12
        valorAPagar = total + valorIva
        console.log(`El Valor es = ${valorIva}`);
        console.log(`El IVA es = ${total}`);
        console.log(`EL Total a Pagar IVA 12% es = ${valorIva}`);
    }

    nombre5 = () => {
        let nombre = ['']; //Ingresar nombre
        for(let i = 0; i < 5; i++){
           console.log(nombre)
        }
    }

    multiplos3_21 = () => {
        console.log('Multiplos de 3 al 21');
        for(let i = 3; i <= 21; i++){
            if ( i % 3 === 0){
                console.log(i);
            }
        }
    }

    multiplos21_3 = () => {
        console.log('Multiplos de 21 al 3');
        for(let i = 21; i >= 3; i--){
            if ( i % 3 === 0){
                console.log(i);
            }
        }
    }
    
    nombresIguales = () =>{
        let nombre1 = ''; //Ingresar nombre
        let nombre2 = ''; //Ingresar nombre
        ( nombre1.toLocaleLowerCase() == nombre2.toLocaleLowerCase()) ? console.log('Son Iguales') 
        : console.log('No son Iguales son Diferentes')
    }

    dadoDies = () => {
        console.log('Arreglos Ingresados');
        let arreglo = ['12123', '1212', '121', '112121', '1213','1212131', '1212122',
        '344323', '232323', '232323']
        console.log({arreglo});
        for(let pos = 0; pos < 10; pos++){
            let caracter = arreglo[pos]
            if (caracter.length <= 5){
                console.log(`Arreglo con 5 caracter ${caracter}`);
            }
        }
    }

    dadoArregaloElementos = () => {
        let arreglo = []; //Ingresar elementos
        console.log(arreglo)
    }

    menoresA10 = () => {
        let numeros = [];//Ingresar numero
        console.log(numeros) //Ingresar numero
        numeros.forEach(numero => {
            ( numero < 10) ? console.log(`Numeros Menor ${numero}`) : console.log(`Numero  Mayor ${numero}`)
            //if(numero < 10) {
            //    console.log(numero);
            //}
        });
    }

    imparesSumaPares = () => { 
        let crypto = window.crypto;
        let numeros = new Uint8Array(10);
        crypto.getRandomValues(numeros)
        //let numeros = [] Ingresar numeros
        let impares = [];
        let sumaPares = 0;
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 === 0) {
                sumaPares += numeros[i];
            } else {
                impares.push(numeros[i]);
            }
        }
        console.log("Numeros Impares:", impares);
        console.log("Suma de numeros Pares:", sumaPares);
    }

    primeroMedioUltimo = () => {
        let arreglo  = [1,2,3,4,5,6,7]; //Ingresar numero
        let longitud = arreglo.length;
        let indiceMedio = Math.floor(longitud / 2);
        let primerValor = arreglo[0];
        let valorMedio  = arreglo[indiceMedio];
        let ultimoValor = arreglo[longitud - 1];
        console.log(arreglo)
        console.log("Primer valor:", primerValor);
        console.log("Valor medio:", valorMedio);
        console.log("Último valor:", ultimoValor);
    }

    vueltoDeCompra = () => {
        let pago = num1, costo = num2;
        let vuelto;
        vuelto = pago - costo
        console.log(`El costo del producto es ${costo}`)
        console.log(`El pago es de ${pago}`)
        console.log(`El vuelto a dar es ${vuelto}`)
    }
    
}
let suma = new Ejercicio1()
let valorIva =Math.floor(Math.random()*100)
let num1 = Math.floor(Math.random()*35);
let num2 = Math.floor(Math.random()*35);
let numeroGrande = Math.floor(Math.random()*10000)
//suma.sumaDosNumers(num1,num2)
//suma.Operador(num1, num2)
//suma.mayorDos(num1, num2)
//suma.nombre()
//suma.nombre5()
//suma.valorDeCompraIva(valorIva)
//suma.multiplos3_21()
//suma.multiplos21_3()
//suma.nombresIguales()
//suma.dadoDies()
//suma.dadoArregaloElementos()
//uma.menoresA10()
//suma.imparesSumaPares()
//suma.primeroMedioUltimo()
//suma.vueltoDeCompra()


class Ejercicio2{
    tablaMultiplicacion = () => {
        let indice = 5;
        let i      = 1;
        let tabla  = 0;
        console.log(`%cTABLA DEL ${indice}`,'color:green;font-weight:bold')
        while( i <= 12){
            tabla = indice * i;
            console.log(`${indice} * ${i} =`,tabla)
            i++
        }
    }

    multiplicacionSumaSucesivas = () => {
        //let num1 = 5, num2 = 3;
        let cont = 1;
        let acum = 0;
        while( cont <= num2){
            acum = acum + num1
            console.log(`${acum - num1} + ${num1} = `,acum)
            cont++
        }
        console.log(`La multiplicacion de ${num1} * ${num2} =`,acum)
    }

    divisionRestaSucesiva = () => {
        let cont = 0;
        console.log(`Numeros ingresados ${num1} / ${num2}`)
        while( num1 >= num2){
            num1 = num1 - num2
            cont++
        }
        console.log(`El Cociente es ${cont}`)
        console.log(`Mi Residuo es ${num1}`)
    }

    factorial = () => { 
        let facto = 1;
        let cont = num1; 
        while( cont >= 1){
            console.log(`*${cont}`)
            facto = facto * cont;
            cont--
        }
        console.log(`El Factorial del numero ${num1} es ${facto}`);
    }

    exponenteDeNumero = () => {
        let cont = 1, result = 1; 
        let expo = num2;
        while( cont <= expo){
            result = Math.floor(result * num1);
            cont++
        }
        console.log(`El Numero ${num1} Elevado al exponente ${expo} es ${result}`);
    }

    fibonaci = () => {
        let c = 1,a = 0, b = 1;
        let cont = 3;
        console.log(`La serie Fibonacci del numero ${num1} es :`);
        while( cont <= num1){
            a = b;
            b = c;
            c = a + b;
            console.log(c);
            cont++
        }
    }

    numeroInvertido = () => {
        console.log(`Numero a Invertir ${numeroGrande}`);
        let digito;
        while( numeroGrande > 0){
            digito = Math.floor(numeroGrande % 10);
            numeroGrande = Math.floor(numeroGrande / 10);
            console.log(digito)
        }
    }

    divisoresDeNumero = () => {
        let cont;
        console.log(`Divisores de ${num1}`);
        if( num1 == 0){
            console.log('El 0 no tiene Divisores :',num1);
        }else{
            for(let cont = 1; cont < num1; cont++){
                if( num1 % cont == 0){
                    console.log(`El numero ${cont} es Divisor`)
                }
            }
        }
    }

    numeroPerfecto = () => {
        let cont, sumaNum1 = 0;
        for(cont = 1; cont <= num1/2; cont++){
            if( num1 % cont == 0){
                sumaNum1 = sumaNum1 + cont;
            }
        }if( sumaNum1 == num1 && num1 !== 0){
            console.log(`El Numero ${num1} es Perfecto`)
        }else{
            console.log(`El Numero ${num1} No es Perfecto`)
        }
    }

    numeroPrimo = () => {
        let cont = 0;
        for( let i = 1; i <= num1; i++){
            if( num1 % i == 0){
                cont++
            }
        }
        if( cont == 2){
            console.log(`El numero ${num1} es Primo`)
        }else{
            console.log(`El numero ${num1} No es Primo`)
        }
    }
}
let resta = new Ejercicio2()
//resta.tablaMultiplicacion()
//resta.multiplicacionSumaSucesivas()
//resta.divisionRestaSucesiva()
//resta.factorial()
//resta.exponenteDeNumero()
//resta.fibonaci()
//resta.numeroInvertido()
//resta.divisoresDeNumero()
//resta.numeroPerfecto()
//resta.numeroPrimo()