import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  
  
  @Input() heroe:any = {};
  @Input() index:number;

  @Output() HeroeSeleccionado: EventEmitter<number>; //va a emitir un tipo number 


  constructor(private router:Router) {
    this.HeroeSeleccionado = new EventEmitter(); //se inicializa el event emiter
   }

  ngOnInit() {
  }

  verHeroe(){
    this.router.navigate(['/heroe',this.index]);
    // console.log(this.index);
    // this.HeroeSeleccionado.emit(this.index);
    
  }

}
