// logins.js - controle de usuários por módulo
// Cada usuário pode ter acesso a um ou mais painéis (modulos).
// Chaves possíveis de módulo: "1CIA","2CIA","3CIA","4CIA","5CIA","FT","BTL"

export const usuariosAutorizados = [
  // Acesso geral (para testes)
  {
    login: "Fenille",
    senha: "140965",
    modulos: ["1CIA","2CIA","3CIA","4CIA","5CIA","FT","BTL"]
  },

  // Exemplos de logins individuais por módulo
  {
    login: "1cia",
    senha: "1cia123",
    modulos: ["1CIA"]
  },
  {
    login: "2cia",
    senha: "2cia123",
    modulos: ["2CIA"]
  },
  {
    login: "3cia",
    senha: "3cia123",
    modulos: ["3CIA"]
  },
  {
    login: "4cia",
    senha: "4cia123",
    modulos: ["4CIA"]
  },
  {
    login: "5cia",
    senha: "5cia123",
    modulos: ["5CIA"]
  },
  {
    login: "ft",
    senha: "ft123",
    modulos: ["FT"]
  },
  {
    login: "btl",
    senha: "btl123",
    modulos: ["BTL"]
  }
];
