import { ReservaService } from "./services/ReservaService";
import { Mesa } from "./entities/Mesa";
import { Reserva } from "./entities/Reserva";

const mesas = [
    new Mesa(1, "coletiva", 4), 
    new Mesa(2, "individual", 2)
];

const reservas = [
    new Reserva(mesas[0], new Date("2025-04-01T19:00:00")) // Mesa 1 já reservada nesse horário
];

console.log(
    ReservaService.verificarDisponibilidadeMesa(1, new Date("2025-04-01T19:00:00"), 3, mesas, reservas)
); // ❌ false (já reservada)

console.log(
    ReservaService.verificarDisponibilidadeMesa(2, new Date("2025-04-01T20:00:00"), 2, mesas, reservas)
); // ✅ true (sem reservas e dentro da capacidade)
