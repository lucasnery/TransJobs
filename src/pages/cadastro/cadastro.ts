import { Component } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  nome: string = "";
  sobrenome: string = "";
  idade: string = "";
  gender: string = "";
  escolaridade: string = "";
  areaAtuacao: string = "";
  email: string = "";
  senha: string = "";
  repetirSenha: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, public loadingCtrl: LoadingController, private sqlite: SQLite) {

  }

  createDatabase() {
    this.sqlite.create({
      name: 'transjobs.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS usuarioPessoa(id INTEGER PRIMARY KEY AUTOINCREMENT, nome, sobrenome, idade, genero, escolaridade, areaAtuacao, email, senha', [])
          .then(() => console.log('SQL Executado!'))
          .catch(e => console.log(e));
      })

      .catch(e => console.log(e));
  }

  cadastro() {
    if (this.nome == "" || this.sobrenome == "" || this.idade == "" || this.gender == "" ||
      this.escolaridade == "" || this.areaAtuacao == "" || this.email == "" || this.senha == "" || this.repetirSenha == "") {
      let alert = this.alertCtrl.create({
        title: 'Ei, temos um problema!',
        subTitle: 'Parece que você não preencheu todos os campos. Verifique se falta algo para prosseguirmos com seu cadastro!',
        buttons: ['OK']
      });
      alert.present();
    } else if (this.senha != this.repetirSenha) {
      let alert = this.alertCtrl.create({
        title: 'Ei, temos um problema!',
        subTitle: 'As senhas que você digitou não são coincidem! Tente digitar senhas iguais para concluir seu cadastro!',
        buttons: ['OK']
      });
    } else {
      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: 'Aguarde enquanto cadastramos seus dados!'
      });

      loading.present()
        .then((db: SQLiteObject) => {
          db.executeSql('INSERT INTO usuarioPessoa(nome, sobrenome, idade, genero, escolaridade, areaAtuacao, email, senha) VALUES (' + this.nome + ',' +
            this.sobrenome + ',' + this.idade + ',' + this.gender + ',' + this.escolaridade + ',' + this.areaAtuacao + ',' + this.email + ',' + this.senha + ')', [])
            .then(() => console.log('Dados inseridos na tabela!'))
            .catch(e => console.log(e));
        })

        .catch(e => console.log(e));

      loading.dismiss();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
}
