window.onload = function() {
    // Animação simples para a imagem
    const imagem = document.querySelector(".sobre-imagem img");
    imagem.style.opacity = "0";
    imagem.style.transition = "opacity 1s ease";

    setTimeout(function() {
        imagem.style.opacity = "1";
    }, 500);

    // Efeito hover nos itens de destaque
    const itensDestaque = document.querySelectorAll(".destaque-item");
    itensDestaque.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s";
        })
        item.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });

    // Botão para voltar ao topo 
    const btnTopo = document.createElement("button");
        btnTopo.style.textContent = "↑";
        btnTopo.style.position = "fixed";
        btnTopo.style.bottom = "20px";
        btnTopo.style.right = "20px";
        btnTopo.style.padding = "10px";
        btnTopo.style.borderRadius = "50%";
        btnTopo.style.backgroundColor = "#6d4c41";
        btnTopo.style.color = "white";
        btnTopo.style.border = "none";
        btnTopo.style.cursor = "pointer";
        btnTopo.style.display = "none";

        document.body.appendChild(btnTopo);

    // Mostrar/ocultar o botão quando rolar a página
    window.addEventListener("scroll", function() {
        if(window.scrollY > 300) {
            btnTopo.style.display = "block";
        }else {
            btnTopo.style.display = "none";
        }
    });

    // Função para voltar ao topo 
    btnTopo.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};