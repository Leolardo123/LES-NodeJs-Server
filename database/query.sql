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

-- INSERT LIVROS
INSERT INTO
	elivros.livros(
		liv_valor,
		liv_nome,
		liv_autor,
		liv_categoria,
		liv_ano,
		liv_titulo,
		liv_editora,
		liv_edicao,
		liv_isbn,
		liv_npaginas,
		liv_sinopse,
		liv_altura,
		liv_peso,
		liv_profundidade,
		liv_descricao,
		liv_estoque,
		liv_custo,
		liv_mlucro,
		liv_preco,
		liv_cbarras,
		liv_ativo
	) 
	VALUES 
	(
		20.00,
		'Banco do Brasil',
		'Perluxo Clemente',
		'Politica',
		'2021',
		'Banco do Brasil',
		'Fundamental',
		'2021',
		'1124415512125',
		200,
		'e a historia de ...',
		19,
		82,
		22,
		'livro',
		10,
		5.00,
		0.50,
		20.00,
		'1243551666231',
		true
	)