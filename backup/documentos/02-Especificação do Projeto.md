# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2"> Compartilhador </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">O usuário compartilhador é alguém que possui assinaturas em serviços
de streaming, jogos, softwares, clubes de assinatura e outros serviços
que podem ser compartilhados entre múltiplos usuários. Eles têm
interesse em reduzir os custos de suas assinaturas, aproveitando ao
máximo o valor que pagam por elas. Além disso, são responsáveis e
buscam parceiros confiáveis para compartilhar suas cotas de forma
organizada e segura.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>●Uma plataforma que permite a criação e administração de grupos
de compartilhamento.
<p>● Ferramentas para configurar detalhes das cotas, como valor a ser
pago, número de vagas disponíveis e datas de vencimento.
<p>● Mecanismos de pagamento seguros e eficazes para receber os
pagamentos dos membros do grupo.
<p>● Transparência na divisão de custos e controle sobre quem tem
acesso às suas contas compartilhadas.
<p>● Uma maneira conveniente de gerenciar e monitorar os grupos e
as atividades de compartilhamento.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2"> Adquirinte </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">O usuário adquirente é alguém que deseja acessar serviços de streaming,
jogos, softwares, clubes de assinatura e outros serviços online, mas
busca uma maneira econômica de fazê-lo. Eles estão interessados em
compartilhar assinaturas com outros usuários para reduzir os custos
individuais. Os usuários adquirentes valorizam a legalidade e a ética no
compartilhamento e procuram grupos confiáveis que possam fornecer
acesso a esses serviços de forma segura e acessível.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>● Uma plataforma que conecta facilmente os usuários a grupos de
compartilhamento.<p>
● Informações detalhadas sobre os grupos disponíveis, incluindo
valores, número de vagas e datas de vencimento das cotas.<p>
● Um sistema seguro e eficiente para efetuar pagamentos aos
compartilhadores.<p>
● Garantias de segurança nas transações financeiras e no
compartilhamento de informações.<p>
● Uma forma conveniente e descomplicada de receber acesso às
contas compartilhadas e gerenciar sua participação nos grupos.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários
|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Estudante          | desejo encontrar grupos de compartilhamento de assinaturas de streaming |para poder assistir aos últimos lançamentos de filmes e séries de forma econômica, sem comprometer meu orçamento de estudante universitário|
| Fotografa                | quero adquirir acesso a softwares de edição de fotos de alta qualidade                       | para melhorar minhas habilidades de fotografia e criar trabalhos incríveis para minha mídia social e portfólio profissional.                              |
| Profissional Autonomo                | desejo compartilhar a assinatura de um serviço de VPN com outras pessoas                  | para aumentar nossa segurança online e proteger nossos dados enquanto economizamos em despesas individuais.                     
| Leitor                | quero adquirir acesso a clubes de assinatura de livros                     | para ampliar minha biblioteca pessoal e explorar novos títulos e gêneros literários sem gastar muito dinheiro                              |
| Jogador                | desejo participar de grupos de compartilhamento de jogos online,                       | para ter acesso a uma variedade de títulos de videogame e jogar com amigos, expandindo minha experiência de entretenimento digital.                              |
| Estudante                | quero compartilhar minha assinatura de streaming com outras pessoas,                       | para reduzir os custos mensais da assinatura e, ao mesmo tempo, garantir que meus amigos tenham acesso a conteúdo de entretenimento de qualidade                |
| Gerente de projetos                | desejo criar um grupo de compartilhamento de softwares de produtividade,                       | para que minha equipe de trabalho possa colaborar eficazmente em projetos, economizando nos custos de licença de software.                     |
| Profissional da área da beleza                | quero compartilhar minha assinatura de clube de assinatura de beleza,                       | para que minhas amigas e eu possamos experimentar novos produtos de beleza e discutir nossas descobertas em grupo. |
| Estudante                |desejo criar um grupo de compartilhamento de contas de serviços de delivery de comida                     | para que meus colegas de apartamento possam desfrutar de refeições variadas e economizar juntos em nossos pedidos.                           |
| Jovem profissional                |quero compartilhar minha assinatura de serviço de streaming de música com outros entusiastas da música,                   | para descobrir novas músicas e artistas, enquanto dividimos os custos mensais.                       |

## Requisitos do Projeto

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
|  RF-01  |  Deve permitir que o usuário crie uma conta na plataforma, fornecendo informações básicas.                    | Alta   | 
|  RF-02  |  Deve permitir que o usuário faça o login na plataforma com os dados fornecidos na criação da conta.                    | Alta   |
|  RF-03  |  O usuário deve poder criar uma oferta listando a cota de licença que ele está disposto a compartilhar. Colocando informações essenciais para descrever o que está sendo ofertado                  | Alta   |
|  RF-04  |  A ferramenta deve permitir que usuários e visitantes visualizem as ofertas de serviços que estão sendo postos.                    | Alta   |
|  RF-05  |  A ferramenta deve ter um filtro que auxilie o usuário a encontrar a oferta que melhor te agrade.                    | Alta   |
|  RF-06  |  A ferramenta deve disposto de forma de card os serviços que estão sendo ofertados, contendo informações prévias sobre                    | Alta   |
|  RF-07  |  A ferramenta deve permitir que usuários visualizem a oferta de forma detalhada apoia clicar no card.                    | Média   |
|  RF-08  |  O usuário deve entrar em contato com o ofertante da cota de licença.                    | Média   |
|  RF-09  |  A ferramenta deve conter um sistema de notificações para informar os usuários sobre novas ofertas, respostas de mensagens e outros eventos relevantes.                    | Baixa   |
|  RF-10  |  A ferramenta deve permitir que o usuário gerencie suas próprias ofertas, podendo editar, renovar ou remover ofertas expiradas.                    | Alta   |
|  RF-11  |  A ferramenta deve Fornecer recursos de suporte, como uma seção de perguntas frequentes ou um canal de contato para assistência                    | Baixa   |
|  RF-12  |  A ferramenta deve permitir que o usuário favorite as ofertas preferidas                    | Baixa   |
|  RF-13  |  A ferramenta deve permitir que o usuário visualize as ofertas favoritas                  | Baixa   |
|  RF-14  |  A ferramenta deve permitir que o usuário edite algumas informações informadas na criação de sua conta.                    | Média   |
|  RF-15  |  O sistema deve permitir que o usuário faça logout da sua conta                    | Média   |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01  |  A ferramenta deve ser compatível com os principais navegadores do mercado. [Firefox,Google Chrome, Edge]                    | Mpedia   | 
| RNF-02  |  A codificação deve seguir o padrão HTML5, CSS3.                    | Alta   | 
| RNF-03  |  A ferramenta deve ser responsiva.                    | Baixa   | 
| RNF-04  |  A navegação do usuário deve ser intuitiva e de fácil navegação                    | Média   | 
| RNF-05  |  A ferramenta deve proteger os dados dos usuários.                    | Alta   | 

**Prioridade: Alta / Média / Baixa. 

