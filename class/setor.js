class Setor {
    Id;
    Nome;

    constructor(Id, Nome) {
        this.Id = Id;
        this.Nome = Nome;
    }

    getId() {
        return this.Id;
    }
    getNome() {
        return this.Nome;
    }

    setId(Id) {
        this.Id = Id;
    }

    setNome(Nome) {
        this.Nome = Nome;
    }

}