import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class EtracsService {

  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);

   constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private plt: Platform,
    private alertController: AlertController) {
      this.plt.ready().then(() => {
        this.checkToken();
      });
  }
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }

  serverrequest(params){
    return this.http.post(`${this.url}/serverrequest`, params)
      .pipe(
        catchError(e => {
          this.showAlert(e.error.msg);
          throw new Error(e);
        })
      );
  }

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }

  getmaps(){
    return this.http.get(`http://192.168.50.2/maplist.json`);
  }
}
