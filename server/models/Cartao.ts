class Cartao extends EntidadeDominio{
    private numero: number;
    private bandeira:string;
    private nome:string;
    private validade:Date;

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getBandeira(): string {
        return this.bandeira;
    }

    public setBandeira(bandeira: string): void {
        this.bandeira = bandeira;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getValidade(): Date {
        return this.validade;
    }

    public setValidade(validade: Date): void {
        this.validade = validade;
    }

}