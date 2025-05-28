exports.registerUserLFM = (p) => {
    return `Você esqueceu de colocar o user do LastFM após o comando. Lembre-se de sincronizar com o Spotify!`   
 }

exports.ErrorBaileys_401 = () => {
response = ["Houve uma desconexão… estou reiniciando agora. Se necessário, por favor reescaneie o QR Code para continuar…", "Minha sessão foi desconectada… você pode escanear o QR Code novamente? Estou gerando um novo agora…", "Fui desconectada… a sessão precisa ser escaneada de novo. Estou reiniciando o processo…"]
return response[Math.floor(Math.random() * response.length)]
}

exports.ErrorBaileys_408 = () => {
response = ["A sessão sofreu um timeout… estarei recarregando agora para estabilizar tudo…", "O tempo de resposta foi excedido… iniciando recarregamento da sessão…", "Detectei um timeout na sessão… estou recarregando para manter a estabilidade…"]
return response[Math.floor(Math.random() * response.length)]
}

exports.ErrorBaileys_411 = () => {
response = ["A sessão salva não corresponde à conexão atual… reiniciando a sessão para corrigir o conflito…", "O arquivo de sessão parece estar incorreto… estarei tentando recarregar tudo agora…", "Falha na tentativa de conexão… a sessão parece inválida, iniciando recarregamento completo…"]
return response[Math.floor(Math.random() * response.length)]
}

exports.ErrorBaileys_428 = () => {
response = ["A conexão foi encerrada… será que sua internet caiu? Estarei tentando reconectar agora…", "Não consegui manter a conexão com o WhatsApp… estou tentando novamente com cuidado…", "Parece que a conexão com o WhatsApp caiu… vou tentar restabelecê-la o mais rápido possível…"]
return response[Math.floor(Math.random() * response.length)]
}

exports.ErrorBaileys_440 = () => {
response = ["U-uhm… parece que outra sessão do WhatsApp Web foi aberta com meu número… por favor, feche-a para que eu possa continuar funcionando normalmente…", "Detectei outra sessão ativa no meu número… será que você pode encerrá-la primeiro para continuar usando a Ganyu?", "Há várias sessões conectadas com o meu número… por favor, feche as outras para evitar conflitos e instabilidade…"]
return response[Math.floor(Math.random() * response.length)]
}

exports.ErrorBaileys_500 = () => {
response = ["Ahn… parece que a sessão está mal configurada… estarei tentando reconectar com cuidado agora…", "Foi detectado um problema na sessão, então farei uma reconexão para corrigir isso, tudo bem?", "A sessão parece incorreta… estou reiniciando a conexão para estabilizar tudo direitinho…"]
return response[Math.floor(Math.random() * response.length)]
}

exports.ErrorBaileys_515 = () => {
response = ["U-uhm… a sessão pediu uma atualização, então estou reiniciando devagarzinho, por favor aguarde…", "O sistema solicitou uma reinicialização, estou cuidando disso automaticamente, mestre…", "Meu código está sendo reinicializado para garantir que a conexão fique estável…"]
return response[Math.floor(Math.random() * response.length)]
}

exports.open = () => {
response = ["U-uhm… sessão aberta com o WhatsApp-Web com sucesso! A partir daqui, estarei atenta aos próximos logs…", "Conexão estabelecida com o WhatsApp-Web, mestre! Agora estarei acompanhando os próximos logs com cuidado…", "Sessão carregada com sucesso, senhor(a). Agora vamos acompanhar juntos os próximos logs…", "Estou online! A conexão com o WhatsApp-Web está estabilizada, mestre. Próximos logs serão monitorados com atenção…"]
return response[Math.floor(Math.random() * response.length)]
}

exports.connecting = () => {
response = ["U-uhm… a Ganyu está acordando devagarinho, por favor tenha paciência comigo, mestre…", "Estou reunindo todas as informações importantes para servir melhor, só um instante…", "Quase pronta! A Ganyu está se preparando para ajudar com todo o cuidado que merece…", "Não esqueça de se hidratar, tá bem? Enquanto isso, a Ganyu está se organizando para começar…", "Olá, mestre! Estou me preparando para começar a trabalhar com todo meu carinho… só um momento, por favor…"]
return response[Math.floor(Math.random() * response.length)]
}

exports.blackList = (GroupMetadata_, ganyulgc) => { 
participant = ganyulgc.participants[0].split("@")[0]
response = [
  `*@${participant}* foi removido da comitiva de *${GroupMetadata_.subject}* por estar na lista negra… mesmo os Adepti devem seguir as regras… m-me desculpa… ❄️📜`,
  `Ahn… olha quem voltou a cruzar nossos caminhos… *@${participant}* achou que eu não notaria? Mas as ordens dos guardiões de Liyue são claras… infelizmente, você não pode ficar… ❄️👋🏼`,
  `*@${participant}* tentou passar despercebido, mas não deu certo… os olhos atentos da comitiva não falham… tive que removê-lo para manter a harmonia… ❄️🙁`,
  `U-uhm… *@${participant}* foi banido da comitiva por estar na lista negra… para proteger a paz de Liyue, precisei agir… espero que entenda… ❄️⚠️`
]
return response[Math.floor(Math.random() * response.length)]
}

exports.phrasesLeft = (ganyulgc, encodeURIComponent) => {
response = ["Devemos brindar pela partida dele(a)?", "Menos um nessa indústria vital...", "Nada pra ver aqui, ele saiu por 'acidente'..."]
return response[Math.floor(Math.random() * response.length)]
}

exports.promoteUser = (usern) => {
response = [
  `❄️ @${usern.split("@")[0]} foi promovido ao cargo de administrador da comitiva... agora vai ajudar a manter tudo em ordem como um verdadeiro aliado de Liyue!`,
  `Atenção, viajantes! Mais um guardião foi promovido na comitiva. ❄️✨ Parabéns @${usern.split("@")[0]}! Que os Adepti te guiem na nova responsabilidade...`,
  `Um novo auxiliar celestial acaba de se juntar à liderança do grupo! 🌙 Parabéns @${usern.split("@")[0]}... vou contar com sua ajuda para manter tudo em harmonia.`
];
  return response[Math.floor(Math.random() * response.length)]
}

exports.rebaixarUser = (usern) => {
response = [
  `U-uhm… o momento chegou… @${usern.split("@")[0]} acaba de ser rebaixado para membro comum… espero que esteja tudo bem… ❄️📩`,
  `Ah… adeus, @${usern.split("@")[0]}… os superiores decidiram que você não continuará na liderança da comitiva… m-me desculpa… ❄️👋🏼`,
  `Hmm… o julgamento foi decidido… não pelo martelo de Morax, mas pelos guardiões da ordem… @${usern.split("@")[0]} perdeu o cargo de administrador do grupo… ❄️⚖️`
];
  return response[Math.floor(Math.random() * response.length)];
}

exports.phrasesWelcome = (mdata_2, ganyulgc, encodeURIComponent) => {
response = [
  `à comitiva ${encodeURIComponent(mdata_2.subject)}… seja bem-vindo… ❄️`,
  'Ahn… um novo viajante acabou de chegar por aqui… espero que se sinta acolhido… ❄️✨',
  'Se puder… leia as regras com carinho, e aproveite a estadia… vou estar por perto se precisar… ❄️📜',
  'Mais um integrante para essa longa jornada… juntos podemos manter tudo em equilíbrio… ❄️',
  'Gostaria de um chá de Qingxin enquanto lê as regras? Eu preparei com cuidado… ❄️🍵',
  'S-saudações… eu sou a responsável por aqui… qualquer coisa, estou à disposição… ❄️'
]
return response[Math.floor(Math.random() * response.length)]
}

exports.wait = () => {
response = [
    "Estamos alimentando o motor da criatividade com ideias frescas. Só mais um pouco! 🚂",
    "Os algoritmos estão dançando um balé sincronizado para encontrar a resposta perfeita. Aguarde um instante! 💃",
    "Os piratas da informação estão desenterrando o tesouro que você pediu. Estamos quase lá! 🏴‍☠️",
    "Estamos conectando os pontos no mapa do conhecimento. Sua resposta está a caminho! 📍",
    "Os supercomputadores estão competindo para ver quem resolve primeiro. Só mais um segundo! 🖥️",
    "Estamos costurando sua resposta com linhas de dados. Já estamos na reta final! 🪡",
    "Os unicórnios do aprendizado estão atravessando o arco-íris da sabedoria. Quase lá! 🌈",
    "Estamos sincronizando o relógio do tempo para trazer a solução exata. Aguarde um pouco mais! 🕰️",
    "Os foguetes estão carregando sua pergunta para o próximo nível. Quase atingimos a órbita! 🚀",
    "Estamos explorando cavernas ocultas do conhecimento em busca da solução. Já já voltamos! 🗻",
    "Os trovões da inovação estão ecoando. A resposta virá como um raio! ⚡",
    "Os enigmas estão se desdobrando no labirinto da informação. Já já teremos a saída! 🌀",
    "Os pinguins do raciocínio lógico estão marchando rumo à resposta. Aguarde só mais um pouquinho! 🐧",
    "Estamos mergulhando no oceano de dados. A resposta já está subindo à superfície! 🌊",
    "Os engenheiros do processamento estão apertando os últimos parafusos. Só mais um momento! 🔧",
    "Estamos captando ondas de rádio interestelares para trazer a melhor solução. Sintonizando... 📡",
    "Os coelhos da eficiência estão pulando para agilizar o processo. Está quase pronto! 🐇",
    "Os planetas estão se alinhando para dar lugar à sua resposta. Quase lá! 🌍",
    "Os alquimistas digitais estão refinando o elixir da sabedoria. Um pouquinho mais de paciência! 🧪",
    "Estamos vasculhando o baú das memórias para encontrar a resposta. Já já voltamos! 🗝️",
    "Os mecânicos do universo estão reparando as engrenagens do tempo. Só mais um instante! ⚙️",
    "Os astrônomos estão mapeando as constelações para garantir a precisão da resposta. Quase lá! 🌟",
    "Estamos programando uma dança sincronizada de bits para trazer a solução. Fique atento! 💻",
    "Os bardos do conhecimento estão escrevendo uma canção épica para a sua resposta. Aguarde o final! 🎵",
    "Os ninjas digitais estão atravessando barreiras invisíveis para chegar até você. Só mais um pouco! 🥷",
    "Os inventores estão testando sua última criação para entregar a resposta ideal. Fique tranquilo! 🛠️",
    "Os ursos polares estão caminhando pelo Ártico do processamento. A resposta já está chegando! 🐻‍❄️",
    "Estamos construindo um castelo de ideias para acomodar sua pergunta. Um momento mais! 🏰",
    "Os super-heróis da lógica estão salvando o dia. Sua resposta já está a caminho! 🦸‍♂️",
    "Estamos cozinhando ideias no caldeirão da sabedoria. Só mais um tempinho! 🍵",
    "Os cientistas estão testando hipóteses para trazer a solução exata. Aguarde! 🔬",
    "Peço que aguarde, os comandos são verificados em vários sistemas, para evitar que sofram erros, por isso é comum que demorem, se puder esperar finalizar antes de usar novamente, serei muito grataa! 🕒",
    "Entendido amore, até lá, espere enquanto faço isso, pode demorar um pouquinho, por isso, evite usar comandos demorados ou pesados até terminar, obrigadaa por esperar! <3 🌈",
    "Aguarde um momento enquanto preparo a poção mágica de dados! 🧙‍♂️",
    "Estamos viajando pela velocidade da luz para buscar as informações solicitadas. Aguarde só um pouco! 🚀",
    "Estamos reorganizando a biblioteca de Alexandria para encontrar a resposta. Aguarde, por favor! 📚",
    "Enquanto isso, Darth Vader está tentando encontrar o caminho certo para sua pergunta no lado negro da Força. Aguarde! ⚔️",
    "Estamos cultivando as respostas com cuidado e carinho em nosso jardim do conhecimento. A paciência é uma virtude! 🌱",
    "Estamos contando os grãos de areia em todas as praias do mundo para encontrar a resposta. Aguarde pacientemente! 🏖️",
    "Enquanto isso, estamos ensinando pombos-correios a carregar mensagens para trazer sua resposta. Aguarde, eles estão em treinamento! 🕊️",
    "Aguarde um momento enquanto damos um trato no nosso hamster de processamento. Ele está quase terminando de correr na roda! 🐹",
    "Estamos esperando que os minions terminem de trabalhar nas respostas. Eles são um pouco atrapalhados, mas são dedicados! 👷‍♂️",
    "Calma aí, estou indo o mais rápido que posso! Apenas mais alguns segundos e estaremos prontos para a ação! 🏎️",
    "Estou colocando meus bits para trabalhar! Isso pode levar um pouquinho, então aproveite para relaxar e tomar uma xícara de café! ☕",
    "Aguarde enquanto invoco meus poderes mágicos de processamento! É como esperar a varinha mágica fazer sua magia - só mais um pouquinho! 🪄",
    "Segure suas emoções! Estamos quase lá, prometo. Enquanto isso, que tal contar ovelhinhas? 🐑",
     "Não desista de mim agora! Estou trabalhando duro nos bastidores para preparar algo incrível. Só mais um pouco e estaremos prontos! 💪",
    "Estou pedindo reforços aos meus colegas códigos para acelerar o processo! Aguarde um momento enquanto eles se organizam. Obrigado pela paciência! 😊",
    "Respira fundo! A maratona de bits está chegando ao fim. Continue esperando só um pouquinho mais. Estamos quase lá... 🏁",
    "Estou fazendo o meu melhor para não deixar você esperando muito! Enquanto isso, pense em quantos bytes há no universo. É uma distração interessante, não acha? 🤔",
    "Aguarde enquanto os hamsters nos meus servidores correm mais rápido nas suas rodinhas. Eles estão dando o melhor de si para acelerar as coisas! 🐹",
    "Os bytes estão dançando a valsa enquanto processamos sua solicitação. Só mais um instante! 🎻",
    "Estamos calibrando o telescópio para encontrar a resposta certa nas estrelas. Aguarde um pouquinho! ✨",
    "A resposta está passando pelo detector de qualidade. Quase pronta para você! 🛠️",
    "Estamos desenhando sua resposta à mão, com todo o cuidado do mundo. Só mais um pouquinho! 🎨",
    "Estamos organizando um desfile de ideias para encontrar a mais brilhante. Só um instante! 🎭",
    "Os astronautas do conhecimento estão flutuando no espaço em busca da solução. Quase lá! 🧑‍🚀",
    "Estamos construindo a ponte perfeita para atravessar até a resposta. Segure firme! 🌉",
    "Os arqueiros da informação estão mirando no alvo certo. Só mais um pouco! 🎯",
    "Estamos puxando a resposta direto do chapéu do mágico. Prepare-se! 🎩",
    "Os robôs estão recarregando suas baterias para continuar o trabalho. Já já voltamos! 🔋",
    "Estamos subindo uma montanha de dados para trazer a resposta do topo. Um instante mais! 🏔️",
    "Os detetives da lógica estão analisando pistas. Eles estão quase lá! 🔍",
    "Estamos atravessando um labirinto digital para encontrar a saída certa. Espere um pouco! 🏛️",
    "Os dançarinos dos algoritmos estão em ritmo acelerado. A resposta está prestes a surgir! 💃",
    "Os engenheiros estão reforçando as bases do conhecimento. Só mais um segundo! 🏗️",
    "Estamos decifrando mensagens criptografadas para encontrar a solução. Quase lá! 🔐",
    "Os artistas do raciocínio estão esculpindo sua resposta com precisão. Um momento mais! 🗿",
    "Estamos explorando a selva do saber para trazer algo especial. Aguarde um instante! 🌴",
    "Os cavaleiros da lógica estão protegendo a resposta em sua jornada. Já está vindo! 🛡️",
    "Estamos testando cada combinação de possibilidades para entregar a melhor solução. Espere só mais um pouco! 🔢",
    "Os foguetes da inteligência artificial estão se preparando para a decolagem. Pronto para o impacto! 🚀",
    "Estamos afinando os instrumentos para a sinfonia perfeita de respostas. Já vai começar! 🎼",
    "Os mineradores de dados estão extraindo os melhores insights. Só mais um momento! ⛏️",
    "Os exploradores submarinos estão mergulhando fundo no oceano digital. A resposta já está subindo! 🐋",
    "Os guardiões do conhecimento estão liberando o portal. Quase lá! 🛡️",
    "Os faróis da sabedoria estão iluminando o caminho. Sua resposta está quase visível! 🏮",
    "Estamos em uma corrida contra o tempo para trazer a resposta. Só mais um instante! ⏳",
    "Os programadores do destino estão compilando o código da solução. Espere mais um pouco! 👨‍💻",
    "Os acrobatas da lógica estão equilibrando ideias para encontrar a melhor. Aguarde! 🎪",
    "Os cientistas malucos estão ajustando suas invenções. Só mais um momento! 🧪",
    "Os corredores da criatividade estão chegando na reta final. A qualquer momento, sua resposta estará aqui! 🏃",
    "Os pescadores de dados estão puxando as redes cheias de informações. Já já elas chegam à superfície! 🎣",
    "Estamos afiando as espadas da análise para cortar direto à solução. Um momento mais! ⚔️",
    "Os construtores do pensamento estão finalizando o projeto da sua resposta. Espere só mais um pouco! 🛠️",
    "Os relâmpagos da inteligência estão acendendo as ideias. Sua resposta está quase pronta! 🌩️",
    "Estamos ativando o modo turbo para finalizar isso o mais rápido possível. Já já entregamos! 🏎️",
    "Os mágicos das respostas estão realizando truques avançados. Quase lá! 🧙",
    "Os super-heróis da sabedoria estão correndo para salvar o dia com sua solução. Prepare-se! 🦸",
    "Os navegadores das estrelas estão ajustando os telescópios para localizar a resposta. Só mais um instante! 🔭",
    "Os alpinistas de ideias estão escalando as alturas da criatividade. A resposta está quase aqui! 🧗",
    "Os samurais da precisão estão polindo os detalhes finais. Segure firme! 🗡️",
    "Estamos sintonizando antenas gigantes para captar as ondas certas. Já já chega! 📻",
    "Os mestres do tempo estão sincronizando cada segundo para não demorar mais. Um pouco mais de paciência! ⏲️",
    "Os gnomos da informação estão trabalhando nos bastidores. Eles pedem só mais um minutinho! 🤏",
    "Estamos ajustando os parafusos da máquina do tempo para encontrar a solução perfeita. Segure firme! ⏳",
    "A mágica está acontecendo nos bastidores. Apenas um instante e tudo estará pronto! 🪄",
    "Os robôs estão trocando pilhas para continuar o trabalho. Fique por aqui, já já voltamos! 🤖",
    "Estamos alinhando os planetas para que tudo saia perfeito. Aguarde só um pouquinho! 🪐",
    "Os elfos da tecnologia estão revisando os últimos detalhes. Sua paciência será recompensada! 🧝",
    "O relógio está girando mais rápido para que você espere menos. Só mais um instante! ⏰",
    "Estamos na fila da criatividade para pegar a melhor ideia. Só mais um segundo! 🎯",
    "Estamos tecendo sua resposta fio a fio, como uma obra-prima. Aguarde só um pouco mais! 🧵",
    "A resposta está atravessando o multiverso. Quase chegando! 🌌",
    "Os bits estão resolvendo um enigma entre eles. Quando terminarem, sua resposta estará pronta! 🧩",
    "Estamos navegando em águas desconhecidas para encontrar a resposta perfeita. Aguarde enquanto ajustamos as velas! ⛵",
    "Os dragões da sabedoria estão voando em busca da solução. Só mais um pouquinho! 🐉",
    "Estamos decifrando runas antigas para descobrir o que você precisa. Quase lá! 🔮",
    "Os dados estão girando como uma roleta de cassino. A qualquer momento, teremos a resposta! 🎰",
    "Estamos conferindo cada detalhe como um detetive em busca de pistas. Segure firme! 🕵️‍♂️",
    "A resposta está atravessando um portal interdimensional. Quase chegando! 🌌",
    "Estamos configurando os cabos da internet intergaláctica para trazer o que você pediu. Aguarde! 🌐",
    "Os alquimistas estão finalizando a fórmula secreta. Só mais um instante! ⚗️",
    "Estamos empilhando blocos de informações como em um jogo de Tetris. Faltam poucas peças! 🧱",
    "Os ventos da sabedoria estão soprando em nossa direção. Aguarde enquanto ajustamos as velas! 🌬️",
    "Estamos esquentando as turbinas da criatividade. Preste atenção, o lançamento é iminente! 🚀",
    "Os trolls do conhecimento estão cruzando uma ponte para trazer sua resposta. Só mais um pouquinho! 🌉",
    "Estamos organizando as estrelas no céu para entregar a mensagem perfeita. Segure a emoção! ✨",
    "Os pássaros do entendimento estão trazendo novidades. Só mais um instante! 🐦",
    "A resposta está escalando o Everest do conhecimento. Em breve, ela estará em suas mãos! 🏔️",
    "Estamos decifrando códigos misteriosos para trazer a solução. Só mais alguns segundos! 🧑‍💻",
    "Os robôs estão passando por manutenção enquanto processam sua solicitação. Tenha paciência! 🤖",
    "Os circuitos estão esquentando de tanto trabalhar. A resposta está quase pronta! 🔥",
    "Estamos cozinhando a resposta em fogo lento para garantir o sabor perfeito. Só mais um pouquinho! 🍲",
    "Os mágicos da informação estão ajustando seus truques. Prepare-se para a revelação! 🎩",
    "Estamos polindo os pixels para que sua resposta seja impecável. Aguarde só mais um momento! 🖌️",
    "Os exploradores estão mapeando o caminho para a solução. Quase chegando ao destino! 🗺️",
    "Estamos misturando as cores certas na paleta do conhecimento. Sua obra-prima estará pronta em breve! 🎨",
    "Os ninjas do saber estão em missão secreta para trazer a resposta. Eles são rápidos, mas cuidadosos! 🥷",
    "Estamos escrevendo a resposta com penas de ouro. Só mais um instante! ✍️",
    "Os tempos antigos nos enviaram um pergaminho. Estamos decifrando a mensagem para você! 📜",
    "Estamos alinhando satélites para captar a melhor solução. Segure firme! 🛰️",
    "Os leões do raciocínio estão rugindo no caminho certo. Só mais alguns segundos! 🦁"
]
return response[Math.floor(Math.random() * response.length)]
}

exports.onlyAdmins = () => {
response = [
  'Ahn… me desculpa, mas você não é um administrador do grupo… no momento é só um integrante entre tantos… então não pode usar comandos administrativos… ❄️',
  'U-uhm… você tentou usar um comando reservado… mas só os administradores do grupo podem fazer isso… espero que compreenda… ❄️',
  'Ahn… esse comando é só para administradores… m-me desculpa, mas você ainda não tem acesso… quem sabe um dia…? ❄️',
  'Você ainda não está entre os administradores… m-mas talvez, com o tempo, possa se tornar digno de usar isso… ❄️✨',
  'Huh… parece que um membro comum tentou usar um comando especial… esse aqui é só para os administradores, tudo bem? ❄️',
  'Ah… eu adoraria deixar você usar, mas só os responsáveis do grupo podem usar comandos administrativos… m-me desculpa… ❄️🍵',
  'Esse comando é restrito… apenas para administradores, donos, moderadores… m-mas quem sabe um dia você entre nessa lista…? ❄️'
]
return response[Math.floor(Math.random() * response.length)]
}

exports.onlyOwner = () => {
response = [
  'Ahn… m-me desculpa… mas esse comando só pode ser usado pelo meu proprietário… ele é o único com esse tipo de permissão… ❄️',
  'Olá… essa parte é restrita, tá bom? S-somente pessoas autorizadas — como meu dono e superiores — podem acessar… m-me desculpa por barrar você… ❄️👮‍♀️',
  'Ah… você ainda não faz parte da comitiva de Liyue… uhm… e esse comando é reservado só para os superiores da expedição… m-me desculpa, mas não posso deixar você usar… ❄️'
];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyGroup = () => {
response = [
  'U-uhm… me desculpa, mas esse comando só pode ser usado em grupos… eu não tenho permissão pra executá-lo aqui no privado… ❄️',
  'Ah… esse comando foi feito só para funcionar dentro de grupos… por favor, não fique triste… é só uma regrinha que estou seguindo… ❄️🧭',
  'Fui programada para executar esse comando somente em grupos… então… por favor, não insista, tudo bem? E obrigada por entender… ❄️',
  'Olá… tudo bem? Essa função está reservada apenas para grupos… se quiser usá-la, pode me adicionar com a permissão do meu dono… ou perguntar a ele sobre os grupos oficiais… ❄️💬'
];
return response[Math.floor(Math.random() * response.length)];
}
    
exports.onlyPremiumUser = () => {
response = [
  'U-uhm… quem é você…? M-me desculpa, mas esse comando é só para usuários premium… se quiser, posso pedir ao meu dono que te explique como conseguir o acesso vip… ❄️💫',
  'Ah… você ainda não tem permissão para usar comandos da lista vip… é necessário ser um usuário premium… talvez possa conversar com meu proprietário sobre isso… ❄️🌟',
  'Esse comando é exclusivo para usuários premium… s-sinto muito por não poder deixar você usar… espero que um dia tenha acesso também… ❄️'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyBotAdmin = () => {
response = [
  'U-uhm… me desculpa, mas… eu ainda não sou administradora do grupo… poderia me promover, por favor? Algumas funções só funcionam assim… ❄️',
  'Ahn… eu ainda não faço parte da segurança do grupo… s-se quiser que eu atue direitinho, por favor me torne administradora… vou cumprir meu papel com dedicação… ❄️👮‍♀️',
  'H-hum… algumas funções não funcionam porque… eu não sou administradora… ainda… se quiser, posso ajudar melhor com essa permissão… ❄️💭'
];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyGroupFun = (prefixo) => {
response = [
  'Uhm… gostaria de usar os comandos de diversão no grupo…? É necessário ativar o *${prefixo}modobrincadeira* para liberar tudo, tá bem? Mas só os administradores podem fazer isso… espero que compreendam… ❄️🤹‍♀️',
  'Ah… o modo brincadeira ainda não está ativo neste grupo… talvez um administrador possa ativá-lo usando: *${prefixo}modobrincadeira 1*… s-se não for pedir muito… ❄️🫤'
];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyPrivate = () => {
response = [
  'U-uhm… o comando só pode ser usado em conversas privadas, tá bom? Por favor, use lá para funcionar direitinho… ❄️🔒',
  'Ahn… esse comando é só liberado no privado! Mas cuidado, o meu dono(a) pode ter ativado o anti-pv… ❄️⚠️✨'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.bannedUser = () => {
response = [
  'Ahn… você violou uma cláusula dos meus termos de uso, então… por enquanto está banido de usar meus comandos… m-me desculpa… ❄️🚫',
  'U-uhm… você está bloqueado para usar meus comandos… até que meus superiores mudem de ideia… espero que compreenda… ❄️🛑💔',
  'M-me desculpa… parece que você deixou meu dono bem chateado, por isso ele te baniu dos comandos… ❄️😰'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.forbiddenStateFromDDD = (mentionUser, whichState, extractDDD) => {
  response = [
  `Ahn… olá @${mentionUser.split('@')[0]}… m-me desculpa, mas seu número está com um DDD proibido aqui, então você será banido do grupo… ❄️⚠️`,
  `U-uhm… olá @${mentionUser.split('@')[0]}… só para avisar que seu número tem um DDD proibido neste grupo, por isso será banido… me desculpa… ❄️🪦`,
  `Ah… por favor, suma daqui… números com DDD ${extractDDD(mentionUser.split('@')[0])} não são permitidos neste grupo… ❄️👺`,
  `U-uhm… você e os números com DDD ${extractDDD(mentionUser.split('@')[0])} não são bem-vindos neste grupinho… espero que entenda… ❄️😾`
];
  return response[Math.floor(Math.random() * response.length)];
}

exports.errorConvertSticker = () => {
return 'Ahn… m-me desculpa, mas não consegui converter a mídia encaminhada para figurinha… talvez você possa tentar de novo mais tarde, tudo bem? ❄️📎🥺'
}

exports.errorCommandLink = () => {
return 'U-uhm… será que esse é mesmo o link certo para usar no comando…? Por favor, verifique direitinho… ❄️🔗';
}

exports.playResult = (data, dataAudio) => {
  return `• Título: *${data.resultado[0].title || dataAudio.resultado.title}*\n• Descrição: *${data.resultado[0].description || "Não encontrado."}*\n• Duração: *${dataAudio.resultado.duration || data.resultado[0].timestamp || "Não encontrado."}*\n• Vídeo URL: *${data.resultado[0].url || dataAudio.resultado.videoUrl}*\n—\n• Visualizações: *${dataAudio.resultado.views.replaceAll("visualizações", "").trim() || data.resultado[0].views || "Não encontrado."}*\n• Canal: *${data.resultado[0].author.name}*\n• Publicação: *${dataAudio.resultado.uploadDate || "Não encontrado."}*`
}

exports.playResult2 = (data) => {
  return `• Título: *${data.resultado[0].title}*\n• Descrição: *${data.resultado[0].description || "Sem descrição."}*\n• Canal: *${data.resultado[0].author.name}*\n• Duração: *${data.resultado[0].timestamp}*\n• Vídeo URL: *${data.resultado[0].url}*`
}

exports.syntaxDownloadMusic = () => {
return `Ahn… por favor, insira o título de uma música ou vídeo… vou tentar encontrar com carinho… ❄️🎶`
}

exports.smartphoneInfo = (listPhones, detailsPhone) => {
return `• Nome: *${listPhones[0].title}*\n• Disponibilidade: *${detailsPhone["Disponibilidade"]}*\n• Dimensões: *${detailsPhone["Dimensoes"]}*\n• Peso: *${detailsPhone["Peso"]}*\n–\n⚙️ *Especificações Técnicas:*\n• Sistema Operacional: *${detailsPhone["Sistema_Operacional"]}*\n• Chipset & Processador: *${detailsPhone["Chipset"]} - ${detailsPhone["Processador"]}*\n• Contém resistência a água? *${detailsPhone["Resistencia_a_agua"] === false ? "Não" : detailsPhone["Resistencia_a_agua"] === true ? "Sim" : "Não"}*\n• Possuí Dual SIM? *${detailsPhone["Dual_Sim"] === false ? "Não" : detailsPhone["Dual_Sim"] === true ? "Sim" : "Não"} (${detailsPhone["Sim_Card"]})*\n• Velocidade 5G (Dados Móveis): *${detailsPhone["5G"] === false ? "Não" : detailsPhone["5G"] === true ? "Sim" : "Não"}*\n• GPU: *${detailsPhone["GPU"]}*\n• Armazenamento máximo: *${detailsPhone["Memoria_Max"]}*\n• Memória RAM: *${detailsPhone["RAM"]}*\n• Armazenamento expansível: *${detailsPhone["Memoria_Expansivel"] === false ? "Não" : detailsPhone["Memoria_Expansivel"] === true ? "Sim" : "Não"}*\n–\n📱 *Especificações da Tela:*\n• Polegadas (Tamanho): *${detailsPhone["Polegadas"]}*\n• Resolução: *${detailsPhone["Resolucao"]}*\n• Densidade de Pixels: *${detailsPhone["Densidade_de_pixels"]}*\n• Proteção na tela? *${detailsPhone["Protecao"] === false ? "Não" : detailsPhone["Protecao"] === true ? "Sim" : "Não"}*\n• Total FPS (Frame per Second - "Quadros por Segundo"): *${detailsPhone["FPS"]}*\n–\n🔋 *Especificações da Bateria:*\n• Tipo: *${detailsPhone["Tipo"]}*\n• Capacidade (mAh): *${detailsPhone["Ampere"]}*`
}

exports.InstaStalker = (data, formatNumberDecimal) => {
return `> 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 - 𝐒𝐭𝐚𝐥𝐤𝐞𝐫\n—\n• Nome: ${data.resultado.profileName|| "Usuário do Instagram"} *(@${data.resultado.username})*\n• Conta Privada? *${data.resultado.accountPrivate === true ? "Sim" : data.resultado.accountPrivate === false ? "Não" : "Não"}*\n• Conta Verificada? *${data.resultado.accountVerified === true ? "Sim" : data.resultado.accountVerified === false ? "Não" : "Não"}*\n• URL Externo: *${data.resultado.externalUrl}*\n• Postagens (Fotos & Vídeos): *${formatNumberDecimal(data.resultado.mediaCount)}*\n• Total de Seguidores: *${formatNumberDecimal(data.resultado.followersAmount)}*\n• Total de Seguidos: *${formatNumberDecimal(data.resultado.followingAmount)}*\n–\n• Biografia:\n\`\`\`${data.resultado.biography || "❌️ Sem biografia!"}\`\`\``;
}

exports.TiktokStalker = (data, formatNumberDecimal) => { 
return `> 𝐓𝐢𝐤𝐭𝐨𝐤 - 𝐒𝐭𝐚𝐥𝐤𝐞𝐫\n—\n• Nome: *${data.resultado.users.nickname}* | @${data.resultado.users.username}\n• URL: *https://tiktok.com/@${data.resultado.users.username}*\n• Conta Verificada: *${data.resultado.users.verified === true ? "Sim" : data.resultado.users.verified === false ? "Não" : "Não"}*\n• Conta Privada: *${data.resultado.users.privateAccount === true ? "Sim" : data.resultado.users.privateAccount === false ? "Não" : "Não️"}*\n• Conta Comercial: *${data.resultado.users.commerceUser === true ? "Sim" : data.resultado.users.commerceUser === false ? "Não️" : "Não️"}*\n• Região: *${data.resultado.users.region}*\n—\n• Estatísticas:\n\t• Seguidores: *${formatNumberDecimal(data.resultado.stats.followerCount)}*\n\t• Seguindo: *${data.resultado.stats.followingCount}*\n\t• Curtidas: *${formatNumberDecimal(data.resultado.stats.heartCount)}*\n\t• Vídeos Publicados: *${formatNumberDecimal(data.resultado.stats.videoCount)}*\n\t• Vídeos Curtidos: *${formatNumberDecimal(data.resultado.stats.likeCount)}*\n—\n• Biografia: \n\`\`\`${data.resultado.users.signature.replaceAll(`\n\n`, `\n`)}\`\`\``
}


exports.MediaFire = (response) => {
return `→ Sucesso ao baixar o arquivo: *'${response.resultado.fileName}'*! Obrigado por esperar.\n• Extensão: *${response.resultado.mimetype}*\n• Peso (Tamanho): *${response.resultado.info.size}*\n• Upload: *${response.resultado.info.uploadDate}*`
}

exports.tiktok = (data) => {
const tags = data.resultado?.hashtag.map((v, index) => `#${v}`).join(' ');
  return  `> *# Informações - Vídeo:*\n• Usuário: *@${data.resultado?.author.nickname}* (@${data.resultado?.author.username})\n• Descrição: *${data.resultado?.description.trim() || "Sem descrição."}*\n• Hashtag's: *${data.resultado?.hashtag.length} | [${tags}]*\n–\n> *# Estatísticas do Vídeo:*\n• Contagem de Comentários: *${data.resultado?.statistics.commentCount}*\n• Contagem de Curtidas: *${data.resultado?.statistics.diggCount}*\n• Compartilhamentos: *${data.resultado?.statistics.shareCount}*\n• Visualizações: *${data.resultado?.statistics.playCount}*\n–\n> *# Informações - Áudio:*\n• Título: *${data.resultado?.music.title}*\n• Criador(a): *${data.resultado?.music.author}*\n• Album: *${data.resultado?.music.album || "Sem informação."}*`
}

exports.tiktokMusic = (data) => {
return `> *# Informações - Áudio:*\n• ID: *${data.resultado?.music.id}*\n• Título: *${data.resultado?.music.title}*\n• Criador(a): *${data.resultado?.music.author}*\n• Album: *${data.resultado?.music.album || "Sem informação."}*`
}

exports.soundcloud = (data, tinyUrl) => {
return `• Música: *${data.resultado.titulo}*\n• *Total de Downloads: *${data.resultado.total_downloads}*\n–\n\t• Caso o *áudio* não seja enviado, baixe através do link: ${tinyUrl.data}`
}

exports.icmsResult = (data) => {
return `📊 Estado ICMS: *${data.resultado.icms}%*\n–\n• Valor ICMS _(valor líquido/taxa)_: *R$ ${data.resultado.icmsTotal}*\n• Total BRL _(valor apresentado + valor icms, em real.)_: *R$ ${data.resultado.total}*\n• Total USD _(valor apresentado + valor icms, convertido p/dolar)_: *$ ${data.resultado.dolar}*\n–\n📌 *Observação:* O valor na remessa pode ser outro, esse cálculo é uma probabilidade de que pode ser aplicada essa taxa. Também pode variar a *alíquota* de cada estado, que é a tal coisa que está sendo encomendada.\n–\n⚠️ *Como é realizado o cálculo de um valor abaixo de R$50?*\n\tProduto × icms(seu estado) = valor_icms\n\tProduto + valor_icms = total\n–\n⚠️ *Como é realizado o cálculo de um valor acima de R$50?*\n 	 Produto + (60 + icms(seu estado)) = valor_icms\n	 Produto + valor_icms = total`
}

exports.syntaxIcms = (prefix) => {
return `*Ahn… desculpa!* Parece que o comando foi usado de forma errada… p-por favor, confira direitinho como usar abaixo para dar tudo certo, tá bom?\n–\nVocê precisa usar assim: *${prefix}icms 704|82*\n\n_explicando os valores:_\n\t• *704* – é o valor que você quer verificar a possível taxa aplicada.\n\t• *82* – é o DDD do estado onde você mora… ou de onde quer consultar… espero ter ajudado… ❄️📊`
}

exports.syntaxTrackParcels = (prefix) => {
return `• Coloque o código da encomenda fornecido pelo Correios, abaixo tem a *explicação e o exemplo de uso*:\n–\n⚠️ *Exemplo:* ${prefix}Rastrear [Código]\n\t• O *código de rastreamento dos Correios* serve para registrar que uma encomenda foi postada e permite localizá-la durante o processo de envio.\n\t• Ele é composto por 9 números e 4 letras, duas delas localizadas no início e duas no final da numeração, como no exemplo: *PC123456789BR*.`
}

exports.invalidCodeRastrear = () => {
return `• *Código inválido ou nenhum resultado foi retornado.* Por favor informe um código válido, _verifique se você seguiu a instrução abaixo:_\n\t• Ele é composto por 9 números e 4 letras, duas delas localizadas no início e duas no final da numeração, como no exemplo: *PC123456789BR*.`
}

exports.rastrearEncomenda = (dataResult, q) => {
return `📦 Rastreio de Encomendas:\n• N° de Rastreio: *${q}*\n• Última atualização: *${dataResult.resultado[0].datePost} (${dataResult.resultado[0].timeCount})*\n——\n📍 Histórico de Localização:\n` + dataResult.resultado.map((info, index) => `*[ ${index+1} ]* Status: ${info.description}\n• Postagem: *${info.timeCount} (${info.datePost})*`).join('\n–\n');
}

exports.lyrics = (data, II) => {
 return `• Título: *${data.resultado.name}*\n• Artista: *${data.resultado.byArtist.name}*\n• Descrição: *${data.resultado.description}*\n• URL: *${data.resultado.url}*\n• Letra (Original):\n${II}${data.resultado.lyricOriginal}${II}`
}

exports.result_APOD = (dataSab, resultExp) => {
return `🔭 Título - ${dataSab.nasa.title}\n\n🌐📝 Explicação - ${resultExp.result}`
}

exports.mediafireDownload = (ABC, encurt) => {
  return `*[ MediaFire ]* - Informações Arquivo:\n–\n• *Nome do Arquivo:* ${ABC.resultado[0].nama}\n• *Tamanho:* ${ABC.resultado[0].size}\n• *Tipo de arquivo a ser enviado:* ${ABC.resultado[0].mime}\n–\n*Por favor, aguarde um pouco estou realizando o envio do arquivo.*\n\t• Caso haver um atraso de *2min* pode ser o tamanho do arquivo a ser enviado.\n\t• *Não enviou?* Realize o download pelo link: ${encurt.data}`
}

exports.speed = (speedConverted, os, TimeCount) => {
return `🏓 *Ping:*\n▢ *Latência:* ${String(speedConverted.toFixed(3))} milisegundos.\n▢ *Uptime:* ${TimeCount(process.uptime())}\n—\n⚙️ *Sistema:*\n▢ Sistema Operacional: *${os.type()}*\n▢ Versão: *${os.release()}*\n▢ Memória RAM Usada: *${(os.freemem()/Math.pow(1024, 3)).toFixed(2)} GB*\n▢ Total de Memória RAM: *${(os.totalmem()/Math.pow(1024, 3)).toFixed(2)} GB*\n▢ Uso da CPU: *${os.loadavg()[0].toFixed(2)}%*\n▢ Uso da Memória RAM: *${((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2)}%*\n▢ Versão do NodeJS: *${process.version}*`
}

exports.horoscopo = (data) =>  {
itensAdicionais = data.resultado.signo.itensAdicionais.map((v, index) => `*${v.title}* - ${v.description}`).join(`\n–\n`);
return `🔮 *${data.resultado.date}:*\n• ${data.resultado.forecast}\n—\n➕️ *${data.resultado.signo.title}:*\n• ${data.resultado.signo.description}\n–\n${itensAdicionais}`
}

exports.dicionario = (data, dataDicio, capitalizeFirstLetter, III) => {
  return `• Termo(Palavra): *${capitalizeFirstLetter(dataDicio.resultado.term)}*\n• Significado: *${data.resultado[0].description}*\n• Etimologia (Origem da palavra):\n> ${dataDicio.resultado.etymology}\n• Gramatical: *${capitalizeFirstLetter(dataDicio.resultado.grammaticalClass)}*\n• Vogais: *${dataDicio.resultado.otherInfo.vowels.split(" ").map((v, index) => `${v}`).join(', ')}*\n• Consoantes: *${dataDicio.resultado.otherInfo.consonants.split(" ").map((v, index) => `${v}`).join(', ')}*\n*—*\n• Palavra no plural: ${III}${dataDicio.resultado.plurals.map((v) => v).join(', ')}${III}\n• Sinônimos: ${III}${dataDicio.resultado.synonyms.map((v) => v).join(', ')}${III}\n• Palavras relacionadas: ${III}${dataDicio.resultado.relatedWords.map((v) => v).join(', ')}${III}\n*—*\n🔍 Frases e exemplos com a palavra “${data.resultado[0].term}”:\n${dataDicio.resultado.exampleSentences.map((v, index) => `\t*${index + 1}.* _${v.frase}_ — *${v.fonte}*`).join('\n')}\n*—*\n📚 Definições:\n${dataDicio.resultado.definitions.map((v, index) => `\t*${index + 1}*. ${v}`).join('\n')}\n*—*\n✒️ Lexicógrafo(a):\n\t• Nome: *${dataDicio.resultado.authorInfo.name}*\n\t• Biografia: *${dataDicio.resultado.authorInfo.biography}*`
}

exports.respostaChatGPT = (dataResulted) => {
return `${dataResulted.result}`
}

exports.respostaResumida = (dataResulted) => {
return `${dataResulted.result}`
}

exports.respostaRedacao = (dataResulted) => {
return `${dataResulted.result}`
}

exports.wikiResposta = (wikis) => {
return `${wikis.data.query.pages[Object.keys(wikis.data.query.pages)].extract}`
}

exports.stickerMetadata = (stickerMetadata) => {
return `• Emojis: *${stickerMetadata?.emojis?.join(' ') || '❌'}*\n• ID do Pacote: *${stickerMetadata['sticker-pack-id'] || '❌'}*\n• Nome do Pacote: *${stickerMetadata['sticker-pack-name'] || '❌'}*\n• Autor do Pacote:  *${stickerMetadata['sticker-pack-publisher'] || stickerMetadata['sticker-author-name'] || '❌'}*\n• Sticker Maker _(Android)_: *${stickerMetadata['android-app-store-link'] || '❌'}*\n• Sticker Maker _(iOS)_: *${stickerMetadata['ios-app-store-link']|| '❌'}*`;
}

exports.googleImage = (data) => {
return `• Título: *${data.origin.title || "Não existe título na imagem."}*\n• URL: *${data.origin.website.url || "Sem URL."}* \n• Fonte: *${data.origin.website.name || "Sem informação."} _(${data.origin.website.domain || "Sem informação."})_*\n• Resolução: *${data.height || "0"} × ${data.width || "0"}*`
}

exports.aptoide = (getApk, sizeApk, lnDown) => {
return `• Nome: *${getApk.name}*\n• Pacote do aplicativo à ser enviado: *${getApk.package}*\n• Tamanho do arquivo à ser enviado por mim: *${sizeApk} MB*\n• Versão do aplicativo à ser enviada por mim: *${getApk.file.vername}*\n——\n• [📁] *Não baixou?* Clique no link abaixo e realize o processo:\n↳ ${lnDown.data}`
}

exports.translator = (bla) => {
return `Seu texto foi traduzido com sucesso: ${bla.result}`
}

exports.clima = (wttrin) => {
return `️📡 → Informações Meteorológicas do clima no local: *${wttrin.nearest_area.map((j, i) => j.areaName[i].value+', '+ j.region[i].value +', ' + j.country[i].value).flat().join(' | ')}*\n• Temperatura atual: *${wttrin.current_condition.map(j => j.temp_C).flat().join(' | ')} C° - [${wttrin.current_condition.map(j => j.temp_F).flat().join(' | ')} F°]*\n• Sensação térmica: *${wttrin.current_condition.map(j => j.FeelsLikeC).flat().join(' | ')} C° = [${wttrin.current_condition.map(j => j.FeelsLikeF).flat().join(' | ')} F°]*\n• Umidade do Ar: *${wttrin.current_condition.map(j => j.humidity).flat().join(' | ')}%*\n• Condição atual de Chuvas em Polegadas: *${wttrin.current_condition.map(j => j.precipInches).flat().join(' | ')} Pol - [${wttrin.current_condition.map(j => j.precipMM).flat().join(' | ')} MM]*\n• Cobertura de Nuvens: *${wttrin.current_condition.map(j => j.cloudcover).flat().join(' | ')}%*\n• Índice de UV _(UltraVioleta)_: *${wttrin.current_condition.map(j => j.uvIndex).flat().join(' | ')}*\n• Nível de visibilidade: *${wttrin.current_condition.map(j => j.visibility).flat().join(' | ')} KM - [${wttrin.current_condition.map(j => j.visibilityMiles).flat().join(' | ')} M.]*\n• Descrição: *${wttrin.current_condition.map(j => j.weatherDesc).flat().map(j => j.value).flat().join(', ')} - [ID #${wttrin.current_condition.map(j => j.weatherCode).flat().join(' | ')}]*\n• Direção do vento: *${wttrin.current_condition.map(j => j.winddir16Point).flat().join(', ')} - [${wttrin.current_condition.map(j => j.winddirDegree).flat().join(', ')}°]*\n• Velocidade dos ventos em KM (Kilometros): *${wttrin.current_condition.map(j => j.windspeedKmph).flat().join(', ')} KM - [${wttrin.current_condition.map(j => j.windspeedMiles).flat().join(', ')} M.]*\n• Pressão do Ar: *${wttrin.current_condition.map(j => j.pressure).flat().join(' | ')} hPa - [${wttrin.current_condition.map(j => j.pressureInches).flat().join(' | ')} mmHg]*\n—\n️🏘 → Algumas informações do local:\n• Total de Habitantes: *${wttrin.nearest_area.map(j => j.population).flat().join(' | ')}*\n• Data & Hora: *${wttrin.current_condition.map(j => j.localObsDateTime).flat().join(', ')}*\n• Horário de Observação: *${wttrin.current_condition.map(j => j.observation_time).flat().join(', ')}*`
}

exports.shazam = (dados) => {
return `✅️🤖 - Com uma similaridade de *${dados.similarity}* com o áudio, segue as informações da música semelhante:\n—\n• Música: *${dados.music}*\n• Artista(s): *${dados.artists_name}*\n• Álbum: *${dados.album_name}*\n• Produtor(a): *${dados.producer || 'Não especificado.'}*\n• Duração: *${dados.duration}*\n• Data de Lançamento: *${dados.launch}*\n• Gênero(s): *${dados.genres.map((v, index) => v).join(', ')}*`
}

exports.movies = (movieInfo) => {
return `• Título: *${movieInfo.data.results[0].title}* (${movieInfo.data.results[0].original_title})\n• Lançamento: _${movieInfo.data.results[0].release_date}_\n• Avaliações: _${movieInfo.data.results[0].vote_average} - (${movieInfo.data.results[0].vote_count} Votos)_\n• Popularidade do Filme (%): *${movieInfo.data.results[0].popularity.toFixed(1)}%*\n• Classificação adulta? *${movieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}*\n• Linguagem Oficial do Filme: *${movieInfo.data.results[0].original_language}*\n–\n• [🎬] *Sinopse do Filme:*\n↳ ${movieInfo.data.results[0].overview}`
}

exports.series = (serieInfo) => {
return `• Título: *${serieInfo.data.results[0].name}* (${serieInfo.data.results[0].original_name})\n• Lançamento: *${serieInfo.data.results[0].first_air_date}*\n• Avaliações: *${serieInfo.data.results[0].vote_average} - (${serieInfo.data.results[0].vote_count} Votos)*\n• Popularidade da Série (%): *${serieInfo.data.results[0].popularity.toFixed(1)}%*\n• Classificação adulta? *${serieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}*\n• Linguagem Oficial da Série: *${serieInfo.data.results[0].original_language}*\n–\n• [🌟] *Sinopse da Série:*\n↳ ${serieInfo.data.results[0].overview}`
}

exports.searchIpAdress = (ip) => {
return `*📡 Localizar + Informações ${ip.data.type}*\n–\n• *Código IP:* ${ip.data.ip}\n• *Tipo de Endereço IP:* ${ip.data.type}\n• *Província:* ${ip.data.region} / ${ip.data.city}\n• *Latitude:* ${ip.data.latitude}\n• *Longitude:* ${ip.data.longitude}\n• *Provedor Wi-Fi:* ${ip.data.isp}\n*Continente:* ${ip.data.continent} - ${ip.data.continent_code}\n• *País:* ${ip.data.country} - *DDI:* ${ip.data.country_phone}\n• *Sigla:* ${ip.data.country_code} - *Capital:* ${ip.data.country_capital}\n• *Fuso Horário:* ${ip.data.timezone} ${ip.data.timezone_name} ${ip.data.timezone_gmt}\n• *Moeda do País:* ${ip.data.currency} - ${ip.data.currency_code}`
}

exports.searchCep = (res) => {
return `🏠 *Consulta CEP:*\n–\n*Número informado:* ${res.cep}\n• *Logradouro:* ${res.street}\n• *Complemento:* Não encontrado.\n• *Código do DDD:* ${res.ddd}\n• *Bairro:* ${res.neighborhood}\n• *Cidade/Estado:* ${res.city} - ${res.state}\n• *Código do IBGE:* ${res.ibge}\n• *Código do Siafi:* ${res.siafi}`
}

exports.noresult = () => {
  return `Desculpe, não consegui encontrar o que você procurava usando esse método. Poderia tentar de outra forma, por favor? Estou aqui para ajudar! ❄️`
}

exports.profileInformation = (pushname, sender, info, putar, putar2, gostosurar, gostosurar2, nivelgador, nivelgado2r, programa, status) => {
  return `
╭━━━━━━━◉                   ◉━━━━━━━╮
 ╔┉𑁍┉════『多🧊海 』════┉𑁍┉╗ 
 ║👤 「 *INFORMAÇÕES - PERFIL*」 
 ╚┉𑁍┉════『多❄️海 』════┉𑁍┉╝
╰━━━━━━━◉                   ◉━━━━━━━╯

 ╭═══════◉
 ┆  ╔┉𑁍┉═══『多川 海 』═══┉𑁍┉╗
 ┆  ║⏤͟͟͞͞⿻͜͡ꨄNome: *${pushname} (@${sender.split("@")[0]})*
 ┆  ║ ⏤͟͟͞͞⿻͜͡ꨄVocê está atualmente conectado em um dispositivo: ${info.key.id.length > 21 ? '*Android*' : info.key.id.substring(0, 2) == '3A' ? '*iOS*' : '*Windows/Linux*'}
 ┆  ║⏤͟͟͞͞⿻͜͡ꨄBiografia: *${status}*
 ┆  ║⏤͟͟͞͞⿻͜͡ꨄSeu nível de putinha: *${putar}${putar2}%*
 ┆  ║⏤͟͟͞͞⿻͜͡ꨄSeu nível de gostosura: *${gostosurar}${gostosurar2}%*
 ┆  ║⏤͟͟͞͞⿻͜͡ꨄSeu nível do gadometro: *${nivelgador}${nivelgado2r}%*
 ┆  ║⏤͟͟͞͞⿻͜͡ꨄValor do seu programa: *R$${programa}*
 ┆  ╚┉𑁍┉═══『多川 海 』═══┉𑁍┉╝
 ╰═══════◉

_*Que estes números reflitam a sua energia equilibrada, assim como o equilíbrio de Liyue. ⭐️*_`
}

exports.warningAdvertencia = (menc_os2, dfqn) => {
  return `Olá, @${menc_os2.split("@")[0]} — você recebeu ${dfqn}/3 advertências. Por favor, cuide para não atingir 3, pois isso resultará na sua remoção. Que possamos manter a harmonia do grupo juntos! ❄️`
}

exports.finishAdvertencia = (menc_os2) => {
  return `@${menc_os2.split("@")[0]}... você atingiu o limite de 3 advertências. Por isso, precisarei me despedir por agora. Recomendo que entre em contato com os guardiões do grupo para compreender melhor o ocorrido. Que a paz de Liyue esteja com você. ❄️`
}

exports.syntaxAnonymousMail = (prefix) => {
return `*Para usar o correio elegante ou não*, pode ser uma indireta também.. 😬\n–\nVocê deve primeiramente copiar o número do seu crush ou inimigo(a), após isso, pense em uma mensagem.\n   • Exemplo: *${prefix}correio [número/msg]*\n   • Exemplo sendo usado em prática: *${prefix}correio +5582.../eu te amo*`
}

exports.anonymousMail = (txt2) => {
return `📪 Você recebeu uma mensagem do maior correio anônimo do Brasil.\n–\n▶️ Quem te enviou? *Desconhecido*\n–\n`+"```"+txt2+"```"
}

exports.sucessAnonymousMail = () => {
return `✅ O correio foi enviado para o remetente com sucesso.\n–\n• *Obs:* Ele(a) pode descobrir quem enviou. _Não me responsabilizo se você enviou mensagens desencorajadas._`
}

exports.unbannedMessage = (blcp) => {
  return `@${blcp.split('@')[0]} teve seu banimento revogado... Agora poderá utilizar os comandos da Ganyu novamente. Que possamos seguir em harmonia, como os ensinamentos de Liyue nos orientam. ❄️`
}

exports.bannedMessage = (blcp) => {
  return `@${blcp.split('@')[0]} foi banido... e não poderá mais utilizar os comandos da Ganyu. Espero que um dia possamos restaurar a harmonia... ❄️`
}

exports.ownersList = (NomeDoBot, numerodono_ofc, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6) => {
return `Olá, aqui está a lista de proprietários do bot: ${NomeDoBot}\n–\n*Dono Oficial:* wa.me/${numerodono_ofc}\n–\nDono [ 1 ] - wa.me/${numero_dono1}\nDono [ 2 ] - wa.me/${numero_dono2}\nDono [ 3 ] - wa.me/${numero_dono3}\nDono [ 4 ] - wa.me/${numero_dono4}\nDono [ 5 ] - wa.me/${numero_dono5}\nDono [ 6 ] - wa.me/${numero_dono6}`
}

exports.statusBot = (isAnticall, isAntiPv, isAntiPv2, isAntiPv3, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, isAntiDDD, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, IsAntlinkgp, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isWelkom, isWelkom2, isSimi, isSimi2, isAutofigu, isAutorepo, isModobn, isModoAluguel, isLevelingOn) => {
return `Status de funcionalidades ativaveis para proteger o grupo / se divertir com seus participantes.\nAs funcionalidades como *Anti Privado - Anti Ligação - Modo Aluguel*, são ativações que somente o dono, pode executar, _então caso esteja ativa você não poderá executar comandos no privado ou fazer ligações ao número do bot._\n–\n➱ Anti Ligação: ${isAnticall ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti PV Block: ${isAntiPv ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti PV (2) - Sem bloqueio de usuário(s): ${isAntiPv2 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti PV (3) - Não responde ninguém no privado: ${isAntiPv3 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Imagem: ${isAntiImg ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Vídeo: ${isAntiVid ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Áudio: ${isAntiAudio? '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Sticker: ${isAntiSticker ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Documento: ${Antidoc ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Contato ${isAntiCtt ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Localização: ${Antiloc ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Link Grupo: ${isAntilinkgp ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Link Hard: ${isAntiLinkHard ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Fake: ${isAntifake ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Notas: ${isAntiNotas ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Catalogo: ${isAnticatalogo ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Palavrão: ${isPalavrao ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Limite Caracteres: ${isAntiFlood ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Bem Vindo 1: ${isWelkom ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Bem Vindo 2: ${isWelkom2 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Simi 1: ${isSimi ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Simi 2: ${isSimi2 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Auto Sticker: ${isAutofigu ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Auto Resposta: ${isAutorepo ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Modo Brincadeira: ${isModobn ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Modo Aluguel: ${isModoAluguel ?  '✓ - Função ativa.' : '✕ - Não ativado.'}\n➱ Level: ${isLevelingOn ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti DDD: ${isAntiDDD ?  '✓ - Função ativa.' : '✕ - Desativado.'}`
}

exports.errorUploadImage = () => {
  return `❌️ Oh não... houve um erro na conversão. Talvez o vídeo tenha ultrapassado o limite permitido. Para manter tudo em ordem, só consigo converter vídeos com até 30 segundos, tudo bem? ❄️`
}

exports.noArgsSearch = () => {
  return `Como secretária dos Qixing, sempre organizo tudo com precisão... Mas agora estou sem dados para essa pesquisa. Poderia me dizer o que deseja procurar? ❄️`
}

exports.syntaxLogos = () => {
  return `Hm... não encontrei nenhum texto. Para que eu possa criar a logo direitinho, preciso que você insira uma mensagem junto ao comando, está bem? ❄️`
}

exports.quoteCurrencies = (response) => {
return `*[COTAÇÃO]* - Os dados informados são atualizados 24h por dia: 🗣💰\n–\n• Moeda: *${response.name}*\n• Valor da moeda mais alto em 24 horas: *R$ ${Number(reponse.high).toFixed(2)}*\n• Valor da moeda mais baixo em 24 horas: *R$ ${Number(repose.low).toFixed(2)}*\n• Valor da moeda atualizado agora no momento: *R$ ${Number(resposta.bid).toFixed(2)}*`
}

exports.syntaxWebSticker = (prefix) => {
  return `❄️ *Instruções do comando 'figuweb'* — por Ganyu, secretária dos Qixing\n\n• *Função:* Criar uma figurinha com texto personalizado e fundo colorido, perfeita para expressar seus sentimentos com elegância.\n—\n• *Sintaxe do Comando:*\n\t- ${prefix}figuweb [texto]/[número da cor]\n\n• *Escolha do Fundo:*\n\t- Você pode selecionar entre 4 tonalidades distintas. Basta informar o número da cor desejada após o texto, usando uma barra (/).\n\n• *Cores disponíveis:*\n\t- 1. Preto (Padrão)\n\t- 2. Branco\n\t- 3. Vermelho\n\t- 4. Azul\n\n• *Exemplos de uso:*\n\t- ${prefix}figuweb Olá, como vai?/1\n\t- ${prefix}figuweb Bom dia!/2\n\t- ${prefix}figuweb Boa tarde!/3\n\t- ${prefix}figuweb Boa noite!/4\n\n• Caso não informe uma cor, o fundo padrão (Preto) será aplicado.\n\nSe precisar de mais ajuda, estarei por aqui — cumprindo meu dever com equilíbrio e serenidade, como em Liyue. ❄️`
}

exports.groupInvitation = (sender, cnvt, prefix) => {
  return `*[SOLICITAÇÃO DE CONVITE]* — Um pedido foi enviado para que eu entre em um novo grupo.\n—\n⚙️ *Informações da Solicitação:*\n      • Número do emissor: *wa.me/${sender.split("@")[0]}*\n      • Link do grupo: *${cnvt}*\n—\n📑 *Como responder ao pedido?*\n      • Para aceitar a solicitação, por favor, utilize o comando: ${prefix}entrar seguido do link do grupo.\n         Exemplo: *${prefix}entrar ${cnvt}*\n      • Para recusar, basta usar o comando apropriado. Isso apenas notificará o solicitante de forma educada.\n         Exemplo: *${prefix}recusar ${sender.split("@")[0]}*\n\nComo secretária dos Qixing, fico à disposição para ajudar com equilíbrio e organização. ❄️`
}

exports.removeUserAntiPlvr = () => {
  return `*「 REMOVIDO(A) POR USAR UMA PALAVRA PROIBIDA 」*\nComo secretária dos Qixing, devo zelar pela ordem... Essa conduta não está de acordo com as regras sagradas do grupo. Por isso, a remoção foi necessária. Por favor, na próxima vez, consulte as regras antes de escrever qualquer coisa, sim? ❄️`
}

exports.permissionDenied_rUser = () => {
  return `Ah, sinto muito... Eu não sou um guardião aqui, então não posso banir ninguém! Mas estou sempre pronta para ajudar no que for possível! ❄️`
}

exports.antisRandomMessage = () => {
  return `✨ Uma dessas proteções está ativada, mas como você é um guardião do grupo, não será removido(a) _(ANTI CONTATO - ANTI CATÁLOGO - ANTI LOCALIZAÇÃO)_ ❄️ Que continuemos protegendo Liyue juntos!`
}

exports.charactersAnti = () => {
  return `🚨 Muitas palavras foram lançadas de uma vez, quebrando as regras do grupo... Pelos guardiões, este intruso será removido para preservar a harmonia. Que a calma de Liyue nos guie! ❄️`
}

exports.markingAllMember = () => {
  return `⚠️ Parece que uma mensagem marcou todos no grupo de forma invisível… Isso me lembra aquelas armadilhas ocultas em Liyue! Por segurança do grupo, o intruso foi removido. Se precisar esclarecer algo, por favor, fale com um dos guardiões. Cuidemos do equilíbrio, juntos! ❄️🌸`
}

exports.absenceRecordOwner = (NickDono, tabelin) => {
return `Ahn… olá! O meu querido proprietário "${NickDono}" está ausente no momento… ❄️\n↺ Desde o horário: ${tabelin.Ausente_Desde}\n–\n☁️ Mensagem de ausência: ${tabelin.Motivo_Da_Ausência}`
}

exports.absenceRecordAdmin = (blak) => {
return `*Registro de Ausência* – O administrador "@${blak.id.split("@")[0]}" está ausente no momento… ❄️\n–\n☁️ Mensagem deixada: ${blak.msg}`
}

exports.floodCommands = () => {
return `Espere *5s* para usar outro comando ou executar o mesmo...`
}

exports.timeRequired = () => {
return `Não é possível realizar download de áudios ou vídeos acima de *20 minutos*.`
}

exports.error = () => {
return `Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`
}

exports.messageProhibitedDetAdmin = () => {
return `> ⚠️ Mensagem proibida detectada:\n• Olá adminstrador(a), sua punição foi anulada pois você pertence à equipe de organização do grupo! Fique tranquilo(a) senhor(a)!`;
}

exports.linkProhibitedDetAdmin = () => {
return `> ⚠️ Link detectado! Um dos tipos de AntiLink está ativo neste grupo.\n• Olá adminstrador(a), sua punição foi anulada pois você pertence à equipe de organização do grupo! Fique tranquilo(a) senhor(a)!`
}

exports.pollMessageDetect = (senderUser) => {
  return `⚠️ *[@${senderUser.split('@')[0]}]* - Um dos adminstradores habilitou uma das configurações de segurança que impede que membros inferiores ao administrador(a) não pode criar enquetes neste grupo. Então, a enquete criada será apagada para todos!`;
}

exports.messageProhibitedDetUser = () => {
return `🚨- Uma mensagem proibida detectada de acordo com as regras do grupo e antis ativados estou realizando o banimento do infrator das regras do grupo! Para mais informações sobre seu banimento entre em contato com adminstrador(a) do grupo!`;
}

exports.antiCalls = () => {
return `📵 - Olá, tudo bem? Você não pode realizar ligações para o bot. Lembrando, o anti ligações está ativado então você será bloqueado no privado, fale com meu/minha chefe para realizar o desbloqueio.`;
}

exports.helpGroupSettings = (prefix, sender) => {
return `🤠 Olá administrador(a) *@${sender.split("@")[0]}*! Tudo bem?\n> Seja bem vindo(a), ao menu de ajuda do comando *'grupo'*:\n–\n1. _${prefix}grupo_ *-open* _→_ Permite o envio das mensagens por todos os participantes do grupo.\n\n2. _${prefix}grupo_ *-close* _→_ Permite o envio de mensagens apenas somente para administradores do grupo.\n\n3. _${prefix}grupo_ *-livre* _→_ Permite a todos os integrantes que editem os dados.\n\n4. _${prefix}grupo_ *-private* _→_ Só irá permitir que as alterações nos dados do grupo, sejam alteradas somente por administradores do mesmo.`
}

exports.helpPhotoPrivacy = (prefix, sender) => {
return `🤪 Olá proprietário(a) *@${sender.split("@")[0]}*! Tudo bem?\n> Seja bem vindo(a), ao menu de ajuda do comando *'wprivacyph'*:\n–\n1. _${prefix}wprivacyph_ *-cntt* _→_ Permite somente que os contatos salvos no dispositivo, vejam a foto de perfil.\n\n2. _${prefix}wprivacyph_ *-all* _→_ Permite que todos vejam a foto de perfil do bot.\n\n3. _${prefix}wprivacyph_ *-noall* _→_ Ninguém irá ver a foto de perfil colocada no bot, ou seja, até o proprietário está restrito(oculto) de ver.\n–\n📍 *Função:* O comando tem a função de alterar a privacidade da foto de perfil, ou seja, você tem como alterar diretamente do bot, sem a precisão abrir o numero do bot e mexer nas configurações.`
}

exports.helpGroupPrivacy = (prefix, sender) => {
return `🤪 Olá proprietário(a) *@${sender.split("@")[0]}*! Tudo bem?\n> Seja bem vindo(a), ao menu de ajuda do comando *'wprivacygp'*:\n–\n1. _${prefix}wprivacygp_ *-cntt* _→_ Permite somente que os contatos salvos no dispositivo, adicionem em grupo.\n\n2. _${prefix}wprivacygp_ *-all* _→_ Permite que todos os contatos adicionem no grupo, sem nenhuma interferência.\n\n3. _${prefix}wprivacygp_ *-noall* _→_ Ninguém conseguirá adicionar o bot em grupos, até o(a) dono(a) está restrito.\n–\n📍 *Função:* O comando tem a função de alterar a privacidade de todos os usuários adicionar o contato da bot em grupos, ou seja, você tem como alterar diretamente do bot, sem a precisão abrir o numero do bot e mexer nas configurações do número.`
}

exports.errorResponseSimi = () => {
response = ["Eu não entendo tudo senhor(a), sou uma simples simi! Me explique...", "Eu sei, eu sei! 👀 Não querendo abusar, o que é isso? Me ensina...", "Não me xinga amor! 😭 Eu ainda tenho muito à aprender...", "*An, oxe?* 🤷🏻‍♀ O que é isso? Poderia me explicar por favor humano(a)?", "Eu sou um(a) bot! 🤖 Mas eu não sei de tudo não! Me explica por favor?"];
return response[Math.floor(Math.random() * response.length)]
}

exports.GshowGE = (dataResult) => {
return dataResult.resultado.map((info, index) => `${index+1}. *${info.titulo || 'Manchete sem título.'}* - (${info.horarioPostagem || 'Há X horas.'})\n• ${info.trechoManchete || 'Manchete sem descrição.'}`).join('\n–\n');
}

exports.helpNoticesG = (sender, prefix) => {
return `😸 Olá @${sender.split('@')[0]}, seja bem-vindo ao menu de ajuda e tutoriais do comando: *'gamenews'* | *'gamesnews'*\n–\n> O comando possuí 11 argumentações de uso, cada uma tem um filtro de notícia. Lembrando, este comando é somente para notícias de jogos online! Para ver notícias de Time, use: _${prefix}esportenews_.\n–\n*01.* Call of Duty: ${prefix}gamenews -cod\n*02.* Counter-Strike: ${prefix}gamenews -csgo\n*03.* FIFA 2024: ${prefix}gamenews -fifa\n*04.* Fortnite: ${prefix}gamenews -fortnite\n*05.* GameXP: ${prefix}gamenews -gamexp\n*06.* PES 2024: ${prefix}gamenews -pes\n*07.* League of Legends: ${prefix}gamenews -lol\n*08.* Pokemon: ${prefix}gamenews -pokemon\n*09.* Rainbow 6: ${prefix}gamenews -r6\n*10.* Valorant: ${prefix}gamenews -valorant\n*11.* Pokemon TCG: ${prefix}gamenews -tcg`
}

exports.helpNoticesEsporte = (sender, prefix) => {
return `🌟 Olá @${sender.split('@')[0]}, seja bem-vindo ao menu de ajuda e tutoriais do comando: *'esporte_noticias'* | *'esportenews'*\n–\n> O comando possuí 18 argumentações de uso, cada uma tem um filtro de notícia. Lembrando, este comando é somente para notícias de esportes! Para ver notícias de jogos online, use: _${prefix}gamenews_.\n–\n*01.* Todas as categorias agrupadas à um só parâmetro: ${prefix}esportenews -all\n*02.* Futebol: ${prefix}esportenews -futebol\n*03.* Futsal: ${prefix}esportenews -futsal\n*04.* Skate: ${prefix}esportenews -skate\n*05.* Surfe: ${prefix}esportenews -surf\n*06.* Basquete: ${prefix}esportenews -basquete\n*07.* Vôlei: ${prefix}esportenews -volei\n*08.* Tênis: ${prefix}esportenews -tenis\n*09.* Atletismo: ${prefix}esportenews -atletismo\n*10.* Natação: ${prefix}esportenews -natacao\n*11.* Ciclismo: ${prefix}esportenews -ciclismo\n*12.* Boxe: ${prefix}esportenews -boxe\n*13.* Beisebol: ${prefix}esportenews -beisebol\n*14.* Futebol EUA: ${prefix}esportenews -futebol-eua\n*15.* Judô: ${prefix}esportenews -judo\n*16.* Ginástica: ${prefix}esportenews -ginastica\n*17.* Golfe: ${prefix}esportenews -golfe\n*18.* Fórmula 1: ${prefix}esportenews -f1`
}

exports.cmdBlockGroup = () => {
return `*A função está bloqueada neste grupo!* O adm restringiu o uso deste comando, então os participantes deste grupo estão impossibilitados de usar.`;
}

exports.cmdBlockGlobal = () => {
return `Este comando foi bloqueado por meu dono(a) para todos os usuários.`;
}