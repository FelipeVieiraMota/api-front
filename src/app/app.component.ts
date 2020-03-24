import { Component } from '@angular/core';
import { Service } from '../app/app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent 
{
  public date:any = {};
  constructor(private service:Service)  { }

  ngOnInit() 
  {
    this.getCurrentTime();
  }
  
  private async getCurrentTime()
  {
    try
    {
      this.date = await this.service.getCurrentTime();
      console.log(this.date)
    }
    catch(e)
    {
      console.error("Error ",e);
    }
  }

}
