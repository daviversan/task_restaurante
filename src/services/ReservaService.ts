import { Reserva } from "../entities/Reserva";
import { Mesa } from "../entities/Mesa";

export class ReservaService {
    static verificarDisponibilidadeMesa(
        numeroMesa: number, 
        dataHora: Date, 
        numeroPessoas: number, 
        mesas: Mesa[], 
        reservas: Reserva[]
    ): boolean {

        // Buscar a mesa pelo número
        const mesa = mesas.find(m => m.getId() === numeroMesa);
        if (!mesa) {
            console.log(`Mesa ${numeroMesa} não encontrada.`);
            return false;
        }

        // Verificar se a mesa suporta o número de pessoas
        if (numeroPessoas > mesa.getCapacidade()) {
            console.log(`A mesa ${numeroMesa} suporta no máximo ${mesa.getCapacidade()} pessoas.`);
            return false;
        }

        // Verificar se a mesa já está reservada para a data e hora especificadas
        const reservaExistente = reservas.some(reserva => 
            reserva.getMesa().getId() === numeroMesa && 
            reserva.getDataHora().getTime() === dataHora.getTime()
        );

        if (reservaExistente) {
            console.log(`Mesa ${numeroMesa} já está reservada para ${dataHora}.`);
            return false;
        }

        // Se passou em todas as verificações, a mesa está disponível
        return true;
    }
}
