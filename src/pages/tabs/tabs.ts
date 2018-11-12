import { PerfilPage } from './../perfil/perfil';
import { VagasPage } from './../vagas/vagas';
import { EmpresasPage } from './../empresas/empresas';
import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { EventosPage } from '../eventos/eventos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PerfilPage;
  tab3Root = EmpresasPage;
  tab4Root = VagasPage;
  tab5Root = EventosPage;

  constructor() {

  }
}
