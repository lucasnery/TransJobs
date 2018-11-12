import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  private dbName: string = "transjobs.db";
  private dbLocation: string = "default";

  constructor(private sql: SQLite) {
    console.log("Hello DatabaseProvider Provider");

    this.inicializar();
  }

  inicializar() {
    // Cria a tabela de usuários
    this.rodarQuery(
      "CREATE TABLE IF NOT EXISTS usuarioPessoa(id INTEGER PRIMARY KEY AUTOINCREMENT, nome, sobrenome, idade, genero, escolaridade, areaAtuacao, email, senha"
    );
  }

  getInstance() {
    return this.sql.create({
      name: this.dbName,
      location: this.dbLocation
    });
  }

  rodarQuery(query: string, data = []) {
    return new Promise((resolve, reject) => {
      this.getInstance().then((db: SQLiteObject) => {
        db.executeSql(query, data)
          .then(resolve)
          .catch(reject);
      });
    });
  }
}
