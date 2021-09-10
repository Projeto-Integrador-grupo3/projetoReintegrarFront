import { Postagem } from "./Postagem"

export class Usuario{
        public id:number
        public nome:string
      //public dataNascimento:Date  //Perguntar para tia Jess sobre o localDate
        public genero:string
        public email:string
        public telefone:string
        public senha:string
        public tipo:string
        public foto:string
        public postagens: Postagem[]
}