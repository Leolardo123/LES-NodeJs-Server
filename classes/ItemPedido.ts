import {EntidadeDominio} from './entidadeDominio';
import {Livro} from './Livro';

export class ItemPedido extends EntidadeDominio{
    private livro:Livro;
    private quantidade:number;
    private valor:number;

    public getLivro(): Livro {
        return this.livro;
    }

    public setLivro(livro: Livro): void {
        this.livro = livro;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    public setQuantidade(quantidade: number): void {
        this.quantidade = quantidade;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }

}