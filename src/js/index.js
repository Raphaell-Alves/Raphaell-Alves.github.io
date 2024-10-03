// Função de inicialização do mapa
function initMap() {
    // Coordenadas da sua loja (Itaquaquecetuba, SP)
    var lojaLocation = { lat: -23.51912, lng: -46.92393 };

    // Criando o mapa e centralizando na localização da loja
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: lojaLocation
    });

    // Marcador no local da loja
    var marker = new google.maps.Marker({
        position: lojaLocation,
        map: map,
        title: 'Nossa Loja'
    });

     // Criando a InfoWindow com as informações da loja
     var infoWindow = new google.maps.InfoWindow({
        content: '<div><strong>Hidráulica Matias Comércios e Serviços Ltda</strong><br>' +
                 'R. Heneide Storni Ribeiro, 67 - Jardim Alvorada, Jandira - SP, 06612-170<br>' +
                 '4,4 ★★★★☆ (74 avaliações)<br>' +
                 '<a href="https://maps.google.com/?q=Hidraulica+matias+comercios+e+servicos+ltda" target="_blank">Ver mapa ampliado</a>' +
                 '</div>'
    });

    // Adicionando um evento para abrir a InfoWindow quando o marcador for clicado
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    // Abrir automaticamente a InfoWindow quando o mapa carregar
    infoWindow.open(map, marker);

}






document.addEventListener("DOMContentLoaded", function() {
    const conteudos = [
        {
            imagem: "src/images/torque3-removebg-preview.png"
        },
        {
            imagem: "src/images/torque2-removebg-preview.png"
        },
        {
            
            imagem: "src/images/torque1-removebg-preview.png"
        }
    ];

    let index = 0;

    function atualizarConteudo() {
        const imagem = document.getElementById("imagem-IA");

        // Adiciona classe de fade-out
        
        imagem.classList.add("fade-out");

        // Após a animação fade-out, atualiza o conteúdo e adiciona a animação fade-in
        setTimeout(() => {
            imagem.src = conteudos[index].imagem;

            // Remove fade-out e adiciona fade-in
            imagem.classList.remove("fade-out");

            imagem.classList.add("fade-in");

            // Remove fade-in após a animação completar
            setTimeout(() => {
              
                imagem.classList.remove("fade-in");
            }, 1000);

            // Atualiza o índice
            index = (index + 1) % conteudos.length;
        }, 1000); // O tempo deve corresponder à duração da animação fade-out
    }

    setInterval(atualizarConteudo, 10000); // Intervalo de 12 segundos para incluir o tempo de animação
});


const toggleButton = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.items-menu');

toggleButton.addEventListener('click', function () {
    menuItems.classList.toggle('show');

    // Verifica se o menu está aberto e muda o ícone do botão
    if (menuItems.classList.contains('show')) {
        toggleButton.textContent = '✕';  // Ícone de fechar
    } else {
        toggleButton.textContent = '☰';  // Ícone de menu hambúrguer
    }
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
            <p>Olá, Somos a Empresa Hidráulica Matias, Insira o número correspondente à sua dúvida:</p>

            <ul>
                <li>1) Orçamento Rápido</li>
                <li>2) Serviços de Manutenção</li>
                <li>3) Status do Serviço</li>
                <li>4) Atendimento ao Cliente</li>
                <li>5) Dicas e Manutenção Preventiva</li>
            </ul>
        `;
    }

    function handleUserInput(input) {
        var chatMessages = document.getElementById('chat-messages');
        var userMessage = `<p>${input}</p>`;
        var botMessage = '<p></strong> ';

        switch(input) {
            case '1':
                botMessage += 'Aguarde um momento, e você será redirecionado para um de nossos atendentes.';
                break;
            case '2':
                botMessage += 'Aguarde enquanto você será redirecionado para um dos nossos especialistas.';
                break;
            case '3':
                botMessage += 'Aguarde um instante enquanto você será redirecionado para verificar o status.';
                break;
            case '4':
                botMessage += 'Aguarde um momento enquanto você será redirecionado para um de nossos atendentes';
                break;
            case '5':
                botMessage += 'Aguarde um instante enquanto você será redirecionado para as informações que precisa.';
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

