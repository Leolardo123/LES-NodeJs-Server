class Pedido{
    private itens:Array<ItemPedido>;
    private valor:number;
    private data:Date;

    public getItens(): Array<ItemPedido> {
        return this.itens;
    }

    public setItens(itens: Array<ItemPedido>): void {
        this.itens = itens;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }

    public getData(): Date {
        return this.data;
    }

    public setData(data: Date): void {
        this.data = data;
    }

}