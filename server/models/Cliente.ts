class Cliente extends EntidadeDominio{
    private primeiro_nome:string;
    private ultimo_nome:string;
    private rg:string;
    private cpf:string;
    private email:string;
    private telefone:string;
    private senha:string;
    private ativo:boolean;
    private cartoes:Array<Cartao>;

    public getCartoes(): Array<Cartao> {
        return this.cartoes;
    }

    public setCartoes(cartoes: Array<Cartao>): void {
        this.cartoes = cartoes;
    }


    public getPrimeiro_nome(): string {
        return this.primeiro_nome;
    }

    public setPrimeiro_nome(primeiro_nome: string): void {
        this.primeiro_nome = primeiro_nome;
    }

    public getUltimo_nome(): string {
        return this.ultimo_nome;
    }

    public setUltimo_nome(ultimo_nome: string): void {
        this.ultimo_nome = ultimo_nome;
    }

    public getRg(): string {
        return this.rg;
    }

    public setRg(rg: string): void {
        this.rg = rg;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getTelefone(): string {
        return this.telefone;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    public getSenha(): string {
        return this.senha;
    }

    public setSenha(senha: string): void {
        this.senha = senha;
    }

    public isAtivo(): boolean {
        return this.ativo;
    }

    public setAtivo(ativo: boolean): void {
        this.ativo = ativo;
    }


    
}