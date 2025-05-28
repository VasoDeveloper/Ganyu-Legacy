const fs = require('fs')

exports.palavrasANA = [
    {
      palavraOriginal: "AMOR",
      resposta: "Amor",
      dica: "É um sentimento mais profundo, duradouro e estável baseado numa relação de reciprocidade e cuidado."
    },
    {
      palavraOriginal: "BRASIL",
      resposta: "Brasil",
      dica: "Maior país da América Latina, conhecido por sua diversidade cultural."
    },    
    {
      palavraOriginal: "PORTUGAL",
      resposta: "Portugal",
      dica: "É o Estado-Nação mais antigo da Europa e um dos mais antigos do mundo."
    },
    {
      palavraOriginal: "HIDRANTE",
      resposta: "Hidrante",
      dica: "Tem como finalidade o combate ao fogo, proteção de vidas e do patrimônio."
    },
    {
      palavraOriginal: "BANANA",
      resposta: "Banana",
      dica: "Por ser um fruto partenocárpico, não possui sementes, com exceção de uma espécie vendida no mercado indonésio, a Musa balbisiana."
    },
    {
      palavraOriginal: "CIMENTO",
      resposta: "Cimento",
      dica: "É um pó fino com propriedades aglomerantes, aglutinantes ou ligantes, que se enrijece ao entrar em contato com a água."
    },
    {
      palavraOriginal: "SATURNO",
      resposta: "Saturno",
      dica: "É o segundo maior planeta do Sistema Solar, com 9 vezes o tamanho da Terra."
    },
    {
      palavraOriginal: "CAMARÃO",
      resposta: "Camarão",
      dica: "É um fruto do mar, especificando o tipo são crustáceos."
    },
    {
      palavraOriginal: "YOUTUBE",
      resposta: "YouTube",
      dica: "É um aplicativo que tem uma diversidade de vídeos e músicas."
    },
    {
      palavraOriginal: "PISTOLA",
      resposta: "Pistola",
      dica: "Modernamente podemos conceituar como arma curta, raiada, portátil."
    },
    {
      palavraOriginal: "SKATE",
      resposta: "Skate",
      dica: "É constituído uma prancha, quatro rodinhas e dois eixos que prendem as rodas."
    },
    {
      palavraOriginal: "HADES",
      resposta: "Hades",
      dica: "Mitologia, era visto como um deus insensível, impiedoso e repugnante."
    },
    {
      palavraOriginal: "PERSÉFONE",
      resposta: "Perséfone",
      dica: "Mitologia, deusa das ervas, flores, frutos e perfumes, filha de Zeus e Deméter."
    },
    {
      palavraOriginal: "PASTEL",
      resposta: "Pastel",
      dica: "É um alimento composto por uma massa à base de farinha de trigo a que se dá a forma de um envelope."      
    },
    {
      palavraOriginal: "KAMAITACHI",
      resposta: "Kamaitachi",
      dica: "É cantor e compositor Brasileiro do estado de RJ, suas músicas começaram a fazer sucesso após o lançamento de Manual do Suicidio, em 4 de janeiro de 2018."
    },
    {
      palavraOriginal: "IRACEMA",
      resposta: "Iracema",
      dica: "É um romance escrito em 1865, a virgem dos lábios de mel, que tinha os cabelos mais negros que a asas da graúna e mais longos que seu talhe de palmeira."
    },
    {
      palavraOriginal: "NETFLIX",
      resposta: "Netflix",
      dica: "Aplicativo de Streaming, a partir de R$19,90 o plano mais básico..."
    },
    {
      palavraOriginal: "GUATEMALA",
      resposta: "Guatemala",
      dica: "A cultura indígena domina o país, sobretudo no interior e essa composição torna o país diferente de seus vizinhos."
    },
    {
      palavraOriginal: "LUBA",
      resposta: "Luba",
      dica: "O criador de conteúdo produz vídeos de humor com reações, desafios e jogo, além de collabs com outros criadores de conteúdo com quem arranca muitas risadas! Atualmente o criador está com 8.8M de inscritos no aplicativo YouTube!"
    },
    {
      palavraOriginal: "SAXOFONE",
      resposta: "Saxofone",
      dica: "Instrumento Musical"
    },
    {
      palavraOriginal: "AMEIXA",
      resposta: "Ameixa",
      dica: "É uma fruta que possui alto valor nutritivo, é rica em açúcar, sais minerais (cálcio, fósforo e ferro) e algumas vitaminas."
    },
    {
      palavraOriginal: "MACEIÓ",
      resposta: "Maceió",
      dica: "É uma cidade do Brasil, a capital do estado do Nordeste e conhecida por suas praias e belezas naturais."
    },
    {
      palavraOriginal: "PANFLETOS",
      resposta: "Panfletos",
      dica: "São objetos usados para ler e geralmente são feitos de papel."
    },
    {
      palavraOriginal: "ESCOLA",
      resposta: "Escola",
      dica: "É um ambiente de formação e educação, geralmente frequentado por crianças e adolescentes."
    },
    {
      palavraOriginal: "ITÁLIA",
      resposta: "Itália",
      dica: "É um país do continente europeu, um país românico e também é conhecido por sua arte e arquitetura."
    },
    {
      palavraOriginal: "FRANÇA",
      resposta: "França",
      dica: "É um país do continente europeu, conhecido por sua moda e gastronomia."
    },
    {
      palavraOriginal: "ÓDIO",
      resposta: "Ódio",
      dica: "É um sentimento negativo e também conhecido por sua tristeza e dor."
    },
    {
      palavraOriginal: "DIABO",
      resposta: "Diabo",
      dica: "É uma divindade maligna, conhecido por sua maldade e crueldade."
    },
    {
      palavraOriginal: "DEUS",
      resposta: "Deus",
      dica: "É uma divindade suprema, conhecido por sua onipotência e onisciência."
    },
    {
      palavraOriginal: "INFERNO",
      resposta: "Inferno",
      dica: "É um lugar mitológico, conhecido por seu fogo e sofrimento."
    },
    {
      palavraOriginal: "PARAÍSO",
      resposta: "Paraíso",
      dica: "É um lugar mitológico, conhecido por sua beleza e perfeição."
    },
    {
      palavraOriginal: "ELDORADO",
      resposta: "Eldorado",
      dica: "É uma cidade mítica, conhecida por seu ouro e riquezas."
    },
    {
      palavraOriginal: "BABILÔNIA",
      resposta: "Babilônia",
      dica: "É uma cidade da Mesopotâmia, conhecida por sua riqueza e cultura."
    },
    {
      palavraOriginal: "GOMORRA",
      resposta: "Gomorra",
      dica: "É uma cidade bíblica, conhecida por sua depravação e pecado."
    },
   {
      palavraOriginal: "ALEMANHA",
      resposta: "Alemanha",
      dica: "É um país germânico do continente europeu, ele é basicamente conhecido por sua tecnologia e indústria."
    },
    {
      palavraOriginal: "SOL",
      resposta: "Sol",
      dica: "É uma estrela, a fonte de luz e calor da Terra e também conhecido por sua importância para a vida."
    },
    {
      palavraOriginal: "ESTRELA",
      resposta: "Estrela",
      dica: "É um corpo celeste luminoso, conhecido por sua beleza e variedade."
    },
    {
      palavraOriginal: "MONTANHA",
      resposta: "Montanha",
      dica: "É uma elevação do terreno, conhecida por sua beleza e majestade."
    },
    {
      palavraOriginal: "VULCANO",
      resposta: "Vulcano",
      dica: "É uma montanha que expele lava e gases, conhecida por sua força e destruição."
    },
    {
      palavraOriginal: "ANIVERSÁRIO",
      resposta: "Aniversário",
      dica: "Um momento de alegria e celebração."
    }
]

exports.showdomilhao = [
{
original: 'AMEIXA',
foto: 'https://telegra.ph/file/84928021bd4e6dfe8ff8c.jpg'
}, 
{
original: '100',
foto: 'https://telegra.ph/file/1530a82843034f1ede5d5.jpg'
}
]	

exports.quizanimais = [
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Porquinho da índia",
      original: "PORQUINHO DA ÍNDIA",
      foto: "https://telegra.ph/file/617e247a4fbb63d299198.jpg",
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Hamster",
      original: "HAMSTER",
      foto: "https://telegra.ph/file/a478979f342ac1746a645.jpg"
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Rottweiler",
      original: "ROTTWEILER",
      foto: "https://telegra.ph/file/a10ad7df6ab6a2312a1f9.jpg"
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Floppa",
      original: "FLOPPA",
      foto: "https://telegra.ph/file/7633abcd83b8a587f418d.jpg"
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Guaxinim",
      original: "GUAXINIM",
      foto: "https://telegra.ph/file/3800c7048d04a1c3dbc4e.jpg"
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Zebra",
      original: 'ZEBRA',
      foto: "https://telegra.ph/file/a08e224344e34aa916972.jpg"
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Carneiro",
      original: "CARNEIRO",
      foto: "https://telegra.ph/file/096342c8c7815ba9d83be.jpg"
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Bode",
      original: 'BODE',
      foto: 'https://telegra.ph/file/ff574a82178089f453444.jpg'
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Mamute",    
      original: "MAMUTE",
      foto: "https://telegra.ph/file/00e445dde6c036a0c0df5.jpg"
    },
    {
     question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
     resposta: "Alpaca",    
     original: "ALPACA",
     foto: "https://telegra.ph/file/a201b23b179392f1cdd7f.jpg"
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Porco Espinho",    
      original: 'PORCO ESPINHO',
      foto: 'https://telegra.ph/file/7b180efc77c8ab6e9a24a.jpg'
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Quokka",    
      original: 'QUOKKA',
      foto: 'https://telegra.ph/file/3042e66a22c6d0fb6e0cd.jpg'
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Panda Vermelho",    
      original: 'PANDA VERMELHO',
      foto: 'https://telegra.ph/file/a6517debde47b846073cc.jpg'
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Peixe Gota",
      original: "PEIXE GOTA",
      foto: "https://telegra.ph/file/e8892204b373c147bf489.jpg"
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Peixe Mandarim",
      original: "PEIXE MANDARIM",
      foto: "https://telegra.ph/file/e8892204b373c147bf489.jpg"
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Dragão de Komodo",
      original: "DRAGÃO DE KOMODO",
      foto: "https://telegra.ph/file/d4c36b449f4c781533f3c.jpg"
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Leopardo",
      original: "LEOPARDO",
      foto: "https://telegra.ph/file/0016017b9d28a3b6d027a.jpg"
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Furão",
      original: 'FURÃO',
      foto: 'https://telegra.ph/file/e352b4831db11c20a3c62.jpg'
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Lebre",
      original: 'LEBRE',
      foto: 'https://telegra.ph/file/89f9a46ce660261279477.jpg'
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Marreco",
      original: 'MARRECO',
      foto: 'https://telegra.ph/file/aa41bde6c4c350ec9d0d4.jpg'
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Ganso",
      original: 'GANSO',
      foto: 'https://telegra.ph/file/9ab69884414feefc9c109.jpg'
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Cavalo Marinho",
      original: 'CAVALO MARINHO',
      foto: 'https://telegra.ph/file/e4cee57d5b731dfffa5d8.jpg'
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Crocodilo",
      original: 'CROCODILO',
      foto: 'https://telegra.ph/file/b4483f9a7077fd29a137f.jpg'
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Ornitorrinco",
      original: 'ORNITORRINCO',
      foto: 'https://telegra.ph/file/8ffdd62da1834433112be.jpg'
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Husky Siberiano",
      original: 'HUSKY SIBERIANO',
      foto: 'https://telegra.ph/file/07b98023259637951ba8f.jpg'
    },
    {
      question: "Qual é o animal apresentado na imagem?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Capivara",
      original: 'CAPIVARA',
      foto: 'https://telegra.ph/file/54f20cbd80737fe45a284.jpg'
    },
    {
      question: "Aqui vai um enigma: “Eu sou o rei da selva, mas sou também um predador, tenho garras afiadas e dentes fortes. O que sou?”\n• Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Leão",
      original: "LEÃO",
      foto: "https://telegra.ph/file/84ae747d96d97c030d36d.jpg"
    },
    {
      question: "Que animal é o único que pode ver a cor ultravioleta?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Abelha, têm três olhos, sendo dois grandes na frente e um pequeno no topo da cabeça. O olho pequeno é chamado de ocelos e é sensível à luz ultravioleta.",
      original: "ABELHA",
      foto: "https://telegra.ph/file/84ae747d96d97c030d36d.jpg"
    },
    {
      question: "Que animal é o maior do mundo?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Baleia azul, ela pode atingir até 30 metros de comprimento e pesar até 200 toneladas.",
      original: "BALEIA AZUL",
      foto: "https://telegra.ph/file/84ae747d96d97c030d36d.jpg"
    },
    {
      question: "Que animal é o mais inteligente do mundo?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Gorila, eles são capazes de usar ferramentas, resolver problemas e até mesmo expressar emoções complexas.",
      original: "GORILA",
      foto: "https://telegra.ph/file/84ae747d96d97c030d36d.jpg"
    },
    {
      question: "Que animal é capaz de aprender mais de 100 palavras e frases?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Golfinho, eles são capazes de aprender e usar uma linguagem complexa, que inclui sons, gestos e até mesmo sinais.",
      original: "GOLFINHO",
      foto: "https://telegra.ph/file/84ae747d96d97c030d36d.jpg"
    },
    {
      question: "Que animal é capaz de criar ferramentas complexas, como lanças e redes?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Orangotango, são os primatas mais inteligentes do mundo. Eles são capazes de usar ferramentas de forma sofisticada, como para caçar, pescar e coletar alimentos.",
      original: "ORANGOTANGO",
      foto: "https://telegra.ph/file/84ae747d96d97c030d36d.jpg"
    },
    {
      question: "Que animal é capaz de aprender a linguagem de sinais e se comunicar com humanos?\n • Envie sua resposta abaixo, mencionando a mensagem.",
      resposta: "Chimpanzé, eles são os primatas mais próximos dos humanos. Eles são capazes de aprender a linguagem de sinais e se comunicar com humanos de forma complexa.",
      original: "CHIMPANZÉ",
      foto: "https://telegra.ph/file/84ae747d96d97c030d36d.jpg"
    },
]

exports.enigmaArchive = [
    {
        numero: "ENIGMA 1",
        respostaEne: "O FÓSFORO",
        charada: "Imagine que você está em uma sala escura ao lado de Sherlock. Nela há um fósforo, uma lâmpada de querosene, uma vela e uma lareira. O que você acenderia primeiro?"
    },
    {
        numero: "ENIGMA 2",
        respostaEne: "SEGREDO",
        charada: "O detetive Sherlock encontrou um bilhete que faz parte de uma pista de um mistério que precisa ser solucionado. “Se você me tem, quer me compartilhar; se você não me compartilha, você me manteve. O que eu sou?”"
    },
    {
        numero: "ENIGMA 3",
        respostaEne: "NENHUM",
        charada: "Watson e Sherlock adoram brincar com enigmas para treinar o método científico. Ajude-os a encontrar a resposta desse enigma: um macaco, um esquilo e um pássaro estão correndo para o topo de um coqueiro. Quem pegará a banana primeiro, o macaco, o esquilo ou o pássaro?"
    },
    {
        numero: "ENIGMA 4",
        respostaEne: "ECO",
        charada: "Eu falo, mas não tenho boca. Eu ouço, mas não tenho ouvidos. Não tenho corpo, mas vivo com o vento. Quem sou eu?"
    },
    {
        numero: "ENIGMA 5",
        respostaEne: "IDADE",
        charada: "Eu sou algo que as pessoas amam ou odeiam. Eu mudo tanto a aparência das pessoas quanto seus pensamentos. Se uma pessoa cuida de si mesma, eu subo ainda mais. Eu engano algumas pessoas. E para outras, sou um verdadeiro mistério. Algumas pessoas bem que tentam me esconder, mas uma hora, inevitavelmente, eu apareço. Não importa o que as pessoas tentem, eu jamais cairei. Quem sou eu?"
    },
    {
        numero: "ENIGMA 6",
        respostaEne: "SOMBRA",
        charada: "Tenho apenas uma cor, mas posso ter vários tamanhos. Estou presente quando faz sol. Na chuva, jamais! Passo todo o tempo no chão, mas nunca fico sujo. Não faço mal algum e não posso sentir dor. Quem sou eu?"
    },
    {
        numero: "ENIGMA 7",
        respostaEne: "12 ANOS",
        charada: "Perguntaram para Maria quantos anos ela tem. Maria respondeu que em dois anos terá o dobro da idade que ela tinha há cinco anos. Quantos anos Maria tem?"
    },
    {
        numero: "ENIGMA 8",
        respostaEne: "ESCURIDÃO",
        charada: "Quanto mais houver de mim, menos você verá. Quem sou eu?"
    },
    {
        numero: "ENIGMA 9",
        respostaEne: "ESPONJA",
        charada: "Sou cheio de buracos, mas ainda assim consigo reter muita água. Quem sou eu?"
    },
    {
        numero: "ENIGMA 9",
        respostaEne: "COTOVELO DIREITO",
        charada: "O que você pode segurar com a sua mão esquerda, mas jamais com a direita?"
    },
    {
        numero: "ENIGMA 10",
        respostaEne: "ÂNCORA",
        charada: "Quando precisa de mim, você me atira para longe, até um lugar onde ninguém pode me ver. Mas quando já não precisa mais, você me traz de volta. Quem sou eu?"
},
    {
       numero: "ENIGMA 11",
       respostaEne: "AS PALAVRAS",
       charada: "Nós podemos machucar sem fazer um único movimento. Podemos envenenar sem tocar. Carregamos a verdade e a mentira. E não devemos ser julgadas pelo nosso tamanho Quem somos nós?"
},
    {
        numero: "ENIGMA 12",
        respostaEne: "UMA TESOURA",
        charada: "Ponha os dedos nos meus olhos que eu abrirei as minhas potentes mandíbulas. E vou devorar tudo o que vier pela frente: roupas, penas, papéis. Quem sou eu?"
    },
    {
        numero: "ENIGMA 13",
        respostaEne: "ALFABETO",
        charada: "Eu posso guardar tudo dentro de mim. Tudo o que você pode imaginar: o vento, as florestas, o mundo, o universo e até Deus. Tudo o que vier à sua cabeça você pode encontrar dentro de mim. Quem sou eu?"
    },
    {
        numero: "ENIGMA 14",
        respostaEne: "DINHEIRO FALSO",
        charada: "Quem me faz não diz que faz. Quem me tem não sabe que tem. E quem sabe não me quer ter de jeito nenhum. Quem sou eu?"
    },
    {
        numero: "ENIGMA 15",
        respostaEne: "ESCURIDÃO",
        charada: "Quanto mais houver de mim, menos você verá. Quem sou eu?"
    },
    {
        numero: "ENIGMA 16",
        respostaEne: "A CONFIANÇA",
        charada: "O que pode ser quebrada, mas nunca segurada?"
    },
    {
        numero: "ENIGMA 17",
        respostaEne: "OPÇÃO",
        charada: "Se há três, você tem três. Se há duas, você tem duas. Mas se há uma, você não tem nenhuma. O que é?"
    },
    {
        numero: "ENIGMA 18",
        respostaEne: "O PADRE",
        charada: "Já casei muitas vezes, mas estou sempre solteiro. Quem sou eu?"
    },
    {
        numero: "ENIGMA 19",
        respostaEne: "JOÃO",
        charada: "A mãe do João teve cinco filhos. O primeiro se chamava Dadá, o segundo Dedé, o terceiro, Didi, e o quarto, Dodó. Como se chamava o quinto filho?"
    },
    {
        numero: "ENIGMA 20",
        respostaEne: "O CAIXÃO",
        charada: "O que é, o que é: quem faz não quer, quem compra não usa e quem usa não fica sabendo?"
    },
    {
        numero: "ENIGMA 21",
        respostaEne: "A COMIDA",
        charada: "Eu sou o que você come, Mas não o que você bebe. O que sou?"
    },    
    {
        numero: "ENIGMA 22",
        respostaEne: "UMA CANETA",
        charada: "Eu sou o que você usa para escrever, Mas não o que você usa para ler. O que sou?"
    },
    {
        numero: "ENIGMA 23",
        respostaEne: "LETRA O",
        charada: "Eu sou o começo de tudo, O fim de tudo, O que está no meio, E o que está em tudo. O que sou?"
    },
    {
        numero: "ENIGMA 24",
        respostaEne: "SER HUMANO",
        charada: "O que é que tem quatro pernas de manhã, duas pernas de tarde e três pernas de noite?"
    },    
    {
        numero: "ENIGMA 25",
        respostaEne: "O OVO",
        charada: "O que é que é redondo e branco, mas não é uma bola?"
    },    
    {
        numero: "ENIGMA 26",
        respostaEne: "A MAÇA",
        charada: "O que é que é verde por fora e vermelho por dentro?"
    },
    {
        numero: "ENIGMA 27",
        respostaEne: "O FUTURO",
        charada: "O que é que nunca está na frente, mas está sempre por trás?"
    },   
    {
        numero: "ENIGMA 28",
        respostaEne: "O VÁZIO",
        charada: "O que é que é maior do que o Universo, mas é mais leve do que uma pena?"
    },    
    {
        numero: "ENIGMA 28",
        respostaEne: "O VÁZIO",
        charada: "O que é que é maior do que o Universo, mas é mais leve do que uma pena?"
    },
    {
        numero: "ENIGMA 29",
        respostaEne: "UMA PROMESSA",
        charada: "O que é que se pode quebrar, mas nunca se pode consertar?"
    },    
    {
        numero: "ENIGMA 29",
        respostaEne: "O PRESENTE",
        charada: "O que é que é sempre jovem, mas nunca envelhece?"
    } 
]

exports.garticArchives = [
    {
      pergunta: 'Aplicativo',
      imagem: 'https://telegra.ph/file/dfa10e1cd64bfd575b26a.jpg',
      letra_inicial: 'N',
      contem_traços: '❌️️',
      resposta: 'NETFLIX'
    },
    {
      pergunta: 'Aplicativo',
      imagem: 'https://telegra.ph/file/070fbfa1cccd65681f3fa.jpg',
      letra_inicial: 'F',
      contem_traços: '❌️️',
      resposta: 'FACEBOOK'
      },
      {
      pergunta: 'Desenho',
      imagem: 'https://telegra.ph/file/1e344b9cde13d5a6c6095.jpg',
      letra_inicial: 'TO',
      contem_traços: '❌️️',
      resposta: 'TOM E JERRY'
    },
    {
      pergunta: 'Objeto',
      imagem: 'https://telegra.ph/file/af0e70ea5a92cbfc71f43.jpg',
      letra_inicial: 'GU',
      contem_traços: '✅️️️',
      resposta: 'GUARDA-CHUVA'
    },
    {
      pergunta: 'Profissão',
      imagem: 'https://telegra.ph/file/cbea80472e3d2624676a6.jpg',
      letra_inicial: 'J',
      contem_traços: '❌️️️️',
      resposta: 'JUIZ'
    },
    {
      pergunta: 'Aplicativo',
      imagem: 'https://telegra.ph/file/b5a9a0de5e222b5084a8a.jpg',
      letra_inicial: 'SN',
      contem_traços: '❌️️',
      resposta: 'SNAPCHAT'
    },
    {
      pergunta: 'Países',
      imagem: 'https://telegra.ph/file/5721a0cde0166bee675e5.jpg',
      letra_inicial: 'E',
      contem_traços: '❌️️',
      resposta: 'ESPANHA'
    },
    {
      pergunta: 'Objeto',
      imagem: 'https://telegra.ph/file/bdb05184d2d6f5a7d1ecf.jpg',
      letra_inicial: 'D',
      contem_traços: '❌️️',
      resposta: 'DARDOS'
    },
    {
      pergunta: 'Objeto',
      imagem: 'https://telegra.ph/file/317913121ec9ca6aae71b.jpg',
      letra_inicial: 'D',
      contem_traços: '❌️️',
      resposta: 'DOMINÓ'
    },
    {
      pergunta: 'Objeto',
      imagem: 'https://telegra.ph/file/63eca8c97ed165bfecfe5.jpg',
      letra_inicial: 'C',
      contem_traços: '❌️️',
      resposta: 'CANADÁ'
    },
    {
      pergunta: 'Jogos',
      imagem: 'https://telegra.ph/file/68ea5f4b182ae4c501a32.jpg',
      letra_inicial: 'X',
      contem_traços: '❌️️',
      resposta: 'XADREZ'
    },
    {
      pergunta: 'Filme',
      imagem: 'https://telegra.ph/file/a29ac8b0638d9e23bdab0.jpg',
      letra_inicial: 'A',
      contem_traços: '❌️️',
      resposta: 'A ORIGEM'
    },
    {
      pergunta: 'Filme',
      imagem: 'https://telegra.ph/file/b3e2aaca939ed0cdf7a73.jpg',
      letra_inicial: 'OS',
      contem_traços: '❌️️',
      resposta: 'OS SETE SAMURAIS'
    },
    {
      pergunta: 'Filme',
      imagem: 'https://telegra.ph/file/ab11fa68eda5abe19562b.jpg',
      letra_inicial: 'SE',
      contem_traços: '❌️️',
      resposta: 'SENHOR DOS ANÉIS'
    },
    {
      pergunta: 'Filme',
      imagem: 'https://telegra.ph/file/de030e592fecdc2cf0d20.jpg',
      letra_inicial: 'JU',
      contem_traços: '❌️️',
      resposta: 'JUMANJI'
    },
    {
      pergunta: 'Filme',
      imagem: 'https://telegra.ph/file/aafcb73c2dd10aef1bd47.jpg',
      letra_inicial: 'S',
      contem_traços: '❌️️',
      resposta: 'SONIC'
    },
    {
      pergunta: 'Série',
      imagem: 'https://telegra.ph/file/e0c905d9630bf9d36df77.jpg',
      letra_inicial: 'TH',
      contem_traços: '❌️️',
      resposta: 'THE WALKING DEAD'
    },
    {
      pergunta: 'Desenho',
      imagem: 'https://telegra.ph/file/d30cac0c8bb2159d38192.jpg',
      letra_inicial: 'SI',
      contem_traços: '❌️️',
      resposta: 'SIMPSONS'
    },
    {
      pergunta: 'Série',
      imagem: 'https://telegra.ph/file/c2a993a353fcca61242e4.jpg',
      letra_inicial: 'ST',
      contem_traços: '❌️️',
      resposta: 'STRANGER THINGS'
    },
    {
      pergunta: 'Série',
      imagem: 'https://telegra.ph/file/fac611a1d9e2c2fc14957.jpg',
      letra_inicial: 'PE',
      contem_traços: '❌️️',
      resposta: 'PEAKY BLINDERS'
    },
    {
      pergunta: 'Série - Documentário',
      imagem: 'https://telegra.ph/file/ecd17a4b75e4541bd20b8.jpg',
      letra_inicial: 'CH',
      contem_traços: '❌️️',
      resposta: 'CHERNOBYL'
    },
    {
      pergunta: 'Países',
      imagem: 'https://telegra.ph/file/05164ea8e02880f74010b.jpg',
      letra_inicial: 'C',
      contem_traços: '❌️️',
      resposta: 'CHINA'
    },
    {
      pergunta: 'Países',
      imagem: 'https://telegra.ph/file/24161e5698f3874c285eb.jpg',
      letra_inicial: 'S',
      contem_traços: '❌️️',
      resposta: 'SUÍÇA'
    },
    {
      pergunta: 'Países',
      imagem: 'https://telegra.ph/file/0207859d0fcb2c7624f1b.jpg',
      letra_inicial: 'S',
      contem_traços: '❌️️',
      resposta: 'COREIA DO SUL'
    },
    {
      pergunta: 'Países',
      imagem: 'https://telegra.ph/file/4890a8e71a7cc8d3862d0.jpg',
      letra_inicial: 'AR',
      contem_traços: '❌️️',
      resposta: 'ARGENTINA'
    },
    {
      pergunta: 'Países',
      imagem: 'https://telegra.ph/file/dfb6e013f52a018032625.jpg',
      letra_inicial: 'P',
      contem_traços: '❌️️',
      resposta: 'PORTUGAL'
    },
    {
      pergunta: 'Países',
      imagem: 'https://telegra.ph/file/8d238d4ffa865dd7009a7.jpg',
      letra_inicial: 'F',
      contem_traços: '❌️️',
      resposta: 'FRANÇA'
    }
]

exports.whatMusicAr = [
  {
    trechoMusic: "“Ela, ela tem piercing no seio\nDe onde 'cê veio? 'To interessado\n'Cê bebe, 'cê fuma, 'cê transa\nTudo isso sua amiga contou\nNão fumo, não bebo, só transo\nQuer desafiar, é só vir, amor”",
    resposta: "NOVIDADE NA ÁREA",
    artista: "MC Livinho",
    dica: "Alcança topo do Spotify com funk lento e dançante no mês de Julho."
  },
  {
    trechoMusic: "“Papai, solicito socorro, me instrua\nMe tire dessa rua escura\nFui dominado pela droga, desisti do ensino\nVeio o apocalipse sombrear o meu caminho”",
    resposta: "CRACOLÂNDIA",
    artista: "MC Ryan SP, MC Hariel, Alok, MC Davi, Salvador da Rima",
    dica: "Faz alusão à famosa rua do centro de São Paulo onde o comércio ilegal divide espaço com usuários de drogas."
  },
  {
    trechoMusic: "“Teto espelhado, cama redonda, faz o movimento\nQuarto gelado, fogo na bomba, fumaça no vento\nDe frente, de lado, por cima, por baixo, gemendo baixinho\nCom amor e com carinho”",
    resposta: "FAZ UM VUK VUK",
    artista: "Mc Kevin o Chris (part. DJ NK da Serra)",
    dica: "Música do TikTok"
  },
  {
    trechoMusic: "“Cross my heart, hope to die\nTo my lover, I'd never lie\nHe said, be true, I swear I'll try\nIn the end, it's him and I”",
    resposta: "HIM & I",
    artista: "G-Easy & Halsey",
    dica: "Canção sobre um amor perigoso, inspirada no casal Bonnie e Clyde."
  },
  {
    trechoMusic: "“You were the shadow to my light\nDid you feel us?\nAnother star, you fade away”",
    resposta: "FADED",
    artista: "Alan Walker",
    dica: "Sucesso internacional com vocais de Iselin Solheim, lançado em 2015."
  },
  {
    trechoMusic: "“You say you love me, but I don't care\nThat I broke my hand on the same wall\nThat you told me that he fucked you on”",
    resposta: "STAY",
    artista: "The Kid LAROI & Justin Bieber",
    dica: "Hit global que fala sobre arrependimento e a luta por um relacionamento."
  },
  {
    trechoMusic: "“I'm a sucker for you\nYou say the word and I'll go anywhere blindly”",
    resposta: "SUCKER",
    artista: "Jonas Brothers",
    dica: "Ser cativado pelo pop dos Jonas Brothers."
  },
  {
    trechoMusic: "“Agora eu era o herói\nE o meu cavalo só falava inglês\nA noiva do cowboy\nEra você além das outras três”",
    resposta: "O LEÃOZINHO",
    artista: "Caetano Veloso",
    dica: "Clássico da MPB sobre o amor e a juventude."
  },
  {
    trechoMusic: "“Quando a chuva passar, quando o tempo abrir\nAbra a janela e veja eu sou o sol”",
    resposta: "QUANDO A CHUVA PASSAR",
    artista: "Ivete Sangalo",
    dica: "Canção sobre esperança e novos começos."
  },
  {
    trechoMusic: "“Dona desses traiçoeiros\nSonhos sempre verdadeiros\nOh, dona desses animais”",
    resposta: "DONA",
    artista: "Roupa Nova",
    dica: "Canção romântica de uma das maiores bandas dos anos 80."
  },
  {
    trechoMusic: "“Tava sentada na calçada de bobeira\nOlhou pra mim e sorriu\nLogo percebi que me entendeu\nEu só queria saber qual é o seu nome”",
    resposta: "ME NAMORA",
    artista: "Natiruts",
    dica: "Sucesso do reggae nacional, um pedido de amor sincero."
  },
  {
    trechoMusic: "“Tem certas coisas que eu não sei dizer\nTalvez você não queira entender”",
    resposta: "CERTAS COISAS",
    artista: "Lulu Santos",
    dica: "Clássico que fala sobre os dilemas de um relacionamento."
  },
  {
    trechoMusic: "“Eu sou de ninguém, eu sou de todo mundo e todo mundo me quer bem”",
    resposta: "NÃO ME DEIXE SÓ",
    artista: "Pitty",
    dica: "Um hino de liberdade dos anos 2000."
  },
  {
    trechoMusic: "“Dancing in the dark, with you between my arms\nBarefoot on the grass, listening to our favorite song”",
    resposta: "PERFECT",
    artista: "Ed Sheeran",
    dica: "Uma das baladas mais românticas da década."
  },
  {
    trechoMusic: "“Now, the day bleeds into nightfall\nAnd you're not here to get me through it all”",
    resposta: "SOMEONE YOU LOVED",
    artista: "Lewis Capaldi",
    dica: "Canção sobre superação e solidão."
  },
  {
    trechoMusic: "“Cause I can't stop thinking 'bout you\nI can't stop thinking 'bout you\nI can't get high, I can't get by, I can't get through”",
    resposta: "I CAN'T STOP THINKING ABOUT YOU",
    artista: "Sting",
    dica: "Uma das músicas mais introspectivas do lendário vocalista do The Police."
  },
  {
    trechoMusic: "“In the shallow, shallow\nWe're far from the shallow now”",
    resposta: "SHALLOW",
    artista: "Lady Gaga, Bradley Cooper",
    dica: "Parte da trilha sonora de *Nasce Uma Estrela*, sucesso mundial."
  },
  {
    trechoMusic: "“Ela é amiga da minha mulher\nPois é, pois é\nMas vive dando em cima de mim”",
    resposta: "ELA É AMIGA DA MINHA MULHER",
    artista: "Seu Jorge",
    dica: "Com seu toque de samba e humor, essa música se destaca no repertório de Seu Jorge."
  },
  {
    trechoMusic: "“Tentei fugir do vício, mas caí nos braços dela\nEu não era mais um cara viciado, agora eu era um homem apaixonado”",
    resposta: "ME ADORA",
    artista: "Pitty",
    dica: "Uma declaração de amor repleta de dor e intensidade."
  },
  {
    trechoMusic: "“Vai lá, que eu também tô com saudade de você\nMas eu te avisei que ia enlouquecer\nVocê não me escuta, baby”",
    resposta: "PESCADOR DE ILUSÕES",
    artista: "O Rappa",
    dica: "Canção que fala sobre lutas e sonhos, em um cenário de dificuldades."
  },
  {
    trechoMusic: "“'Cause I'm slim shady, yes I'm the real shady\nAll you other slim shadys are just imitating”",
    resposta: "THE REAL SLIM SHADY",
    artista: "Eminem",
    dica: "Canção icônica que satiriza a fama e a cultura pop."
  },
  {
    trechoMusic: "“I'm sorry, Ms. Jackson, ooh\nI am for real”",
    resposta: "MS. JACKSON",
    artista: "Outkast",
    dica: "Canção sobre um pedido de desculpas à mãe de uma ex-namorada."
  },
  {
    trechoMusic: "“Você é tão linda, no baile eu te vi passar\nParando tudo com essa marra no olhar\nDiz que cansou dos playboy com marra de brabo\nSe eu te beijar, hoje eu dou dois tiro' pro alto”",
    resposta: "POESIA ACÚSTICA 13",
    artista: "MC Cabelinho, Luísa Sonza, Oruam, Tz da Coronel, Chefin, L7nnon, Xamã, Chris MC, …",
    dica: "Gravada a 1 ano atrás, a nova edição da série de rap acústico também conta com 13 artistas."
   },
   {
    trechoMusic: "“Diziam pra mim\nQue essa moda passou\nQue monogamia é papo de doido\nMas pra mim é uma honra\nSer uma cafona\nPra esse povo”",
    resposta: "CHICO",
    artista: "Luísa Sonza",
    dica: "Gravada a 1 ano atrás, a nova edição da série de rap acústico também conta com 13 artistas."
   },
   {
    trechoMusic: "“Você mente tão mal, finge tão mal\n'Tá na sua cara, você não me esqueceu\nMente tão mal, finge tão mal\n'Tá na (tua) sua cara, você não me esqueceu”",
    resposta: "HOTEL CARO",
    artista: "Baco Exu do Blues e Luísa Sonza",
    dica: "A canção fala sobre o fim de um relacionamento amoroso e os sentimentos que envolvem este momento."
   }  
];


exports.triviaGame = [
    {
      "tema": "Cultura Geral",
      "pergunta": "Qual é o país com o maior número de habitantes no mundo?",
      "resposta": "China",
      "resposta_original": "CHINA",
      "curiosidade": "A China tem mais de 1,4 bilhão de habitantes e implementou a política do filho único entre 1980 e 2015 para controlar o crescimento populacional."
    },
    {
      "tema": "Cultura Geral",
      "pergunta": "Qual é a capital do Canadá?",
      "resposta": "Ottawa",
      "resposta_original": "OTTAWA",
      "curiosidade": "Ottawa foi escolhida como capital por sua localização estratégica entre Toronto e Montreal, duas das maiores cidades do Canadá."
    },
    {
      "tema": "Cultura Geral",
      "pergunta": "Em que ano o homem pisou na Lua pela primeira vez?",
      "resposta": "1969",
      "resposta_original": "1969",
      "curiosidade": "A missão Apollo 11 foi transmitida para mais de 600 milhões de pessoas em todo o mundo."
    },
    {
      "tema": "Cinema",
      "pergunta": "Qual filme foi o primeiro a ganhar o Oscar de Melhor Filme?",
      "resposta": "Asas (Wings), de 1927",
      "resposta_original": "WINGS",
      "curiosidade": "Asas é o único filme mudo a ganhar o Oscar de Melhor Filme."
    },
    {
      "tema": "Cinema",
      "pergunta": "Quem interpreta o personagem Jack Sparrow em Piratas do Caribe?",
      "resposta": "Johnny Depp",
      "resposta_original": "JOHNNY DEPP",
      "curiosidade": "Depp se inspirou em Keith Richards, guitarrista dos Rolling Stones, para criar a personalidade do pirata Jack Sparrow."
    },
    {
      "tema": "Cinema",
      "pergunta": "Em qual cidade se passa a maior parte do filme O Poderoso Chefão?",
      "resposta": "Nova York",
      "resposta_original": "NOVA YORK",
      "curiosidade": "Apesar de a trama girar em torno da máfia italiana, o filme foi rodado principalmente em locações nos EUA, incluindo o Brooklyn e Manhattan."
    },
    {
      "tema": "História",
      "pergunta": "Quem foi o primeiro presidente dos Estados Unidos?",
      "resposta": "George Washington",
      "resposta_original": "GEORGE WASHINGTON",
      "curiosidade": "George Washington recusou um salário pelo cargo, mas acabou aceitando um pagamento de $25.000 por ano para não desvalorizar a posição."
    },
    {
      "tema": "História",
      "pergunta": "Em que ano foi assinada a Declaração de Independência dos Estados Unidos?",
      "resposta": "1776",
      "resposta_original": "1776",
      "curiosidade": "Dos 56 signatários da declaração, dois se tornariam presidentes: John Adams e Thomas Jefferson."
    },
    {
      "tema": "Ciência",
      "pergunta": "Quantos planetas existem no sistema solar? (por extenso)",
      "resposta": "Oito",
      "resposta_original": "OITO",
      "curiosidade": "Plutão foi reclassificado como 'planeta anão' em 2006 devido ao seu tamanho e órbita."
    },
    {
      "tema": "Ciência",
      "pergunta": "Qual elemento químico é simbolizado pela letra 'O'?",
      "resposta": "Oxigênio",
      "resposta_original": "OXIGÊNIO",
      "curiosidade": "O oxigênio compõe cerca de 21% da atmosfera terrestre, mas é essencial para quase toda a vida no planeta."
    },
    {
      "tema": "Ciência",
      "pergunta": "Quem desenvolveu a teoria da relatividade?",
      "resposta": "Albert Einstein",
      "resposta_original": "ALBERT EINSTEIN",
      "curiosidade": "Em 1921, Einstein ganhou o Prêmio Nobel de Física, mas não pela relatividade e sim pelo efeito fotoelétrico."
    },
    {
      "tema": "Esportes",
      "pergunta": "Em qual esporte é possível fazer um 'strike'?",
      "resposta": "Boliche",
      "resposta_original": "BOLICHE",
      "curiosidade": "Um jogador profissional pode girar a bola a uma velocidade de 25 km/h para obter um strike."
    },
    {
      "tema": "Esportes",
      "pergunta": "Qual país sediou a Copa do Mundo de 2014?",
      "resposta": "Brasil",
      "resposta_original": "BRASIL",
      "curiosidade": "Foi a segunda vez que o Brasil sediou a Copa. A primeira foi em 1950."
    },
    {
      "tema": "Esportes",
      "pergunta": "Quantos jogadores tem uma equipe de basquete em quadra?",
      "resposta": "Cinco",
      "resposta_original": "CINCO",
      "curiosidade": "As primeiras bolas de basquete eram feitas de couro costurado à mão e pareciam bolas de futebol."
    },
    {
      "tema": "Música",
      "pergunta": "Qual banda lançou a música Bohemian Rhapsody?",
      "resposta": "Queen",
      "resposta_original": "QUEEN",
      "curiosidade": "Bohemian Rhapsody levou cerca de três semanas para ser gravada devido à sua complexidade e é uma das músicas mais famosas do rock."
    },
    {
      "tema": "Música",
      "pergunta": "Quem é conhecido como o 'Rei do Pop'?",
      "resposta": "Michael Jackson",
      "resposta_original": "MICHAEL JACKSON",
      "curiosidade": "Michael Jackson foi o primeiro artista negro a ter um vídeo (Billie Jean) exibido na MTV, quebrando barreiras raciais."
    },
    {
      "tema": "Música",
      "pergunta": "Qual é o nome completo da cantora Beyoncé?",
      "resposta": "Beyoncé Giselle Knowles-Carter",
      "resposta_original": "BEYONCÉ GISELLE KNOWLES-CARTER",
      "curiosidade": "Beyoncé começou sua carreira aos 9 anos em um grupo chamado Girls Tyme, que mais tarde se tornou o Destiny's Child."
    },
    {
      "tema": "Cultura Geral",
      "pergunta": "Qual é a maior floresta tropical do mundo?",
      "resposta": "Amazônica",
      "resposta_original": "AMAZÔNICA",
      "curiosidade": "A Floresta Amazônica cobre cerca de 5,5 milhões de quilômetros quadrados e abriga cerca de 10% da biodiversidade do planeta."
    },
    {
      "tema": "Cultura Geral",
      "pergunta": "Qual é o idioma mais falado do mundo?",
      "resposta": "Mandarim",
      "resposta_original": "MANDARIM",
      "curiosidade": "Mais de um bilhão de pessoas falam Mandarim como língua nativa, especialmente na China."
    },
    {
      "tema": "Cultura Geral",
      "pergunta": "Qual é a moeda oficial do Japão?",
      "resposta": "Iene",
      "resposta_original": "IEN",
      "curiosidade": "O iene é o terceiro mais negociado no mercado de câmbio, depois do dólar americano e do euro."
    },
    {
      "tema": "Cinema",
      "pergunta": "Quem dirigiu o filme Titanic?",
      "resposta": "James Cameron",
      "resposta_original": "JAMES CAMERON",
      "curiosidade": "Titanic ganhou 11 Oscars, incluindo Melhor Filme e Melhor Diretor."
    },
    {
      "tema": "Cinema",
      "pergunta": "Qual filme da Disney é baseado em uma história da literatura clássica?",
      "resposta": "A Bela e a Fera",
      "resposta_original": "A BELA E A FERA",
      "curiosidade": "A Bela e a Fera foi a primeira animação a ser indicada ao Oscar de Melhor Filme."
    },
    {
      "tema": "Cinema",
      "pergunta": "Qual é o nome do hobbit que carrega o Anel em O Senhor dos Anéis?",
      "resposta": "Frodo Bolseiro",
      "resposta_original": "FRODO BOLSEIRO",
      "curiosidade": "O Senhor dos Anéis foi filmado na Nova Zelândia e é uma das trilogias mais aclamadas da história do cinema."
    },
    {
      "tema": "História",
      "pergunta": "Quem foi a primeira mulher a ganhar um Prêmio Nobel?",
      "resposta": "Marie Curie",
      "resposta_original": "MARIE CURIE",
      "curiosidade": "Marie Curie ganhou o Prêmio Nobel de Física em 1903 e o de Química em 1911, tornando-se a primeira pessoa a ganhar dois Nobel em áreas diferentes."
    },
    {
      "tema": "História",
      "pergunta": "Qual era o nome do famoso discurso de Martin Luther King Jr.?",
      "resposta": "I Have a Dream",
      "resposta_original": "I HAVE A DREAM",
      "curiosidade": "O discurso foi proferido em 1963 durante a Marcha sobre Washington e é um marco na luta pelos direitos civis nos Estados Unidos."
    },
    {
      "tema": "História",
      "pergunta": "Qual era o nome do navio que afundou em 1912 após colidir com um iceberg?",
      "resposta": "Titanic",
      "resposta_original": "TITANIC",
      "curiosidade": "Mais de 1.500 pessoas morreram no naufrágio do Titanic, um dos desastres marítimos mais conhecidos da história."
    },
    {
      "tema": "Ciência",
      "pergunta": "Qual é a fórmula química da água?",
      "resposta": "H2O",
      "resposta_original": "H2O",
      "curiosidade": "A água é essencial para todos os tipos de vida conhecida e cobre cerca de 71% da superfície da Terra."
    },
    {
      "tema": "Ciência",
      "pergunta": "Qual é o órgão responsável por bombear sangue no corpo humano?",
      "resposta": "Coração",
      "resposta_original": "CORAÇÃO",
      "curiosidade": "O coração humano pode bombear cerca de 5 litros de sangue por minuto em repouso."
    },
    {
      "tema": "Ciência",
      "pergunta": "Qual é o planeta mais próximo do sol?",
      "resposta": "Mercúrio",
      "resposta_original": "MERCÚRIO",
      "curiosidade": "Mercúrio é o menor planeta do sistema solar e não tem atmosfera significativa."
    },
    {
      "tema": "Esportes",
      "pergunta": "Qual país ganhou a Copa do Mundo de 2018?",
      "resposta": "França",
      "resposta_original": "FRANÇA",
      "curiosidade": "A França venceu a Copa do Mundo de 2018, realizada na Rússia, derrotando a Croácia na final."
    },
    {
      "tema": "Esportes",
      "pergunta": "Qual é o esporte mais praticado no mundo?",
      "resposta": "Futebol",
      "resposta_original": "FUTEBOL",
      "curiosidade": "O futebol é praticado em mais de 200 países e tem bilhões de fãs em todo o mundo."
    },
    {
      "tema": "Esportes",
      "pergunta": "Qual é o nome do famoso torneio de tênis realizado em Londres todo mês de julho?",
      "resposta": "Wimbledon",
      "resposta_original": "WIMBLEDON",
      "curiosidade": "Wimbledon é o mais antigo torneio de tênis do mundo, realizado desde 1877."
    },
    {
      "tema": "Música",
      "pergunta": "Qual foi o primeiro álbum de The Beatles?",
      "resposta": "Please Please Me",
      "resposta_original": "PLEASE PLEASE ME",
      "curiosidade": "Please Please Me foi lançado em 1963 e contém alguns dos primeiros sucessos da banda."
    },
    {
      "tema": "Música",
      "pergunta": "Qual artista é conhecido como 'Princesa do Pop'?",
      "resposta": "Britney Spears",
      "resposta_original": "BRITNEY SPEARS",
      "curiosidade": "Britney Spears estourou no final dos anos 90 e se tornou uma das artistas mais influentes de sua geração."
    },
    {
      "tema": "Música",
      "pergunta": "Qual é o nome do famoso festival de música realizado anualmente em Indio, Califórnia?",
      "resposta": "Coachella",
      "resposta_original": "COACHELLA",
      "curiosidade": "Coachella é um dos festivais de música mais populares do mundo, atraindo centenas de milhares de pessoas a cada ano."
    },
    {
      "tema": "Cultura Geral",
      "pergunta": "Qual é o continente mais extenso do mundo?",
      "resposta": "Ásia",
      "resposta_original": "ÁSIA",
      "curiosidade": "A Ásia abriga mais de 4,5 bilhões de pessoas, cerca de 60% da população mundial."
    },
    {
      "tema": "Cultura Geral",
      "pergunta": "Qual é o animal terrestre mais rápido?",
      "resposta": "Guepardo",
      "resposta_original": "GUEPARDO",
      "curiosidade": "O guepardo pode correr a velocidades de até 112 km/h em curtas distâncias."
    },
    {
      "tema": "Cultura Geral",
      "pergunta": "Qual é a capital da França?",
      "resposta": "Paris",
      "resposta_original": "PARIS",
      "curiosidade": "Paris é conhecida como a 'Cidade Luz' e é famosa por seus museus, como o Louvre."
    },
    {
      "tema": "Cinema",
      "pergunta": "Quem interpretou o personagem de Jack Dawson em Titanic?",
      "resposta": "Leonardo DiCaprio",
      "resposta_original": "LEONARDO DICAPRIO",
      "curiosidade": "DiCaprio foi indicado ao Oscar por seu papel em Titanic, que o catapultou para a fama internacional."
    },
    {
      "tema": "Cinema",
      "pergunta": "Qual é o nome do filme em que o personagem de Robin Williams diz: 'Carpe Diem'?",
      "resposta": "Sociedade dos Poetas Mortos",
      "resposta_original": "SOCIEDADE DOS POETAS MORTOS",
      "curiosidade": "O filme foi lançado em 1989 e se tornou um clássico cult sobre a busca da individualidade."
    },
    {
      "tema": "Cinema",
      "pergunta": "Qual filme de animação da Pixar é sobre um jovem que sonha em se tornar um músico?",
      "resposta": "Coco",
      "resposta_original": "COCO",
      "curiosidade": "Coco explora as tradições do Dia dos Mortos no México e ganhou dois Oscars em 2018."
    },
    {
      "tema": "História",
      "pergunta": "Quem foi o líder da União Soviética durante a Segunda Guerra Mundial?",
      "resposta": "Joseph Stalin",
      "resposta_original": "JOSEPH STALIN",
      "curiosidade": "Stalin liderou a União Soviética de 1924 até sua morte em 1953, sendo uma figura central na guerra."
    },
    {
      "tema": "História",
      "pergunta": "Qual foi a principal causa da Guerra Civil Americana?",
      "resposta": "A escravidão",
      "resposta_original": "A ESCRAVIDÃO",
      "curiosidade": "A guerra durou de 1861 a 1865 e resultou na abolição da escravidão nos Estados Unidos."
    },
    {
      "tema": "História",
      "pergunta": "Em que ano foi a queda do Muro de Berlim?",
      "resposta": "1989",
      "resposta_original": "1989",
      "curiosidade": "A queda do Muro de Berlim simbolizou o fim da Guerra Fria e a reunificação da Alemanha."
    },
    {
      "tema": "Ciência",
      "pergunta": "Qual é a partícula subatômica com carga negativa?",
      "resposta": "Elétron",
      "resposta_original": "ELÉTRON",
      "curiosidade": "Os elétrons orbitam o núcleo do átomo e são fundamentais para a condução de eletricidade."
    },
    {
      "tema": "Ciência",
      "pergunta": "Qual é o maior órgão do corpo humano?",
      "resposta": "Pele",
      "resposta_original": "PELE",
      "curiosidade": "A pele não é apenas um órgão protetor, mas também desempenha papéis vitais na regulação da temperatura e na sensação."
    },
    {
      "tema": "Ciência",
      "pergunta": "Processo pelo qual as plantas convertem luz solar em energia. É uma característica de qual fenômeno?",
      "resposta": "Fotossíntese",
      "resposta_original": "FOTOSSÍNTESE",
      "curiosidade": "Durante a fotossíntese, as plantas produzem oxigênio como subproduto, essencial para a respiração dos seres vivos."
    },
    {
      "tema": "Esportes",
      "pergunta": "Qual país ganhou a Copa do Mundo de Futebol de 2014?",
      "resposta": "Alemanha",
      "resposta_original": "ALEMANHA",
      "curiosidade": "A Alemanha venceu a Copa do Mundo de 2014 ao derrotar a Argentina na final, com um gol de Mario Götze na prorrogação."
    },
    {
      "tema": "Esportes",
      "pergunta": "Qual é o nome do torneio de tênis mais prestigiado realizado na grama?",
      "resposta": "Wimbledon",
      "resposta_original": "WIMBLEDON",
      "curiosidade": "Wimbledon é o torneio de tênis mais antigo do mundo, realizado desde 1877, e tem um código de vestimenta rigoroso para os jogadores."
    },
    {
      "tema": "Esportes",
      "pergunta": "Qual é o esporte nacional do Japão?",
      "resposta": "Sumô",
      "resposta_original": "SUMÔ",
      "curiosidade": "O sumô é uma forma de luta que remonta ao século VIII e é considerado um ritual e uma arte marcial."
    },
    {
      "tema": "Música",
      "pergunta": "Quem é o autor da música 'Imagine'?",
      "resposta": "John Lennon",
      "resposta_original": "JOHN LENNON",
      "curiosidade": "'Imagine' foi lançada em 1971 e se tornou um hino pela paz em todo o mundo."
    },
    {
      "tema": "Música",
      "pergunta": "Qual foi a primeira banda a se apresentar no famoso festival de Woodstock?",
      "resposta": "Richie Havens",
      "resposta_original": "RICHIE HAVENS",
      "curiosidade": "Richie Havens foi o primeiro artista a se apresentar em Woodstock, em 1969, e sua performance ficou famosa pela canção 'Freedom'."
    },
    {
      "tema": "Música",
      "pergunta": "Qual é o nome do álbum mais vendido de todos os tempos?",
      "resposta": "Thriller",
      "resposta_original": "THRILLER",
      "curiosidade": "Lançado por Michael Jackson em 1982, Thriller continua a ser o álbum mais vendido na história da música."
    }
]