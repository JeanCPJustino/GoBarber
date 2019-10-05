require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    /* ESSAS CONFIGURAÇÕES DEFINEM A PADRONIZAÇÃO DE NOMENCLATURA DE CRIAÇÃO
       DE TABELAS E COLUNAS UTILIZANDO O UNDERSCORED, OU SEJA, SE EU POSSUIR UM MODEL
       CHAMADO DE UserGroup, O SEQUELIZE IRÁ CRIAR UMA TABELA COM O NOME user_groups
       (CAIXA BAIXA SEPARADA POR UNDERLINES) E NÃO UserGroups COMO É O PADRÃO (CAMMEL CASE) */
    underscored: true, // Responsável pela configuração dos nomes das tabelas
    underscoredAll: true, // Responsável pela configuração das colunas das tabelas
  },
};
