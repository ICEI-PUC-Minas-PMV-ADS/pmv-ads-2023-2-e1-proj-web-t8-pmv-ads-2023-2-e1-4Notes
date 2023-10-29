document.addEventListener("DOMContentLoaded", function() {
    const proContainer = document.getElementById("dynamic-ads");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
  
    // Adicione um evento de clique para a pesquisa
    searchButton.addEventListener("click", searchOffers);
  
    function getRandomCotas() {
      const cotasPreenchidas = Math.floor(Math.random() * 6);
      const cotasTotais = 5;
      return `${cotasPreenchidas} de ${cotasTotais}`;
    }
  
    function createOfferElement(offer) {
      const proElement = document.createElement("div");
      proElement.className = "pro";
      offer.filled = getRandomCotas();
  
      // Crie elementos para a oferta (imagem, descrição, etc.)
      // Aqui, você pode adaptar o código para exibir as informações da oferta
  
      proContainer.appendChild(proElement);
    }
  
    function searchOffers() {
      const searchTerm = searchInput.value.toLowerCase();
  
      // Vamos buscar as ofertas do GitHub e filtrar com base na pesquisa
      fetch("https://raw.githubusercontent.com/seurepositorio/seuarquivo.json")
        .then((response) => response.json())
        .then((data) => {
          proContainer.innerHTML = ""; // Limpa os contêineres antes de adicionar novas ofertas
  
          data.offers.forEach((offer) => {
            // Verifica se o termo de pesquisa está presente na oferta
            if (offer.product.toLowerCase().includes(searchTerm)) {
              createOfferElement(offer);
            }
          });
        })
        .catch((error) => {
          console.error("Erro ao buscar ofertas: " + error);
        });
    }
  });
  

document.addEventListener("DOMContentLoaded", function() {
    const ads = [
            {
                "name": "Tiago Almeida",
                "product": "SPOTIFY PREMIUM",
                "rating": 5,
                "filled": "1 de 5",
                "profile": "Premium User"
            },
            // {
            //     "name": "Ana Silva",
            //     "product": "Netflix Premium",
            //     "rating": 4,
            //     "profile": "Family Plan"
            // },
            // {
            //     "name": "Lucas Santos",
            //     "product": "Amazon Prime Video",
            //     "rating": 4.5,
            //     "profile": "Student Subscription"
            // },
            // {
            //     "name": "Maria Garcia",
            //     "product": "Apple Music",
            //     "rating": 4,
            //     "profile": "Family Plan"
            // },
            // {
            //     "name": "Pedro Oliveira",
            //     "product": "HBO Max",
            //     "rating": 4.2,
            //     "profile": "Premium User"
            // },
            // {
            //     "name": "Isabela Costa",
            //     "product": "Disney+",
            //     "rating": 4.8,
            //     "profile": "Standard Subscription"
            // },
            // {
            //     "name": "Carlos Rodrigues",
            //     "product": "Kindle Unlimited",
            //     "rating": 3.9,
            //     "profile": "Reader's Delight"
            // },
            // {
            //     "name": "Laura Fonseca",
            //     "product": "Spotify Family",
            //     "rating": 4.7,
            //     "profile": "Family Plan"
            // },
            // {
            //     "name": "Gustavo Souza",
            //     "product": "YouTube Premium",
            //     "rating": 4.3,
            //     "profile": "Ad-Free Experience"
            // },
            // {
            //     "name": "Juliana Pereira",
            //     "product": "Tidal HiFi",
            //     "rating": 4.6,
            //     "profile": "Audiophile"
            // },
            // {
            //     "name": "Rafael Fernandes",
            //     "product": "Apple TV+",
            //     "rating": 4.1,
            //     "profile": "Original Content Lover"
            // },
            // {
            //     "name": "Camila Lima",
            //     "product": "Audible",
            //     "rating": 4.4,
            //     "profile": "Audiobook Enthusiast"
            // },
            // {
            //     "name": "Fernando Torres",
            //     "product": "Pandora Plus",
            //     "rating": 4,
            //     "profile": "Personalized Radio"
            // },
            // {
            //     "name": "Mariana Ribeiro",
            //     "product": "Sling TV",
            //     "rating": 4.2,
            //     "profile": "Cord Cutter"
            // },
            // {
            //     "name": "André Alves",
            //     "product": "PlayStation Plus",
            //     "rating": 4.5,
            //     "profile": "Gamer's Choice"
            // },
            // {
            //     "name": "Beatriz Gomes",
            //     "product": "ESPN+",
            //     "rating": 4.7,
            //     "profile": "Sports Fan"
            // },
            // {
            //     "name": "Ricardo Mendes",
            //     "product": "Skillshare",
            //     "rating": 4.3,
            //     "profile": "Lifelong Learner"
            // },
            // {
            //     "name": "Tatiana Carvalho",
            //     "product": "NBA League Pass",
            //     "rating": 4.6,
            //     "profile": "Basketball Enthusiast"
            // },
            // {
            //     "name": "Hugo Martins",
            //     "product": "Crunchyroll Premium",
            //     "rating": 4.2,
            //     "profile": "Anime Lover"
            // },
            // {
            //     "name": "Amanda Sousa",
            //     "product": "Shudder",
            //     "rating": 4.8,
            //     "profile": "Horror Aficionado"
            // }
    ];

    const proContainer = document.getElementById("dynamic-ads");

    function getRandomCotas() {
        const cotasPreenchidas = Math.floor(Math.random() * 6); 
        const cotasTotais = 5; 
        return `${cotasPreenchidas} de ${cotasTotais}`;
    }

    ads.forEach(ad => {
        const proElement = document.createElement("div");
        proElement.className = "pro";
        ad.filled = getRandomCotas();
        
        const imgElement = document.createElement("img");
        imgElement.src = "Icons/profile.svg";
        imgElement.alt = ad.name;
        imgElement.style.transform = "scale(0.1)";

        const desElement = document.createElement("div");
        desElement.className = "des";
        desElement.innerHTML = `
            <span>${ad.name}</span>
            <h5>${ad.product}</h5>
            <p>${ad.filled}</p>
            <div class="star">
                ${'<i class="fas fa-star"></i>'.repeat(ad.rating)}
            </div>
        `;

        const linkElement = document.createElement("a");
        linkElement.href = "#";
        linkElement.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket" style="color: #000000;"></i>';

        proElement.appendChild(imgElement);
        proElement.appendChild(desElement);
        proElement.appendChild(linkElement);

        proContainer.appendChild(proElement);
    });
});
