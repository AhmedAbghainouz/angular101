import { Component , Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for bindin both ways 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HomeComponent , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Welcome To My First Angular Project';

  
  person = {
    name: "Skies",
    age: 23
  };
}
