// Função responsavel por buscar os agendamentos de um dia especifico.
export async function scheduleFetchByDay({ date }) {

  // Retorna uma lista fixa de agendamentos simulando uma API
  return [
    {
      id: "1",
      tutor: "Ana Souza",
      pet: "Thor",
      phone: "(38) 99999-1111",
      service: "Banho e tosa",
      date,
      hour: "09:00",
    },
    {
      id: "2",
      tutor: "Carlos Lima",
      pet: "Mel",
      phone: "(38) 98888-2222",
      service: "Consulta veterinária",
      date,
      hour: "14:00",
    },
    {
      id: "3",
      tutor: "Fernanda Alves",
      pet: "Max",
      phone: "(38) 97777-3333",
      service: "Vacinação",
      date,
      hour: "20:00",
    }
  ]
}