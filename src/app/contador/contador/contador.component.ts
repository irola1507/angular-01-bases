import { Component } from "@angular/core";

@Component ({

selector: 'app-contador',
template :`<h1>{{titulo}}</h1>


<h1> La base  es : {{base}}</h1>


<button (click)="acumular_cinco()">+5</button>



<span>{{base}}</span>


<button (click)="restar_cinco()">-5</button>




<button (click)="acumular(base )"> +{{base}}</button>



<span>{{numero}}</span>


<button (click)="acumular(-base)">- {{base}}</button>`
 
})


export class ContadorComponent{



    
        titulo : string  = 'Contador App';
      
      
      numero : number =10;
      
      sumar(){
      
      this.numero += 1;
      
      }
      restar(){
      
        this.numero -= 1;
        
        }
      
      acumular (valor:number){
      
      this.numero+= valor;
      
      }
      
      base : number =5 ;
      
      
      acumular_cinco (){
      
            this.base +=5
      
      
      }
      restar_cinco (){
      
        this.base = this.base - 5; 
        
      
      }
      
}