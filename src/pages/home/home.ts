import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lat:number = 0;
  lon: number = 0;

  constructor(public navCtrl: NavController, private geo: Geolocation) {
  }

  public atualizaPosicao(): void{
    this.geo.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;
    }).catch((error) => {
      console.log('Erro ao recuperar a nova localização', error);
    })
  }
}
