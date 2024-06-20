import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for binding both ways 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  username: string= "";
  password: string = "";
  mytitle: string = "welcome to my homepage...";
  AlerteMe(){
    alert(`hello there, Username: ${this.username}, Password: ${this.password}`);
  }

  constructor(){

  }
  ngOnInit(): void {
      
  }

}
