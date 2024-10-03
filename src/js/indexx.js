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
