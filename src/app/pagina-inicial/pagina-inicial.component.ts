import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listasPostagem: Postagem[]

  tema: Tema = new Tema()
  listasTema: Tema[]
  idTema: number
  temaInsert: Tema = new Tema()


  user: Usuario = new Usuario()
  idUser = environment.id

  key = 'data'
  reverse = true

  tituloPost: string
  nomeTema: string

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private auth: AuthService

  ) { }

  ngOnInit() {

    if (environment.token == '') {
      //alert('Sua sessão expirou, faça login novamente.')
      this.router.navigate(['/entrar'])
    }
    this.getAllTemas()
    this.getAllPostagens()

  }
  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listasTema = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listasPostagem = resp
    })
  }

  findByIdUser() {
    this.auth.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
      this.user = resp
      console.log(this.user)
    })
  }

  publicar() {
    this.temaInsert.id = this.idTema
    this.postagem.tema = this.temaInsert

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagens(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert("Postagem realizada com sucesso!")
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

  findByTituloPostagem() {

    if (this.tituloPost == '') {
      this.getAllPostagens()

    } else {
      this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[]) => {
        this.listasPostagem = resp
      })
    }

  }
  findByNomeTema() {
    if (this.nomeTema == '') {
      this.getAllTemas()
    } else {
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[]) => {
        this.listasTema = resp
      })
    }
  }

}
