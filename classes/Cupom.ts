import {EntidadeDominio} from './entidadeDominio';

export class Cupom extends EntidadeDominio{
    private valor: number;
    private validade:Date;

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }

    public getValidade(): Date {
        return this.validade;
    }

    public setValidade(validade: Date): void {
        this.validade = validade;
    }

}