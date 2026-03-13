// Função responsável por descobrir a qual periodo um horario pertence.
export function getPeriod(hour) {

  // Pegamos apenas a parte da hora antes dos dois pontos
  // Exemplo: "13:00" -> ["13","00"] -> pegamos o indice 0
  const hourNumber = Number(hour.split(":")[0])

  // Se o horario for até as 12h consideramos periodo da manha
  if (hourNumber <= 12 ) {
    return "morning"
  }

  // Se o horario for entre 13h e 18h consideramos periodo da tarde 
  if (hourNumber <=18 ) {
    return "afternoon"
  }

  // Qualquer horario depois disso será considerado noite
  return "night"
}