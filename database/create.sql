create schema elivros;

create table elivros.clientes (
    cli_id serial primary key,
    cli_pnome varchar(255) not null,
    cli_unome varchar(255) not null,
    cli_rg varchar(10) not null,
    cli_cpf varchar(12) not null,
    cli_email varchar(255) not null,
    cli_telefone varchar(35) not null,
    cli_senha varchar() not null
)

create table elivros.livros (
    liv_id serial primary key ,
    liv_valor num(10) not null,
    liv_nome varchar(255) not null,
    liv_descricao varchar(255) not null
)

create table elivros.pedidos (
    ped_id serial primary key ,
    ped_cli_id integer references elivros.clientes,
    ped_liv_id integer references elivros.livros,
    ped_data timestamp default now()
)