// Importa a função responsável por descobrir o período com base no horario.
import { getPeriod } from "../../utils/get-period.js"

// Função responsavel por separar os agendamentos por periodo.
export function schedulesByPeriods(schedules) {

  // Cria um objeto com os tres periodos disponiveis.
  const periods = {
    morning: [],
    afternoon: [],
    night: []
  }

  // Percorre a lista de agendamentos recebida.
  schedules.forEach((schedule) => {

    // Descobre em qual periodo o horario do agendamento pertence.
    const period = getPeriod(schedule.hour)

    // Adiciona o agendamento no array correto dentro do objeto periods.
    periods[period].push(schedule)
  })

  // Retorna os agendamentos agrupadas por periodo.
  return periods
}