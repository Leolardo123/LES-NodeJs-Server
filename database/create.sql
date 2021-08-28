create schema elivros;

create table elivros.clientes (
    cli_id serial primary key,
    cli_pnome varchar(255) not null,
    cli_unome varchar(255) not null,
    cli_sexo varchar(255) not null,
    cli_dtnascimento varchar(255) not null,
    cli_rg varchar(10) not null unique,
    cli_cpf varchar(12) not null unique,
    cli_email varchar(255) not null unique,
    cli_ddd varchar(3) not null,
    cli_telefone varchar(35) not null,
    cli_senha text not null,
    cli_ativo boolean default true
);

create table elivros.cupons_troca (
    cpt_id serial primary key ,
    cpt_valor numeric(10,2) not null,
    cpt_validade date not null
);

create table elivros.cupons_promocional (
    cpp_id serial primary key ,
    cpp_valor numeric(2,2) not null,
    cpp_validade date not null
);

create table elivros.livros (
    liv_id serial primary key ,
    liv_valor numeric(10,2) not null,
    liv_nome varchar(255) not null,
    liv_author Varchar(255) not null,
    liv_categoria varchar(255) not null,
    liv_ano varchar(10) not null,
    liv_titulo varchar(255) not null,
    liv_editora varchar(255) not null,
    liv_edicao varchar(255) not null,
    liv_isbn varchar(255) not null,
    liv_npaginas numeric(10,0) not null,
    liv_sinopse text not null,
    liv_altura numeric(10,2) not null,
    liv_peso numeric(10,2) not null,
    liv_profundidade numeric(10,2) not null,
    liv_descricao varchar(255) not null,
    liv_estoque numeric(10,2) not null,
    liv_custo numeric(10,2) not null,
    liv_mlucro numeric(1,2) not null,
    liv_preco numeric(10,2) not null,
    liv_cbarras varchar(13) not null,
    liv_ativo boolean default true
);

create table elivros.inativar_livro (
    ili_liv_id serial primary key integer references elivros.livros,
    ili_motivo text not null,
    ili_categoria varchar(255) not null
);

create table elivros.ativar_livro (
    ali_liv_id serial primary key integer references elivros.livros,
    ali_motivo text not null,
    ali_categoria varchar(255) not null
);

create table elivros.pedidos (
    ped_id serial primary key ,
    ped_cli_id integer references elivros.clientes,
    ped_valortotal numeric(10,2) not null,
    ped_data timestamp default now()
);

create table elivros.itenspedidos (
    ped_id serial primary key ,
    ped_liv_id integer references elivros.livros,
    ped_valor numeric(10,2) not null,
    ped_quantidade numeric(10,2) not null
);

create table elivros.cartao_bandeira (
    ban_nome varchar(255) not null
);

create table elivros.cartoes (
    car_id serial primary key ,
    car_cli_id integer references elivros.clientes,
    car_numero varchar(255) not null ,
    car_bandeira varchar(255) not null ,
    car_nome varchar(255) not null ,
    car_validade date not null
);

create table elivros.enderecos (
    end_id serial primary key ,
    end_tresidencia varchar(255) not null,
    end_tlogradouro varchar(255) not null,
    end_nome varchar(255) not null ,
    end_cli_id integer references elivros.clientes,
    end_cobranca boolean not null,
    end_entrega boolean not null,
    end_cep varchar(255) not null,
    end_numero varchar(255) not null,
    end_logradouro varchar(255) not null,
    end_complemento varchar(255),
    end_bairro varchar(255) not null,
    end_cidade varchar(255) not null,
    end_estado varchar(255) not null,
    end_pais varchar(255) not null,
    end_observacao text
);