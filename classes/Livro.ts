import {EntidadeDominio} from './entidadeDominio';

export class Livro extends EntidadeDominio{
    private nome:string;
    private descricao:string;
    private valor:number;
    private estoque:number;
    private ativo:boolean

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }

    public getEstoque(): number {
        return this.estoque;
    }

    public setEstoque(estoque: number): void {
        this.estoque = estoque;
    }

    public isAtivo(): boolean {
        return this.ativo;
    }

    public setAtivo(ativo: boolean): void {
        this.ativo = ativo;
    }


    
}