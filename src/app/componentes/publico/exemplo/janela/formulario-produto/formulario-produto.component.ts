import {Component, Input} from '@angular/core';
import {Produto} from "../../models/classes/Produto";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-formulario-produto',
  templateUrl: './formulario-produto.component.html',
  standalone: false
})
export class FormularioProdutoComponent {
  @Input() produto: Produto = new Produto({});

  categorias: SelectItem[] = [];

}
