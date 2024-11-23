const quizQuestions = [
    {
        question: "Qual foi o primeiro filme da Disney a ser completamente produzido com animação digital?",
        options: ["O Rei Leão", "Toy Story", "O Galinho Chicken Little", "A Fera e o Rei","Moana"],
        correctAnswer: 1, 
    },
    {
        question: "Qual é o nome do personagem que se transforma em um cavalo com asas no filme 'Hércules'?",
        options: ["Falkor", "Pegasus", "Zeus", "Hades","Mégara"],
        correctAnswer: 1, 
    },
    {
        question: "Quem foi o primeiro personagem de animação da Disney a receber uma estrela na Calçada da Fama?",
        options: ["Mickey Mouse", "Pato Donald", "Pateta", "Bambi","Minie Mouse"],
        correctAnswer: 0, 
    },
    {
        question: "Em 'Branca de Neve e os Sete Anões', qual é o nome do anão que usa óculos?",
        options: ["Dunga", "Zé", "Mestre", "Soneca","Zangado"],
        correctAnswer: 2, 
    },
    {
        question: "Nos filmes de Lilo e Stitch, qual é o número da experiência genética que representa o próprio Stitch?",
        options: ["522", "625", "624", "626","627"],
        correctAnswer: 3, 
    },
    {
        question: "Em 'Pinóquio', qual é o nome do homem que cria o boneco Pinóquio?",
        options: ["Giuseppe", "Geppetto", "Giovanni", "Giacomo","Giorgio"],
        correctAnswer: 1, 
    },
    {
        question: "Qual é o vilão foi o responsável por um evento desastroso conhecido como 'Estranhagedon'?",
        options: ["Bill Cipher", "Comandante Lyle Tiberius Rourke", "Scar", "John Silver","Gaston"],
        correctAnswer: 0, 
    },
    {
        question: "Em 'O Rei Leão', qual é o nome do lugar onde Simba vive após fugir do reino?",
        options: ["Vale da Eternidade", "Caverna da Savana", "Vale dos Elefantes", "Hakuna Matata","Terra dos exilados"],
        correctAnswer: 3, 
    },
    {
        question: "Qual foi o primeiro filme de animação a ser indicado ao Oscar de Melhor Filme?",
        options: ["Toy Story", "O Rei Leão", "A Bela e a Fera", "Up – Altas Aventuras","Enrolados"],
        correctAnswer: 2, 
    },
    {
        question: "Em 'Peter Pan', qual é o nome do capitão dos piratas?",
        options: ["Barbossa", "Capitão Gancho", "Barba Negra", "John Silver","Davy Jones"],
        correctAnswer: 1,
    },
    {
        question: "Qual foi o primeiro filme de animação da Disney a usar a técnica de multiplano?",
        options: ["Branca de Neve e os Sete Anões", "Pinóquio", "Fantasia", "O Rei Leão","A Dama e o Vagabundo"],
        correctAnswer: 0, 
    },
    {
        question: "Em 'Atlantis - O Reino Perdido', qual é o nome da língua antiga falada pelos atlantes?",
        options: ["Atlanteano", "Kolosiano", "Zintal", "Linguagem de Gaya", "Atlântico"],
        correctAnswer: 0, 
    },
    {
        question: "Em 'A Bela e a Fera', quem é o criador da rosa encantada?",
        options: ["A Feiticeira", "O Príncipe", "Maurice", "Gastón","A Bela"],
        correctAnswer: 0, 
    },
    {
        question: "Na série animada de 'Gravity Falls', quem escreveu os diários perdidos?",
        options: ["Stanford Pines", "Soos Ramirez", "Dipper Pines", "Stanley Pines","Mabel Pines"],
        correctAnswer: 0, 
    },
    {
        question: "Qual é o nome do pintor que criou os cenários para o filme 'Fantasia' (1940)?",
        options: ["Salvador Dalí", "Thomas Kinkade", "Henri Matisse", "Walt Disney e sua equipe", "Michelangelo"],
        correctAnswer: 3, 
    },
    {
        question: "Em 'O Corcunda de Notre-Dame', quem é o responsável por adotar Quasímodo?",
        options: ["Claude Frollo", "Phoebus", "Esmeralda", "Gargoyle","Zephyr"],
        correctAnswer: 0, 
    },
    {
        question: "Em 'Planeta do Tesouro', qual é o nome da nave que Jim Hawkins usa para viajar até o planeta do Tesouro?",
        options: ["RLS Legacy", "Star Voyager", "The Triton", "Galactic Express","Galactic Voyage"],
        correctAnswer: 0, 
    },
    {
        question: "Em 'Cinderela', o que Cinderela perde durante a fuga do castelo?",
        options: ["Uma luva", "Um sapato", "Uma tiara", "Um vestido","Uma saia"],
        correctAnswer: 1, 
    },
    {
        question: "Em 'Peter Pan', qual é o nome da ilha onde Peter e os Meninos Perdidos vivem?",
        options: ["Terra do Nunca", "Terra dos Sonhos", "Ilha do Tesouro", "País das Maravilhas","Planeta do Tesouro"],
        correctAnswer: 0, 
    },
    {
        question: "No filme 'Pocahontas', qual é o nome do espírito que guia Pocahontas?",
        options: ["Vovó Willow", "Espírito da Floresta", "Grande Águia", "Mãe Natureza","Rainha Natureza"],
        correctAnswer: 0, 
    },
    {
        question: "Qual é a raça de cachorro da Dama em 'Dama e o Vagabundo'?",
        options: ["Lulu-da-pomerânia", "Cocker Spaniel", "Beagle", "Pastor Alemão","Yorkshire terrier"],
        correctAnswer: 1, 
    },
    {   imagesrc: "carioca.jpg", 
        question: "Qual é a pronúncia, escrita e nome completo desse personagem?",
        options: ["Zezé Carioca", "Zéca Carioca", "Zé Carioca", "José Carioca","Zézinho Carioca"],
        correctAnswer: 3, // Essa pergunta foi elaborada para ser uma pegadinha
    },

    {
        question: "Qual era a função do Grilo?",
        options: ["Ser o coração do Pinóquio", "Ser a alma do Pinóquio", "Ser a humanidade do Pinóquio", "Ser a gentileza de Pinóquio","Ser a consciência do Pinóquio"],
        correctAnswer: 4, 
    },

    {
        question: "O Tarzan foi criado por...?",
        options: ["Lobos", "Ursos", "Gorilas", "Macacos","Leões"],
        correctAnswer: 2, // Essa pergunta foi elaborada para ser uma pegadinha
    },

    {
        question: "Em Encanto, quem era capaz de ver o Futuro?",
        options: ["Mirabel Madrigal", "Isabela Madrigal", "Bruno Madrigal", "Luisa Madrigal","Dolores Madrigal"],
        correctAnswer: 2, 
    },
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 300;
let timerInterval;

// Função para embaralhar as perguntas
function shuffleQuestions() {
    for (let i = quizQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]];
    }
}

// Função para embaralhar respostas
function shuffleAnswers() {
    quizQuestions.forEach(question => {
        const correctAnswer = question.correctAnswer;
        for (let i = question.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [question.options[i], question.options[j]] = [question.options[j], question.options[i]];

            if (question.correctAnswer === i) {
                question.correctAnswer = j;
            } else if (question.correctAnswer === j) {
                question.correctAnswer = i;
            }
        }
    });
}

// Função para remover imagens existentes
function removeExistingImages() {
    const existingImage = document.querySelector('.question-image');
    if (existingImage) {
        existingImage.remove();
    }
}

// Função para iniciar o quiz
function IniciarQuiz() {
    shuffleQuestions();
    shuffleAnswers();

    document.getElementById('botao').style.display = 'none';
    document.getElementById('contador').style.display = 'block';
    document.getElementById('question-container').classList.remove('hidden');
    loadQuestion();
    startTimer();
}

// Função para carregar a pergunta
function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];

    // Remove imagens existentes antes de carregar nova pergunta
    removeExistingImages();

    document.getElementById('question-text').textContent = question.question;

    const answersContainer = document.getElementById('answers-container');
    // Limpa as respostas anteriores
    answersContainer.innerHTML = ''; 

    // Adiciona as opções de resposta
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        answersContainer.appendChild(button);
    });

    // Verifica se a pergunta tem uma imagem associada
    if (question.imagesrc) {
        const imagePath = `./images/${question.imagesrc}`;
        const imageElement = document.createElement('img');
        imageElement.src = imagePath;
        imageElement.alt = "Imagem da Pergunta";
        imageElement.classList.add("question-image");

        // Fallback para erro no carregamento
        imageElement.onerror = function () {
            imageElement.src = './images/default.jpg';
        };

        const questionContainer = document.getElementById('question-container');
        questionContainer.insertBefore(imageElement, answersContainer);
    }
}

// Função para verificar a resposta
function checkAnswer(selectedIndex) {
    const correctIndex = quizQuestions[currentQuestionIndex].correctAnswer;

    // Remove imagem ao verificar resposta
    removeExistingImages();

    if (selectedIndex === correctIndex) {
        score++;
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

// Função para mostrar os resultados
function showResults() {
    document.getElementById('contador').style.display = 'none';
    document.getElementById('question-container').classList.add('hidden');
    const resultContainer = document.getElementById('result');
    resultContainer.classList.remove('hidden');
    document.getElementById('score').textContent = `Você acertou ${score} de ${quizQuestions.length} perguntas.`;
    document.getElementById('reiniciar').style.display = 'inline-block';

    // Remove imagem ao finalizar o quiz
    removeExistingImages();
}

// Função para reiniciar o quiz
function reiniciarQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 300;

    document.getElementById('reiniciar').style.display = 'none';
    document.getElementById('result').classList.add('hidden');
    document.getElementById('contador').style.display = 'block';
    document.getElementById('botao').style.display = 'inline-block';

    clearInterval(timerInterval);
    document.getElementById('timer').textContent = `${timeLeft}s`;
}

// Função para iniciar o contador
function startTimer() {
    timerInterval = setInterval(() => {
        document.getElementById('timer').textContent = `${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults();
        } else {
            timeLeft--;
        }
    }, 1000);
}

// Código em modo comentário de programador, esse código não tem funcionalidades no script e não causará efeitos no resultado final!

//GABARITO

// 1 - Qual foi o primeiro filme da Disney a ser completamente produzido com animação digital?

// Resposta correta: Toy Story
// 2 - Qual é o nome do personagem que se transforma em um cavalo com asas no filme 'Hércules'?

// Resposta correta: Pegasus
// 3 - Quem foi o primeiro personagem de animação da Disney a receber uma estrela na Calçada da Fama?

// Resposta correta: Mickey Mouse
// 4 - Em 'Branca de Neve e os Sete Anões', qual é o nome do anão que usa óculos?

// Resposta correta: Mestre
// 5 - Nos filmes de Lilo e Stitch, qual é o número da experiência genética que representa o próprio Stitch?

// Resposta correta: 626
// 6 -  Em 'Pinóquio', qual é o nome do homem que cria o boneco Pinóquio?

// Resposta correta: Geppetto
// 7 - Qual é o vilão foi o responsável por um evento desastroso conhecido como 'Estranhagedon'?

// Resposta correta: Bill Cipher
// 8 - Em 'O Rei Leão', qual é o nome do lugar onde Simba vive após fugir do reino?

// Resposta correta: Hakuna Matata
// 9 - Qual foi o primeiro filme de animação a ser indicado ao Oscar de Melhor Filme?

// Resposta correta: A Bela e a Fera
// 10 - Em 'Peter Pan', qual é o nome do capitão dos piratas?

// Resposta correta: Capitão Gancho
// 11 - Qual foi o primeiro filme de animação da Disney a usar a técnica de multiplano?

// Resposta correta: Branca de Neve e os Sete Anões
// 12 - Em 'Atlantis - O Reino Perdido', qual é o nome da língua antiga falada pelos atlantes?

// Resposta correta: Atlanteano
// 13 - Em 'A Bela e a Fera', quem é o criador da rosa encantada?

// Resposta correta: A Feiticeira
// 14 - Na série animada de 'Gravity Falls', quem escreveu os diários perdidos?

// Resposta correta: Stanford Pines
// 15 - Qual é o nome do pintor que criou os cenários para o filme 'Fantasia' (1940)?

// Resposta correta: Walt Disney e sua equipe
// 16 - Em 'O Corcunda de Notre-Dame', quem é o responsável por adotar Quasímodo?

// Resposta correta: Claude Frollo
// 17 - Em 'Planeta do Tesouro', qual é o nome da nave que Jim Hawkins usa para viajar até o planeta do Tesouro?

// Resposta correta: RLS Legacy
// 18 - Em Em 'Cinderela', o que Cinderela perde durante a fuga do castelo?

// Resposta correta: Um sapato
// 19 - Em 'Peter Pan', qual é o nome da ilha onde Peter e os Meninos Perdidos vivem?

// Resposta correta: Terra do Nunca
// 20 - No filme 'Pocahontas', qual é o nome do espírito que guia Pocahontas?

// Resposta correta: Vovó Willow
// 21 - Qual é a raça de cachorro da Dama em 'Dama e o Vagabundo'?

// Resposta correta: Cocker Spaniel
// 22 - Qual é a pronúncia, escrita e nome completo desse personagem?

// Resposta correta: José Carioca

// 23 - Qual era a função do Grilo?,
// Resposta correta: Ser a consciência do Pinóquio


// 24 - O Tarzan foi criado por...?
// Resposta correta: Gorilas


// 25 - Em Encanto, quem era capaz de ver o Futuro?
// Resposta correta: Bruno Madrigal
