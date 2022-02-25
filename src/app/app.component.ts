import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';

  mensaje = "";

  registrado = false;

  nombre:string ="";
  
  apellido:string ="";

  edad:number = 0;

  entradas: any;

  cargo: string ="";

  constructor(){
    this.entradas = [

      {titulo:"Python cada día más presente"},
      {titulo:"Java un lenguaje increíble, presente desde hace más de 20 años"},
      {titulo:"JavaScript cada ves más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"Dónde quedó Pascal?"},
      
    ]
  }

  registrarUsuario(){
    
    this.registrado = true;

    this.mensaje = "Usuario registrado con éxito con el nombre de: ";
  }
}
