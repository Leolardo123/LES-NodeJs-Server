class Endereco extends EntidadeDominio{
    private tipo:string;
    private cep:string;
    private numero:number;
    private logradouro:string;
    private bairro:string;
    private cidade:string;
    private estado:string;

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getCep(): string {
        return this.cep;
    }

    public setCep(cep: string): void {
        this.cep = cep;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getLogradouro(): string {
        return this.logradouro;
    }

    public setLogradouro(logradouro: string): void {
        this.logradouro = logradouro;
    }

    public getBairro(): string {
        return this.bairro;
    }

    public setBairro(bairro: string): void {
        this.bairro = bairro;
    }

    public getCidade(): string {
        return this.cidade;
    }

    public setCidade(cidade: string): void {
        this.cidade = cidade;
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

}