// Importa o service responsável por buscar os agendamentos do dia.
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"

//  Importa a função responsavel por separar os agendamentos por período.
import { schedulesByPeriods } from "./periods.js"

// Importa a função responsavel por renderizar os agendamentos na tela.
import { schedulesShow } from "./show.js"

// Função responsável por carregar os agendamentos da data selecionada 
export async function schedulesLoad({ date }) {

  // Busca a lista de agendamentos da data informada
  const schedules = await scheduleFetchByDay({ date })

  // Separa os agendamentos por periodo
  const periods = schedulesByPeriods(schedules)

  // Envia os periodos organizados para a função de renderização
  schedulesShow({ periods })
}