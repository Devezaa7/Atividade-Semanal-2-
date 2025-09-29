const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  }
];

// Desafio 1: Destructuring do primeiro usuário
const { nome, cidade } = usuarios[0];
console.log(`Nome: ${nome}, Cidade: ${cidade}`);

// ✅ Desafio 2: Novo array com spread + novo usuário
const usuariosDoNorte = [
  ...usuarios,
  {
    nome: "Ana",
    idade: 25,
    email: "ana@exemplo.com",
    cidade: "Manaus",
    interesses: ["Natureza", "Arte", "Culinária"]
  }
];
console.log(usuariosDoNorte);

// Desafio 3: Objeto atualizado da Beatriz
const beatrizAtualizada = {
  ...usuarios[1],
  email: "bia.dev@exemplo.com"
};
console.log(beatrizAtualizada);

// Desafio 4: Função com destructuring no parâmetro
function mostrarInteresses({ nome, interesses }) {
  console.log(`${nome} tem interesse em: ${interesses.join(", ")}.`);
}

mostrarInteresses(usuarios[0]);
mostrarInteresses(usuarios[1]);
mostrarInteresses(usuariosDoNorte[2]);