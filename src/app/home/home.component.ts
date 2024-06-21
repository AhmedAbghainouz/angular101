import { Component , OnInit , Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for binding both ways 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
// both ways data binding 
  mytitle: string = "welcome to my homepage...";
  AlerteMe(){
    alert(`hello there, Username: ${this.ninja.name}, Password: ${this.ninja.password}`);
  }
  ninja = {
    name: "ahmed",
    password : "password"
  }

  constructor(){

  }
  ngOnInit(): void {
      
  }

  //custom properties input use
  @Input() person: any;

}
