require('dotenv').config();
const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const url = process.env.MONGO_URI;
const client = new MongoClient(url, {
    tls: true,
    tlsAllowInvalidCertificates: true,
});

let dbo;
client.connect()
    .then(() => {
        dbo = client.db("DataBase");
        console.log("Conectado ao MongoDB com sucesso!");
    })
    .catch(err => console.error("Erro ao conectar ao MongoDB:", err));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.post('/cadastrar_aulas', async (req, res) => {
    try {
        const { usuario, cpf, horario } = req.body;
        const colecao = dbo.collection("Agendamentos");

        const vagasOcupadas = await colecao.countDocuments({ horario: horario });
        if (vagasOcupadas >= 4) {
            return res.send("Turma cheia! Este horário já atingiu o limite de 4 alunos.");
        }

        const jaAgendado = await colecao.findOne({ cpf: cpf, horario: horario });
        if (jaAgendado) {
            return res.send("Você já possui um agendamento para este horário!");
        }

        await colecao.insertOne({ usuario, cpf, horario: horario });
        res.send("Aula agendada com sucesso!");
    } catch (erro) {
        console.error(erro);
        res.status(500).send("Erro ao processar o agendamento no servidor.");
    }
});


app.listen(PORT, () => {
    console.log(`============= Servidor rodando em http://localhost:${PORT} 😁 =============`);
});