--CLIENT COMMANDS

--SELECT
select * from elivros.clientes

-- INSERT
insert into elivros.clientes (
    cli_pnome,
    cli_unome,
    cli_rg,
    cli_cpf,
    cli_email,
    cli_telefone,
    cli_senha,
    cli_ativo
)
values (
    'Jefferson',
    'Fukamizu',
    '1234567890',
    '12345678910',
    'teste1@gmail.com',
    '1147911943',
    'teste',
    true
)

insert into elivros.clientes (
    cli_pnome,
    cli_unome,
    cli_rg,
    cli_cpf,
    cli_email,
    cli_telefone,
    cli_senha,
    cli_ativo
)
values (
    'Leonardo',
    'Fukamizu',
    '1234567891',
    '12345678911',
    'teste2@gmail.com',
    '1147911942',
    'teste',
    true
)
