import { Component , OnInit , OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-clock-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock-app.component.html',
  styleUrl: './clock-app.component.css'
})
export class ClockAppComponent implements OnInit , OnDestroy{
pagename = "Clock-App" ; 
constructor( private logger: LoggingService) { }

  logIt() { 
    this.logger.log(this.pagename) ; 
  }


  currentTime: Date = new Date();  // Variable to hold the current date and time
  private timer: any;  // Variable to store the interval timer

  // ngOnInit is a lifecycle hook that runs after the component is initialized
  ngOnInit() {
    this.updateTime();  // Initialize the time when the component loads
    // Set up an interval to update the time every second (1000 milliseconds)
    this.timer = setInterval(() => this.updateTime(), 1000);
  }

  // ngOnDestroy is a lifecycle hook that runs when the component is destroyed
  ngOnDestroy() {
    // Clear the interval timer to prevent memory leaks
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  // Function to update the current time
  private updateTime() {
    this.currentTime = new Date();  // Set the currentTime to the current date and time
  }

}
