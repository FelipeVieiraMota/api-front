import {Component} from '@angular/core';
import { Service } from '../app/app.service'
import { FormsModule } from '@angular/forms';
import { ILogin } from './app.component-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  public date:any = {}
  private user:ILogin = {}
  constructor(private service:Service)  { }

  ngOnInit() {}

  onSubmit(authenticationForm:FormsModule){
    this.doLogin()
  }

  private async doLogin(){
    try{
      this.date = await this.service.doLogin(this.user);
      console.log(this.date)
    }catch(e){
      console.error("Error ",e);
    }
  }
}
