import { SQLiteObject } from '@ionic-native/sqlite';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TasksServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksServiceProvider {
  db: SQLiteObject = null;

  constructor(public http: HttpClient) {
    console.log('Hello TasksServiceProvider Provider');
  }

  setDataBase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }

  createUsuarioPessoa(){
    let sql = 'CREATE TABLE IF NOT EXISTS usuarioPessoa(id INTEGER PRIMARY KEY AUTOINCREMENT, nome, sobrenome, idade, genero, escolaridade, areaAtuacao, email, senha)';
    return this.db.executeSql(sql, []);
  }

  insertUsuarioPessoa(nome: any, sobrenome: any, idade: any, genero: any, escolaridade: any, areaAtuacao: any, email: any, senha: any){
    let sql = 'INSERT INTO usuarioPessoa(nome, sobrenome, idade, genero, escolaridade, areaAtuacao, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    return this.db.executeSql(sql, [nome, sobrenome, idade, genero, escolaridade, areaAtuacao, email, senha]);
  }
}
