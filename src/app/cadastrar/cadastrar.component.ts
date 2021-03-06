import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario:Usuario = new Usuario
  confirmeSenha:string
  tipoUser:string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){

    window.scroll(0,0)
  }

  confirmSenha(event:any){
    
      this.confirmeSenha = event.target.value
  }

  tipoUsuario(event:any){

      this.tipoUser = event.target.value
  }

  cadastrar(){

      this.usuario.tipo = this.tipoUser

      if(this.usuario.senha != this.confirmeSenha){
          alert ('Uma das senhas está incorreta!')
      }else {

        this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
          this.usuario = resp
          this.router.navigate(['/entrar'])
          alert('Usuário cadastrado com sucesso!')
        } )
      }
  }
}
