import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }
  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>("https://projetoreintegrar.herokuapp.com/postagem/", this.token)

  }
  getByIdPostagem(id: number): Observable <Postagem>{
  return this.http.get<Postagem>(`https://projetoreintegrar.herokuapp.com/postagem/${id}`, this.token)
  }

  getByTituloPostagem(titulo: string):Observable <Postagem[]>{
    return this.http.get<Postagem[]>(`https://projetoreintegrar.herokuapp.com/postagem/titulo/${titulo}`, this.token)
  }

  postPostagens(postagem: Postagem): Observable<Postagem> {
    console.log (postagem)
    return this.http.post<Postagem>("https://projetoreintegrar.herokuapp.com/postagem/", postagem, this.token)
  }
  putPostagem (postagem: Postagem): Observable <Postagem>{
    return this.http.put<Postagem>("https://projetoreintegrar.herokuapp.com/postagem/", postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://projetoreintegrar.herokuapp.com/postagem/${id}`, this.token)
  }
}
