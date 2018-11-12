import { CadastroEmpresaPage } from './../cadastro-empresa/cadastro-empresa';
import { CadastroPage } from './../cadastro/cadastro';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  nome: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {

  }

  login(){
    
  }

  cadastro(){
    let alert = this.alertCtrl.create({
      title: 'Que tipo de cadastro deseja fazer?',
      inputs: [
        {
          name: 'empresa',
          label: 'Empresa',
          type: 'radio',
          handler: ()=>{
            this.nome = "empresa";
          }
        },
        {
          name: 'usuario',
          label: 'Pessoa',
          type: 'radio',
          handler: ()=>{
            this.nome = "usuario";
          }
        }
      ], 
      buttons: [{
        text: 'OK',
        handler: ()=>{
          if(this.nome == "usuario"){
            this.navCtrl.push(CadastroPage);
          }else if(this.nome == "empresa"){
            this.navCtrl.push(CadastroEmpresaPage);
          }
        }
      }],
    });

    alert.present();    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
