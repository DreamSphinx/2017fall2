import { Injectable } from '@angular/core';
import { User, } from './exercise';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { json } from 'body-parser';


declare var window: any;
declare var FB: any;


@Injectable()
export class ExerciseService {

  apiRoot: string;   
  me: User; 

  constructor(private http: Http, private router: Router) {
      this.apiRoot = `//${window.location.hostname}:8081` 
      window.fbAsyncInit = function() {
          FB.init({
            appId      : '166399153968232',
            cookie     : true,
            xfbml      : true,
            version    : 'v2.11'
          });
            
          FB.AppEvents.logPageView();   
            
        };
      
        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = <HTMLScriptElement>d.createElement(s); js.id = id;
           js.src = "https://connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));
  }

  loginFB() {
      FB.login((response: any) => {
          if (response.authResponse) {

           FB.api('/me?fields=name,email,picture', (response: any) => {
             this.login(response.name, 'password', response.id, response.picture.data.url);
           });

          } else {
           console.log('User cancelled login or did not fully authorize.');
          }
      }, { scopes: 'email,user_photos,user_posts'});
  }

  login(name: string, password: string, fbid?: string, picture?: string){
      this.http.post(this.apiRoot + "/exercise/session/users", { name, password, fbid, picture }).subscribe(
          data => {
              console.log('Success');
              this.me = data.json();
              console.log(this.me);
              this.router.navigate(['loggedin']);
              

          },
          err => {
              console.log(err);
          },
          () => {}
      )
  }

  logout(){
    this.me = null;
    this.router.navigate(['home']);
  }
}
