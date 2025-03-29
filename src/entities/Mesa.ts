export class Mesa {

    private id: number;
    private capacidade: number;

    constructor(id: number, tipo: string, capacidade: number) {
        this.id = id;
        this.capacidade = capacidade;
    }

    getId(): number {
        return this.id;
    }

    getCapacidade(): number {
        return this.capacidade;
    }
}
