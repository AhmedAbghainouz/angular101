import { Component , OnInit , Input , Output , EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for binding both ways 
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  pagename = "Home" ; 
  constructor(private logger:LoggingService){

  }
  logIt() { 
    this.logger.log(this.pagename) ; 
  }
  ngOnInit(): void {
      
  }

  // both ways data binding 

  mytitle: string = "Welcome To My First Angular Project";
  AlerteMe(){
    alert(`hello there, Username: ${this.ninja.name}, Password: ${this.ninja.password}`);
  }
  ninja = {
    name: "ahmed",
    password : "password"
  }


  //custom properties input/output use:
  @Input() person: any;
  @Output() Onyell = new EventEmitter();  //new instance of an event emitter

  Fireyellevent(e: any){
    this.Onyell.emit(e);  //this emits a new event 
  }

}
