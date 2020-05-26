import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service'

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: [
  ]
})
export class CargaComponent implements OnInit {

  archivo: FileItem[]=[];

  constructor(public _cargaImagenes: CargaImagenesService) { }

  ngOnInit(): void {
  }

  cargarImagen(){
    this._cargaImagenes.cargarImagenesFirebase(this.archivo);

  }
}
