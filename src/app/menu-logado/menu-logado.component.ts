import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-logado',
  templateUrl: './menu-logado.component.html',
  styleUrls: ['./menu-logado.component.css']
})
export class MenuLogadoComponent implements OnInit {

  nome=environment.nome
  foto=environment.foto

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    console.log(environment.foto)
    console.log(this.foto)
  }

  sobreNos(){
    this.router.navigate(['/home'])
  }

  contatoFn(){
    this.router.navigate(['/home'])
  }
  
  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
    environment.email=''
    environment.telefone=''
    environment.genero=''
  }

}
