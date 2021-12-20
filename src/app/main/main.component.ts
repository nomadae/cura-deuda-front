import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiSepomexService} from "../api-sepomex.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  form: any;

  coloniasForm = new FormGroup({
    zipcode: new FormControl(''),
    nombre_estado: new FormControl(''),
    nombre_municipio: new FormControl(''),
    nombre_colonia: new FormControl(''),
  });
  constructor(private service: ApiSepomexService) { }

  ngOnInit(): void {

  }

  buscar() {
    this.service.getAllStates().subscribe( (res) => {
      console.log(res)
    })
  }
}
