import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { PaisesService } from "./service/paises/paises.service";
import { ProvinciasService } from "./service/provincias/provincias.service";
import { PersonasService } from "./service/personas/personas.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'personaTest';
  personaForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public paisesService: PaisesService,
    public provinciasService: ProvinciasService,
    public personasService: PersonasService,
  ) {
    this.personaForm = this.fb.group({ } );
  }

  ngOnInit(): void {
    this.personaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      pais: ['', Validators.required],
      provincia: ['', Validators.required],
    });
  }

  guardarPersona() {

  }

}
