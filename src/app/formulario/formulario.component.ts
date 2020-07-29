import { Component } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor() { }

  profissoes = ['Engenheiro', 'Professor', 'Químico'];

  pessoa: Pessoa = new Pessoa();


  salvar(pessoaForm): void {
    this.pessoa.nome = pessoaForm.value.nome;
    this.pessoa.fone = pessoaForm.value.fone;
    this.pessoa.email = pessoaForm.value.email;
    this.pessoa.profissao = pessoaForm.value.profissao;

    //console.log(`Nome: ${this.pessoa.nome}, fone: ${this.pessoa.fone}, email: ${this.pessoa.email}, profissao: ${this.pessoa.profissao}`)
    console.log(this.pessoa);
  }
}
