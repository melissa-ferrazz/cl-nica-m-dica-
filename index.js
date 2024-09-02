let consultas = [];
function adicionarConsulta(paciente, medico, data, hora) {
   
    const novaConsulta = {
        paciente: paciente,
        medico: medico,
        data: data,
        hora: hora
    };

    return novaConsulta;
}

const consulta1 = adicionarConsulta('João Silva', 'Dr. Ana Souza', '2024-06-25', '14:30');

console.log('Consulta adicionada:');
console.log(consulta1);


function adicionarConsulta(paciente, medico, data, hora) {
    const novaConsulta = {
        paciente: paciente,
        medico: medico,
        data: data,
        hora: hora
    };

    consultas.push(novaConsulta);
}

function listarConsultas() {
    console.log('Consultas agendadas:');
    consultas.forEach((consulta, index) => {
        console.log(`Consulta ${index + 1}:`);
        console.log(`Paciente: ${consulta.paciente}`);
        console.log(`Médico: ${consulta.medico}`);
        console.log(`Data: ${consulta.data}`);
        console.log(`Hora: ${consulta.hora}`);
        console.log('----------------');
    });
}

adicionarConsulta('João Silva', 'Dr. Ana Souza', '2024-06-25', '14:30');
adicionarConsulta('Maria Santos', 'Dr. Carlos Ferreira', '2024-07-02', '10:00');
adicionarConsulta('Pedro Oliveira', 'Dra. Renata Lima', '2024-07-10', '16:15');

listarConsultas();


function adicionarConsulta(paciente, medico, data, hora) {
    const novaConsulta = {
        paciente: paciente,
        medico: medico,
        data: data,
        hora: hora
    };

    consultas.push(novaConsulta);
}

function listarConsultas() {
    console.log('Consultas agendadas:');
    consultas.forEach((consulta, index) => {
        console.log(`Consulta ${index + 1}:`);
        console.log(`Paciente: ${consulta.paciente}`);
        console.log(`Médico: ${consulta.medico}`);
        console.log(`Data: ${consulta.data}`);
        console.log(`Hora: ${consulta.hora}`);
        console.log('----------------');
    });
}

function atualizarConsulta(indiceConsulta, paciente, medico, data, hora) {
   
    if (indiceConsulta >= 0 && indiceConsulta < consultas.length) {
        
        consultas[indiceConsulta].paciente = paciente;
        consultas[indiceConsulta].medico = medico;
        consultas[indiceConsulta].data = data;
        consultas[indiceConsulta].hora = hora;

        console.log(`Consulta ${indiceConsulta + 1} atualizada.`);
    } else {
        console.log('Índice de consulta inválido.');
    }
}

adicionarConsulta('João Silva', 'Dr. Ana Souza', '2024-06-25', '14:30');
adicionarConsulta('Maria Santos', 'Dr. Carlos Ferreira', '2024-07-02', '10:00');
adicionarConsulta('Pedro Oliveira', 'Dra. Renata Lima', '2024-07-10', '16:15');

listarConsultas();

atualizarConsulta(1, 'Maria Santos', 'Dr. João Pereira', '2024-07-02', '11:00');

listarConsultas();

function adicionarConsulta(paciente, medico, data, hora) {
    const novaConsulta = {
        paciente: paciente,
        medico: medico,
        data: data,
        hora: hora
    };

    consultas.push(novaConsulta);
}

function listarConsultas() {
    console.log('Consultas agendadas:');
    consultas.forEach((consulta, index) => {
        console.log(`Consulta ${index + 1}:`);
        console.log(`Paciente: ${consulta.paciente}`);
        console.log(`Médico: ${consulta.medico}`);
        console.log(`Data: ${consulta.data}`);
        console.log(`Hora: ${consulta.hora}`);
        console.log('----------------');
    });
}

function cancelarConsulta(indiceConsulta) {
    if (indiceConsulta >= 0 && indiceConsulta < consultas.length) {
        consultas.splice(indiceConsulta, 1);
        console.log(`Consulta ${indiceConsulta + 1} cancelada.`);
    } else {
        console.log('Índice de consulta invál====ido.');
    }
}

adicionarConsulta('João Silva', 'Dr. Ana Souza', '2024-06-25', '14:30');
adicionarConsulta('Maria Santos', 'Dr. Carlos Ferreira', '2024-07-02', '10:00');
adicionarConsulta('Pedro Oliveira', 'Dra. Renata Lima', '2024-07-10', '16:15');


listarConsultas();

cancelarConsulta(1);

listarConsultas();

