//10-marzo-2023

function cronomertro(){
    let hora=0, minuto=0, segundo=0;
    while(minuto<3){
        if(segundo<60){
            segundo++;

        }else{
            segundo=0;
            minuto++;

            if(minuto<60){
                minuto++;

            }
            else{
                minuto=0;
                hora++
            }
        }
        //pausa de 1 segundo
        let fecha1=new Date()//fecha del sistema---> new Date
        let fecha2=new Date();
        //esperar a que pase un segundo
        do{
            fecha2=new Date()

        }while((fecha2-fecha1)<1000);
        console.log(hora+ ":" +minuto+ ":" +segundo);
          
        
        /*setTimeout(): funciona asincrona:
        http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D*/

       //otro retrado de un segundo
       //cuando temine me avisa=promesa, objeto que representa la ejecucion de una 
       //funcion asincrona
       //CUANDO TERMINE ME AVISA
       //new Promise(r=>setTimeout(r,1000))//le prometo que cuando temine le aviso
       
    }
    
    
}
cronomertro();

//fecha1=0               fecha2=0      
// 0 0  < 1000        

function media(x,y,z){
    let campoX=parseInt(document.getElementById("x").value);//busque un elemento en el documento html cuyo elemento id sea x
    let campoY=parseInt(document.getElementById("y").value);
    let campoZ=parseInt(document.getElementById("z").value);

    let promedio=(campoX+campoY+campoZ)/3;

    console.log(promedio)


    


}


/**
 setTimeout(call, 1000);// se demora un segundo y cuando temina llama la funcion

 setTimeout((=> console.log("Termine!!"), 1000))


 function call){
    console.log("Termine");    
 }
 new promise  setTimeout(call, 1000);
  
*/