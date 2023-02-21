import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {


  heroes: string []=['Spiderman','Iroman','Thor'];
  heroeborrado: string ='';

  borrarHeroe(){
      const heroeborrado1 = this.heroes.shift()||'';

    this.heroeborrado= heroeborrado1
   //this.heroes.splice(0)
  }
}
