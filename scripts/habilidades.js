$(function() {
 const dataSkills = [
{
    skill: "marketing ",
    description: "A gestão de tráfego e anúncios no marketing é fundamental para alcançar o público certo e impulsionar o sucesso do seu negócio. Ao direcionar anúncios pagos para os canais corretos, você aumenta a visibilidade da sua marca e atrai clientes potenciais relevantes, aumentando suas chances de conversão e vendas. É uma estratégia eficaz para obter resultados tangíveis e maximizar o retorno sobre o investimento em publicidade.",
    incon: '<i class="fa-solid fa-bullhorn"></i>'
},
{
    skill: "Design",
    description: "O design gráfico é importante para deixar sua empresa visualmente atrativa. Ele cria logotipos, anúncios e materiais de marketing bonitos e impactantes. Com um design bem feito, sua marca chama a atenção das pessoas e se destaca no mercado. É uma forma de transmitir profissionalismo e fazer com que sua empresa seja lembrada pelos clientes.",
    incon: '<i class="fa-solid fa-brush"></i>'
},
{
    skill: "videomaker",
    description: "O videomaker é responsável por criar vídeos incríveis. Eles têm a função de planejar, gravar e editar vídeos para contar histórias, promover produtos ou serviços. Seu trabalho é importante para destacar empresas e profissionais, criando vídeos atrativos e de alta qualidade.",
    incon: '<i class="fa-solid fa-film"></i>'
},
{
    skill: "Conversas Automatizadas",
    description: "Automatizar o envio de emails e mensagens automáticas pelo WhatsApp para vendas é muito importante porque torna a comunicação com os clientes mais rápida e eficiente. Isso significa que você pode enviar mensagens personalizadas de forma automática, de acordo com o interesse e o comportamento do cliente. Dessa forma, você economiza tempo e recursos, além de poder acompanhar os clientes em cada etapa do processo de vendas. Isso ajuda a construir um relacionamento mais próximo e aumenta as chances de fechar negócios.",
    incon: '<i class="fa-solid fa-comments-dollar"></i>'
},
{
    skill: "Loja Virtual",
    description: "Potencialize suas vendas com nosso serviço de loja virtual! Com uma loja online, suas vendas acontecem 24 horas por dia, de forma automática. Alcance mais clientes e aumente seus lucros. Entre em contato conosco agora mesmo e descubra como podemos impulsionar seu negócio!",
    incon: '<i class="fa-solid fa-store"></i>'
},
{
    skill: "paginas de Vendas",
    description: "Aumente suas vendas de forma significativa com nossas páginas poderosas! Nossas páginas são projetadas para gerar resultados incríveis, impulsionando as vendas do seu produto ou serviço. Com estratégias comprovadas e um design atraente, podemos ajudar você a alcançar um sucesso extraordinário. Entre em contato conosco agora mesmo e descubra como nossas páginas podem impulsionar o seu negócio!",
    incon: '<i class="fa-solid fa-money-check-dollar"></i>'
},
{
    skill: "Automatize tarefas repetitivas",
    description: "Acelere seu trabalho de vendas ou o fluxo de trabalho da sua empresa com nossos serviços de programação personalizados! Desenvolvemos soluções tecnológicas sob medida que automatizam tarefas repetitivas, agilizam processos e aumentam a eficiência. Libere mais tempo para se concentrar no que realmente importa, enquanto nossa programação cuida do resto. Entre em contato conosco e descubra como podemos impulsionar a produtividade do seu negócio!",
    incon: '<i class="fa-solid fa-robot"></i>'
},
{
    skill: "copyright incluso no serviço ",
    description: "Ao escolher nossos serviços, você terá a tranquilidade de ter o copyright incluso. Isso significa que você terá os direitos autorais sobre o conteúdo, design ou qualquer outra criação produzida por nós para o seu negócio. Nós nos preocupamos em proteger sua propriedade intelectual e garantir que você tenha controle total sobre o que foi desenvolvido para sua empresa. Conte conosco para obter um serviço de qualidade e a segurança de que seus direitos autorais estão protegidos. Entre em contato conosco para saber mais sobre nossos serviços e como podemos ajudar você!",
    incon: '<i class="fa-regular fa-copyright"></i>'
},
{
    skill: "Atendimento Personalizado",
    description: "Um profundo entendimento para as necessidades da sua empresa. Com uma abordagem personalizada, entendemos seus objetivos e adaptamos nossos serviços para atender às suas demandas específicas. Estamos comprometidos em oferecer soluções que impulsionem o crescimento e o sucesso do seu negócio. Conte conosco para obter uma parceria sólida e um bom entendimento das suas necessidades empresariais. Entre em contato conosco para descobrir como podemos ajudá-lo!",
    incon: '<i class="fa-solid fa-id-card-clip"></i>'
},]
//Objeto

$.each(dataSkills, function(index, element) {
    $('.skills-group').append(`<div class="skill-single"><h1>${element.incon}</h1></div>`)
    console.log(index)

    $('.skills-group-cll').append(`<div class="skill-single"><h1>${element.incon}</h1></div>`)
    console.log(index)

    $('.skill-single').click(function() {
        $('.text-skill').html(`<h3>${element.skill}</h3>
        <p>${element.description}</p>`)
        $('.skill-single').css('color','#E8E7DF')
        $(this).css('color','#2e304e')
        $(this).break();
    })
  });
})
