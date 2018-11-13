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
  private db: SQLiteObject = null;

  constructor(private sql: SQLite) {
    console.log("Hello DatabaseProvider Provider");

    this.inicializar();
  }

  inicializar() {
    this.sql
      .create({
        name: this.dbName,
        location: this.dbLocation
      })
      .then((d: SQLiteObject) => {
        this.db = d;
        d.executeSql(
          "CREATE TABLE IF NOT EXISTS usuarioPessoa(id INTEGER PRIMARY KEY AUTOINCREMENT, nome, sobrenome, idade, genero, escolaridade, areaAtuacao, email, senha)"
        );
      });
  }

  rodarQuery(query: string, data = []) {
    return new Promise((resolve, reject) => {
      this.db
        .executeSql(query, data)
        .then(resolve)
        .catch(reject);
    });
  }
}
