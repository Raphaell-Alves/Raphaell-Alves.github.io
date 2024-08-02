
document.addEventListener("DOMContentLoaded", function() {
    const conteudos = [
        {
            titulo: "Inovação e Sustentabilidade",
            texto: "Na A1-META, acreditamos que a inovação tecnológica deve caminhar lado a lado com a sustentabilidade. Nossas soluções não apenas avançam a tecnologia, mas também protegem o meio ambiente para as gerações futuras. Descubra como estamos moldando um futuro mais verde e inteligente.",
            imagem: "src/images/sustentabilidade.png"
        },
        {
            titulo: "Transformação Digital",
            texto: "A transformação digital é crucial para o sucesso no mundo moderno. Na A1-META, ajudamos empresas de todos os tamanhos a aproveitar o poder da tecnologia digital para crescer e prosperar. Explore como nossa expertise pode impulsionar a sua empresa para a era digital.",
            imagem: "src/images/metaverse.png"
        },
        {
            
            titulo: "O Futuro com IA",
            texto: "A inteligência artificial está transformando o mundo, revolucionando indústrias e melhorando a vida cotidiana. Na A1-META, lideramos essa revolução, oferecendo soluções inovadoras em IA, computação em nuvem e realidade virtual. Nossa missão é capacitar empresas e indivíduos a explorar todo o potencial dessas tecnologias emergentes, promovendo um futuro mais conectado e eficiente.",
            imagem: "8e1a5b72-c6ba-4700-a5b3-885537151ce9.png"
        }
    ];

    let index = 0;

    function atualizarConteudo() {
        const titulo = document.getElementById("titulo-IA");
        const texto = document.getElementById("texto-IA");
        const imagem = document.getElementById("imagem-IA");

        // Adiciona classe de fade-out
        titulo.classList.add("fade-out");
        texto.classList.add("fade-out");
        imagem.classList.add("fade-out");

        // Após a animação fade-out, atualiza o conteúdo e adiciona a animação fade-in
        setTimeout(() => {
            titulo.innerText = conteudos[index].titulo;
            texto.innerText = conteudos[index].texto;
            imagem.src = conteudos[index].imagem;

            // Remove fade-out e adiciona fade-in
            titulo.classList.remove("fade-out");
            texto.classList.remove("fade-out");
            imagem.classList.remove("fade-out");

            titulo.classList.add("fade-in");
            texto.classList.add("fade-in");
            imagem.classList.add("fade-in");

            // Remove fade-in após a animação completar
            setTimeout(() => {
                titulo.classList.remove("fade-in");
                texto.classList.remove("fade-in");
                imagem.classList.remove("fade-in");
            }, 1000);

            // Atualiza o índice
            index = (index + 1) % conteudos.length;
        }, 1000); // O tempo deve corresponder à duração da animação fade-out
    }

    setInterval(atualizarConteudo, 12000); // Intervalo de 12 segundos para incluir o tempo de animação
});


// CARD PARA FOOTER

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.service-item');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
        });
    });
});



// CHATBOT
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('chatbot-icon').addEventListener('click', function() {
        var chatContainer = document.getElementById('chat-container');
        if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
            chatContainer.style.display = 'flex';
            showInitialMessage();
        } else {
            chatContainer.style.display = 'none';
        }
    });

    document.getElementById('send-btn').addEventListener('click', function() {
        var userInput = document.getElementById('user-input').value;
        handleUserInput(userInput);
    });

    function showInitialMessage() {
        var chatMessages = document.getElementById('chat-messages');
        chatMessages.innerHTML = `
            <p>Olá, Eu sou o A1, seu assistente virtual personalizado. Estou aqui para fornecer informações detalhadas e esclarecer suas dúvidas sobre Inteligência Artificial, Realidade Virtual e Computação em Nuvem. Insira o número correspondente à sua dúvida:</p>

            <ul>
                <li>1) Como funciona a IA?</li>
                <li>2) O que é computação em nuvem?</li>
                <li>3) Explicação sobre o Metaverso</li>
                <li>4) Dicas de segurança cibernética</li>
                <li>5) Informações sobre armazenamento inteligente</li>
            </ul>
        `;
    }

    function handleUserInput(input) {
        var chatMessages = document.getElementById('chat-messages');
        var userMessage = `<p>${input}</p>`;
        var botMessage = '<p></strong> ';

        switch(input) {
            case '1':
                botMessage += 'A inteligência artificial (IA) é um campo da ciência da computação que se concentra em criar sistemas capazes de realizar tarefas que normalmente requerem inteligência humana.';
                break;
            case '2':
                botMessage += 'A computação em nuvem permite que empresas e indivíduos armazenem e acessem dados e programas pela internet, ao invés de em discos rígidos locais.';
                break;
            case '3':
                botMessage += 'O Metaverso é uma rede de ambientes virtuais onde os usuários podem interagir uns com os outros e com objetos digitais, frequentemente usando avatares.';
                break;
            case '4':
                botMessage += 'Para garantir sua segurança cibernética, mantenha seus softwares atualizados, use senhas fortes, e nunca compartilhe informações pessoais online sem verificar a autenticidade do site.';
                break;
            case '5':
                botMessage += 'O armazenamento inteligente utiliza IA para otimizar a organização e o gerenciamento dos dados, garantindo acesso rápido e seguro às informações armazenadas.';
                break;
            default:
                botMessage += 'Desculpe, não entendi sua pergunta. Por favor, insira um número de 1 a 5.';
                break;
        }

        botMessage += '</p>';
        chatMessages.innerHTML += userMessage + botMessage;
        document.getElementById('user-input').value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});



function toggleMenu() {
    const menu = document.querySelector('.navegacao-opcoes-menu .items-menu');
    const hamburger = document.querySelector('.hamburger-menu');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.services-navagacao');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById('service').scrollIntoView({ behavior: 'smooth' });
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.contact-navagacao');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
        });
    });
});