import { Component } from '@angular/core';
import {PersonaService }from './services/persona.service';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formularioAgregar:FormGroup;

  title = 'ConsumoApi';
  public personas:Array<any>=[]
  constructor(
     public formulario:FormBuilder,
    private personaService:PersonaService
    ){

      this.personaService.getPersonas().subscribe((resp:any)=>{
        console.log(resp);
        this.personas =resp
      })
       this.formularioAgregar=this.formulario.group({
      name:[''],
      file:['']
    })
      
  }
  enviarDatos():any{
    // console.log('HOla')
    console.log(this.formularioAgregar.value);
    localStorage.setItem("persona", JSON.stringify(this.formularioAgregar.value));
  }

 
}
