import { Mesa } from "./Mesa"

export class Reserva {
    private mesa: Mesa;
    private dataHora: Date;

    constructor(mesa: Mesa, dataHora: Date) {
        this.mesa = mesa;
        this.dataHora = dataHora;
    }

    getMesa(): Mesa {
        return this.mesa;
    }

    getDataHora(): Date {
        return this.dataHora;
    }
}