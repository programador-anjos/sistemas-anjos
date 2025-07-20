import {Component, inject, OnInit} from '@angular/core';
import {Sistema} from "../../../../models/Sistema";
import {SelectItem} from "primeng/api";
import {ArmazenamentoService} from "../../../../services/ArmazenamentoService";
import {ToastService} from "../../../../services/ToastService";
import {Usuario} from "../../../../models/Usuario";
import { plainToInstance } from 'class-transformer';

@Component({
  selector: 'app-configuracoes-component',
  templateUrl: './configuracoes.component.html',
  standalone: false
})
export class ConfiguracoesComponent implements OnInit {

  sistema: Sistema = new Sistema();

  visible = false;

  permissoes: SelectItem[] = [
    // {
    //   label: 'Clientes',
    //   value: 'pi pi-users',
    //   items: [
        {label: 'Visualizar menu de clientes', value: 'VER_CLIENTES'},
        {label: 'Cadastrar clientes', value: 'CADASTRAR_CLIENTES'},
        {label: 'Alterar clientes', value: 'ALTERAR_CLIENTES'},
        {label: 'Deletar clientes', value: 'DELETAR_CLIENTES'},
    //   ]
    // },
    // {
    //   label: 'Produtos',
    //   value: 'pi pi-box',
    //   items: [
        {label: 'Visualizar menu de produtos', value: 'VER_PRODUTOS'},
        {label: 'Cadastrar produtos', value: 'CADASTRAR_PRODUTOS'},
        {label: 'Alterar produtos', value: 'ALTERAR_PRODUTOS'},
        {label: 'Deletar produtos', value: 'DELETAR_PRODUTOS'},
    //   ]
    // },
    // {
    //   label: 'Vendas',
    //   value: 'pi pi-dollar',
    //   items: [
        {label: 'Visualizar menu de vendas', value: 'VER_VENDAS'},
        {label: 'Cadastrar vendas', value: 'CADASTRAR_VENDAS'},
        {label: 'Alterar vendas', value: 'ALTERAR_VENDAS'},
        {label: 'Deletar vendas', value: 'DELETAR_VENDAS'},
    //   ]
    // },
    // {
    //   label: 'Painel',
    //   value: 'pi pi-chart-bars',
    //   items: [
        {label: 'Visualizar menu painel', value: 'VER_PAINEL'},
    //   ]
    // },
    // {
    //   label: 'Configurações',
    //   value: 'pi pi-cog',
    //   items: [
        {label: 'Configurar formulário de cliente', value: 'CONFIGURAR_CLIENTES'},
        {label: 'Configurar formulário de produtos', value: 'CONFIGURAR_PRODUTOS'},
      // ]
    // },
  ];

  usuarioSelecionado: Usuario = new Usuario();

  armazenamentoService = inject(ArmazenamentoService);
  toastService = inject(ToastService);

  temaEscuro = false;

  ngOnInit(): void {
    // @ts-ignore
    this.sistema = this.armazenamentoService.sistema();
    this.armazenamentoService.observarTema.subscribe(temaEscuro => this.temaEscuro = temaEscuro);
  }

  salvar() {
    this.armazenamentoService.armazenarSistema(this.sistema);
    this.armazenamentoService.armazenarUsuario(this.sistema.usuarios[0]);
    this.toastService.sucesso('Dados salvos com sucesso');
  }

  abrirWhatsapp(telefone: string): void {
    window.open('https://wa.me/send?phone=55' + telefone?.replace(/\D/g, ''));
  }

  protected readonly Usuario = Usuario;
}
