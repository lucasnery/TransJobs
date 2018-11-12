import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LinkedIn } from '@ionic-native/linkedin';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { EmpresasPage } from '../pages/empresas/empresas';
import { EventosPage } from '../pages/eventos/eventos';
import { LoginPage } from '../pages/login/login';
import { VagasPage } from '../pages/vagas/vagas';
import { PerfilPage } from '../pages/perfil/perfil';
import { CadastroEmpresaPage } from '../pages/cadastro-empresa/cadastro-empresa';
import { SQLite } from '@ionic-native/sqlite';
import { TasksServiceProvider } from '../providers/tasks-service/tasks-service';
import { DatabaseProvider } from '../providers/database/database';

@NgModule({
  declarations: [
    MyApp,
    CadastroPage,
    EmpresasPage,
    EventosPage,
    PerfilPage,
    LoginPage,
    VagasPage,
    HomePage,
    TabsPage,
    CadastroEmpresaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroPage,
    EmpresasPage,
    EventosPage,
    LoginPage,
    VagasPage,
    PerfilPage,
    HomePage,
    TabsPage,
    CadastroEmpresaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LinkedIn,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TasksServiceProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
