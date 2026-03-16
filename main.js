import "./src/styles/global.css"
import "./src/styles/variables.css"
import "./src/styles/layout.css"
import "./src/styles/schedule.css"
import "./src/styles/modal.css"
import "./src/styles/form.css"

// Importa a função responsável por carregar os agendamentos
import { schedulesLoad } from "./src/modules/schedule/load.js"

// Define uma data inicial fixa para teste
const date = "2026-03-14"

// Carrega os agendamentos da data definida
schedulesLoad({ date })