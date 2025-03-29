# task_restaurante

## Arquitetura da solução
![Diagrama de classes](src\assets\diagrama_classes_restaurante.drawio.png)

O diagrama de classes contém as seguintes entidades:

1. **Mesa**
- Atributos:
    - id
    - capacidade
- Métodos:
    - `getId()`: Retorna o id da mesa
    - `getCapacidade()`: Retorna a capacidade da mesa
    
2. **Reserva**
- Atributos:
    - mesa
    - dataHora
- Métodos:
    - `getMesa()`
    - `getDataHora()`

3. **ReservaService**
- Atributos
    - numeroMesa
    - dataHora
    - numeroPessoas
    - mesas
    - reservas
- Métodos:
    - `getMesa()`
    - `getDataHora()`
    - `getTime()`
    - `getId()`
    - `getCapacidade()`

As entidades Mesa e Reserva foram declarados dentro da pasta `entities` e representam as classes de mesmo nome, com seus respectivos atributos e métodos. Foi estabelecido uma relação de 1 para 1 entre ambas, para fins de simplificação, segundo a lógica de que uma reserva só pode conter uma mesa e uma mesa só pode estar contida em uma reserva por vez. A entidade ReservaService foi declarada dentro da pasta `services`, e ela é responsável por definir a lógica de reserva. No diagrama de classes, ela funciona como uma tabela intermediária, herdando métodos e atributos das outras classes mencionadas anterioemente

## Execução
O código de execução é definido em `app.ts`, no diretório `src`. Esse arquivo basicamente importa as classes definidas e cria novas instâncias de Mesa e Reserva. Ao final, retorna-se uma situação em que há uma reserva disponível e outra indisponível, com seus respectivos valores booleanos, true e false. O código é executado com o comando `npx ts-node src/app.ts`

**Resultado esperado:** 
Mesa 1 já está reservada para Tue Apr 01 2025 19:00:00 GMT-0300 (Horário Padrão de Brasília).
false
true