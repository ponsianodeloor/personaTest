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
  paises: any;
  provincias: any;
  personas: any;

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

    this.paisesService.getPaises().subscribe((data: any) => {
      this.paises = data;
      //console.log(data);
    }, (error) => { console.log(error) } );

    /*this.personaForm.get('pais')!.valueChanges.subscribe(value => {
      this.provinciasService.getAllProvinciasByPais(value.id).subscribe(resp => {
          this.provincias = resp;
        },
        error => { console.error(error) }
      );
    });*/

  }

  savePersona() {

    //modificar el objeto pais para que solo tenga el id en json hijo
    this.personaForm.value.pais = {id: this.personaForm.value.pais};
    this.personaForm.value.provincia = {id: this.personaForm.value.provincia};

    this.personasService.savePersona(this.personaForm.value).subscribe((data: any) => {

      this.personaForm.reset();
      this.personaForm.setErrors(null);
      //this.personas=this.personas.filter(persona=> data.id!==persona.id);
      //this.personas.push(data);
    }, (error) => { console.log(error) } );
  }

  getAllProvinciasByPais(event: any) {
    this.provinciasService.getAllProvinciasByPais(event.target.value).subscribe((data: any) => {
      this.provincias = data;
      //console.log(data);
    }, (error) => { console.log(error) } );
  }

  getPersonas() {
    this.personasService.getPersonas().subscribe((data: any) => {
      this.personas = data;
      //console.log(data);
    }, (error) => { console.log(error) } );
  }

}
