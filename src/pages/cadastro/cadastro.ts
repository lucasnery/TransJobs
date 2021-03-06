import { Component } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController
} from "ionic-angular";
import { DatabaseProvider } from "../../providers/database/database";
import { LinkedIn } from "@ionic-native/linkedin";

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-cadastro",
  templateUrl: "cadastro.html"
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private db: DatabaseProvider,
    private linkedin: LinkedIn
  ) {}

  cadastro() {
    if (
      this.nome == "" ||
      this.sobrenome == "" ||
      this.idade == "" ||
      this.gender == "" ||
      this.escolaridade == "" ||
      this.areaAtuacao == "" ||
      this.email == "" ||
      this.senha == "" ||
      this.repetirSenha == ""
    ) {
      let alert = this.alertCtrl.create({
        title: "Ei, temos um problema!",
        subTitle:
          "Parece que você não preencheu todos os campos. Verifique se falta algo para prosseguirmos com seu cadastro!",
        buttons: ["OK"]
      });
      alert.present();
    } else if (this.senha != this.repetirSenha) {
      let alert = this.alertCtrl.create({
        title: "Ei, temos um problema!",
        subTitle:
          "As senhas que você digitou não são coincidem! Tente digitar senhas iguais para concluir seu cadastro!",
        buttons: ["OK"]
      });
      alert.present();
    } else {
      let loading = this.loadingCtrl.create({
        spinner: "crescent",
        content: "Aguarde enquanto cadastramos seus dados!"
      });

      loading.present();

      this.db
        .rodarQuery(
          "INSERT INTO usuarioPessoa(nome, sobrenome, idade, genero, escolaridade, areaAtuacao, email, senha) VALUES (?,?,?,?,?,?,?,?)",
          [
            this.nome,
            this.sobrenome,
            this.idade,
            this.gender,
            this.escolaridade,
            this.areaAtuacao,
            this.email,
            this.senha
          ]
        )
        .then(arg => {
          loading.dismiss();
          this.alertCtrl
            .create({
              subTitle: "Cadastro feito com sucesso!"
            })
            .present();
          this.navCtrl.popToRoot();
        })
        .catch(err => {
          loading.dismiss();
          this.alertCtrl
            .create({
              subTitle: err.message
            })
            .present();
          console.error(JSON.stringify(err));
        });
    }
  }

  goLinkedin() {
    this.linkedin
      .hasActiveSession()
      .then(active => console.log("has active session?", active));

    this.linkedin
      .login(
        ["r_basicprofile", "r_emailaddress", "rw_company_admin", "w_share"],
        true
      )
      .then(() => console.log("Logged in!"))
      .catch(e => console.log("Error logging in", e));
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CadastroPage");
  }
}
