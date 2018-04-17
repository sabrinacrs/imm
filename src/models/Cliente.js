class Cliente {
    constructor(nome, email, cpfCnpj, endereco, numero, bairro, telefone, cep, cidade, uf) {
        this.nome = nome;
        this.email = email;
        this.cpfCnpj = cpfCnpj;
        this.endereco = endereco;
        this.numero = numero;
        this.bairro = bairro;
        this.telefone = telefone;
        this.cep = cep;
        this.cidade = cidade;
        this.uf = uf;
    }

    // constructor(nome, email) {
    //     this.nome = nome;
    //     this.email = email;
    //     this.cpfCnpj = '';
    //     this.endereco = '';
    //     this.numero = 0;
    //     this.bairro = '';
    //     this.telefone = '';
    //     this.cep = '';
    //     this.cidade = '';
    //     this.uf = '';
    // }

    // getNome() {
    //     return this.nome;
    // }

    // setNome(nome) {
    //     this.nome = nome;
    // }

    // getEmail() {
    //     return this.email;
    // }

    // setEmail(email) {
    //     this.email = email;
    // }

    // getSenha() {
    //     return this.senha;
    // }

    // setSenha(senha) {
    //     this.senha = senha;
    // }

    // getTelefone() {
    //     return this.telefone;
    // }

    // setTelefone(telefone) {
    //     this.telefone = telefone;
    // }

    // getCidade() {
    //     return this.cidade;
    // }

    // setCidade(cidade) {
    //     this.cidade = cidade;
    // }

    // getUf() {
    //     return this.uf;
    // }

    // setUf(uf) {
    //     this.uf = uf;
    // }

    // getCep() {
    //     return this.Cep;
    // }

    // setCep(cep) {
    //     this.cep = cep;
    // }

    // getLogradouro() {
    //     return this.logradouro;
    // }

    // setLogradouro(logradouro) {
    //     this.logradouro = logradouro;
    // }
}

module.exports = Cliente;