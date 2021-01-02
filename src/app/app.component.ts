import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  textoParaMostrar : string = "Esto es un mensaje desde el controlador!";
  numero : number = 65481548;
  fecha : Date = new Date();


  // Variable que va a tener el valor del campo nombre
  nombre : string;

  // Esto va a tener el campo apellido
  apellido: string;
  
  //esto va a tener el campo dni de la vista
  dni : number;

  resultado: string;


  /*
    Este metodo se llama cuando presiono una tecla
    en los campos de la vista
  */
  alPresionar(event) {
   // console.log(event)
    let valorDeCampo;
   // console.log("Valor recuperado desde campo: "+this.nombre)
  }


  cargarNombre(event){
    this.nombre = event.target.value;
  }

  cargarApellido(event){
    this.apellido = event.target.value;
  }

  cargarDni(event){
    this.dni = event.target.value;
  }



  mostrarMensaje(){
    this.resultado = "Los datos de los campos son: "+this.nombre+", "+this.apellido+", "+this.dni;
  }




}

