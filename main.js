// Importa a função responsável por carregar os agendamentos.
import { schedulesLoad } from "./src/modules/schedule/load.js"

// Define uma data inicia fixa para teste.
const date = " 2026-03-16"

// Carrega os agendamentos da data definida.
schedulesLoad({ date })