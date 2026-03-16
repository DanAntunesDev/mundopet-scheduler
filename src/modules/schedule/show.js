// Seleciona os containers onde os agendamentos serão exibidos.
const morningList = document.querySelector("#period-morning")
const afternoonList = document.querySelector("#period-afternoon")
const nightList = document.querySelector("#period-night")


// Função responsavel por criar o item de agendamento
function scheduleItem(schedule) {

  // Cria o elemento de lista do agendamento
  const li = document.createElement("li")

  // Cria o elemente que exibirá o horário.
  const hour = document.createElement("strong")
  hour.textContent = schedule.hour

  // Cria o container com nome do pet e do tutor
  const petAndTutor = document.createElement("div")
  petAndTutor.classList.add("schedule-pet")

  // Cria o nome do pet
  const pet = document.createElement("strong")
  pet.textContent = schedule.pet

  // Cria o nome do tutor
  const tutor = document.createElement("span")
  tutor.textContent = `/${schedule.tutor}`

  // Adiciona pet e tutor dentro do mesmo bloco
  petAndTutor.append(pet, tutor)

  // Cria o texto da descrição do serviço
  const service = document.createElement("span")
  service.classList.add("schedule-service")
  service.textContent = schedule.service

  // Cria o botão de remover o agendamento
  const removeButton = document.createElement("button")
  removeButton.classList.add("schedule-remove")
  removeButton.textContent = "Remover agendamento"

  // Adiciona um atributo com o id do agendamento para futura remoção
  removeButton.setAttribute("data-id", schedule.id)

  // Monta a estrutura final do item
  li.append(hour, petAndTutor, service, removeButton)

  // Retorna o item pronto
  return li
}

// Função responsável por exibir os agendamentos na tela.
export function schedulesShow({ periods }) {

  // Limpa as listas antes de renderizar novamente
  morningList.innerHTML = " "
  afternoonList.innerHTML = " "
  nightList.innerHTML = " "

  // Percorre os agendamentos da manhã e adiciona cada item na lista
  periods.morning.forEach((schedule) => {
    const item = scheduleItem(schedule)
    morningList.appendChild(item)
  })

  // Percorre os agendamentos da tarde e adiciona cada item na lista
  periods.afternoon.forEach((schedule) => {
    const item = scheduleItem(schedule)
    afternoonList.appendChild(item)
  })

  // Percorre os agendamento da noite e adiciona cada item na lista
  periods.night.forEach((schedule) => {
    const item = scheduleItem(schedule)
    nightList.appendChild(item)
  })
} 