// logins.js - controle de usuários para acesso aos módulos de frota
// Cada usuário tem uma lista de módulos autorizados em `modulos`.
// Chaves de módulo usadas no index:
//  - "1CIA","2CIA","3CIA","4CIA","5CIA","FT","EM","BTL"

export const usuariosAutorizados = [
  // Acesso total (para testes / administração)
  {
    login: "Fenille",
    senha: "140965",
    modulos: ["1CIA","2CIA","3CIA","4CIA","5CIA","FT","EM","BTL"]
  },

  // Cias individuais
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

  // Força Tática
  {
    login: "ft",
    senha: "ft123",
    modulos: ["FT"]
  },

  // Estado Maior
  {
    login: "em",
    senha: "em123",
    modulos: ["EM"]
  },

  // Batalhão (pode ver todos os painéis, inclusive EM)
  {
    login: "btl",
    senha: "btl123",
    modulos: ["1CIA","2CIA","3CIA","4CIA","5CIA","FT","EM","BTL"]
  }
];
