export interface Story {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  category: 'creation' | 'heroes' | 'miracles' | 'teachings' | 'parables';
  ageGroup: '5-8' | '9-12' | 'all';
  readTime: number;
}

export const stories: Story[] = [
  {
    id: 'creation',
    title: 'A Criação do Mundo',
    summary: 'Descubra como Deus criou o céu, a terra e tudo que existe em 7 dias maravilhosos!',
    content: `No princípio, Deus criou o céu e a terra. A terra estava vazia e escura, mas o Espírito de Deus estava lá.

Então Deus disse: "Que haja luz!" E a luz apareceu! Deus viu que a luz era boa e a separou da escuridão. Ele chamou a luz de "dia" e a escuridão de "noite". Este foi o primeiro dia.

No segundo dia, Deus criou o céu. No terceiro dia, Ele juntou as águas e fez aparecer a terra seca. Deus a chamou de "terra" e as águas de "mares". Então, Ele fez crescer plantas, árvores e flores de todos os tipos!

No quarto dia, Deus criou o sol para brilhar durante o dia, a lua e as estrelas para brilhar à noite.

No quinto dia, Deus encheu os mares de peixes e o céu de pássaros. Havia tantas cores e formas diferentes!

No sexto dia, Deus criou todos os animais da terra. E por último, Ele criou o ser humano à Sua imagem. Deus os abençoou e disse: "Cuidem da terra e de todos os animais."

No sétimo dia, Deus descansou. Ele olhou para tudo que havia criado e viu que era muito bom!`,
    imageUrl: '/placeholder.svg',
    category: 'creation',
    ageGroup: 'all',
    readTime: 5
  },
  {
    id: 'noahs-ark',
    title: 'A Arca de Noé',
    summary: 'A história incrível de Noé, sua família e todos os animais salvos na grande arca!',
    content: `Há muito tempo, havia um homem bom chamado Noé. Ele amava a Deus e sempre fazia o que era certo.

Um dia, Deus disse a Noé: "Vou enviar uma grande chuva. Construa uma arca enorme de madeira para salvar sua família e os animais."

Noé obedeceu e começou a construir. A arca era tão grande que cabia sua família inteira e dois de cada tipo de animal!

Quando a arca ficou pronta, começou a chover. Choveu por 40 dias e 40 noites! A água cobriu toda a terra.

Mas Noé, sua família e todos os animais estavam seguros dentro da arca. Lá dentro havia elefantes, girafas, leões, passarinhos e muitos outros animais!

Depois que a chuva parou, a água começou a baixar. Finalmente, a arca parou em cima de uma montanha.

Noé soltou uma pomba para ver se já havia terra seca. Ela voltou com um ramo de oliveira no bico! Logo depois, todos puderam sair da arca.

Deus fez aparecer um lindo arco-íris no céu como promessa de que nunca mais iria cobrir toda a terra com água.`,
    imageUrl: '/placeholder.svg',
    category: 'heroes',
    ageGroup: 'all',
    readTime: 6
  },
  {
    id: 'david-goliath',
    title: 'Davi e Golias',
    summary: 'Como um jovem pastor corajoso venceu o gigante mais forte com a ajuda de Deus!',
    content: `Davi era um jovem pastor que cuidava das ovelhas de seu pai. Ele era pequeno, mas tinha um coração grande e corajoso!

Um dia, um gigante chamado Golias desafiou o exército de Israel. Golias era enorme - tinha quase 3 metros de altura! Todos tinham medo dele.

Mas Davi não teve medo. Ele disse: "Deus está comigo! Vou lutar contra esse gigante."

O rei Saul quis dar sua armadura para Davi, mas ela era grande demais. Davi disse: "Não preciso disso. Deus vai me proteger."

Davi foi até o rio e pegou 5 pedrinhas lisas. Ele colocou uma pedrinha em sua funda e caminhou até Golias.

O gigante riu de Davi: "Você é apenas um menino! Como pode lutar comigo?"

Davi respondeu: "Você vem com espada e lança, mas eu venho em nome de Deus!"

Então, Davi girou sua funda e lançou a pedrinha. Ela voou pelo ar e acertou bem na testa de Golias!

O gigante caiu no chão! Deus havia ajudado Davi a vencer. Todos comemoraram e viram que com Deus, tudo é possível!`,
    imageUrl: '/placeholder.svg',
    category: 'heroes',
    ageGroup: '5-8',
    readTime: 5
  },
  {
    id: 'jesus-feeds-5000',
    title: 'Jesus Alimenta 5000 Pessoas',
    summary: 'O milagre incrível de quando Jesus multiplicou 5 pães e 2 peixes!',
    content: `Um dia, muitas pessoas - mais de 5000! - estavam seguindo Jesus para ouvi-lo ensinar sobre o amor de Deus.

Ficou tarde e todos estavam com fome. Os discípulos de Jesus ficaram preocupados: "Como vamos alimentar tanta gente?"

Jesus perguntou: "O que temos para comer?" Um menino tinha 5 pães e 2 peixinhos. Ele ofereceu sua comida para ajudar.

Jesus pegou os pães e os peixes, agradeceu a Deus e começou a dividir. Algo maravilhoso aconteceu!

A comida não acabava! Jesus continuava dividindo e sempre tinha mais. Os discípulos distribuíram para todos.

Todas as 5000 pessoas comeram até ficarem satisfeitas! E ainda sobraram 12 cestos cheios de comida!

As pessoas ficaram maravilhadas. Elas viram que Jesus podia fazer milagres incríveis!

Este milagre nos ensina que quando compartilhamos o pouco que temos, Deus pode multiplicar e fazer coisas maravilhosas!`,
    imageUrl: '/placeholder.svg',
    category: 'miracles',
    ageGroup: 'all',
    readTime: 4
  },
  {
    id: 'good-samaritan',
    title: 'O Bom Samaritano',
    summary: 'A história que Jesus contou sobre ajudar quem precisa, mesmo sendo diferente de nós.',
    content: `Jesus gostava de ensinar usando histórias. Um dia, Ele contou esta parábola maravilhosa:

Um homem estava viajando quando bandidos o atacaram. Eles roubaram tudo dele e o machucaram muito, deixando-o caído na estrada.

Um sacerdote passou por ali. Ele viu o homem ferido, mas atravessou para o outro lado da estrada e continuou andando.

Depois, passou um levita (uma pessoa que trabalhava no templo). Ele também viu o homem, mas não parou para ajudar.

Finalmente, passou um samaritano. Os samaritanos e os judeus não eram amigos, mas quando ele viu o homem ferido, seu coração ficou cheio de compaixão.

O samaritano parou, limpou os ferimentos do homem e colocou bandagens. Depois, colocou o homem em seu próprio burro e o levou para uma hospedaria.

Ele cuidou do homem ferido a noite toda. No dia seguinte, deu dinheiro ao dono da hospedaria e disse: "Cuide dele. Se gastar mais, quando eu voltar, pagarei."

Jesus perguntou: "Quem foi o verdadeiro amigo?" A resposta era clara: aquele que mostrou amor e compaixão!

Esta história nos ensina que devemos ajudar todas as pessoas que precisam, não importa quem sejam.`,
    imageUrl: '/placeholder.svg',
    category: 'parables',
    ageGroup: '9-12',
    readTime: 5
  },
  {
    id: 'prodigal-son',
    title: 'O Filho Pródigo',
    summary: 'A emocionante história sobre o amor e perdão de um pai por seu filho.',
    content: `Jesus contou uma história sobre um pai que tinha dois filhos. O filho mais novo disse: "Pai, quero minha parte da herança agora."

O pai ficou triste, mas deu o dinheiro. O filho foi para bem longe e gastou tudo em festas e coisas que não precisava.

Logo, o dinheiro acabou. O filho ficou sem nada. Ele estava com tanta fome que até a comida dos porcos parecia boa!

O filho pensou: "Os empregados do meu pai têm comida de sobra! Vou voltar para casa e pedir para ser um empregado."

Enquanto o filho ainda estava longe, o pai o viu chegando. O coração do pai se encheu de amor! Ele correu, abraçou e beijou seu filho.

O filho disse: "Pai, não mereço mais ser seu filho." Mas o pai gritou: "Tragam as melhores roupas! Coloquem um anel nele! Vamos fazer uma grande festa!"

O filho mais velho ficou com ciúmes. Ele disse: "Eu sempre obedeci e nunca fez uma festa para mim!"

O pai respondeu: "Filho, você está sempre comigo e tudo que tenho é seu. Mas seu irmão estava perdido e foi encontrado! Por isso devemos comemorar!"

Esta história mostra como Deus nos ama e sempre está pronto para nos perdoar quando voltamos para Ele.`,
    imageUrl: '/placeholder.svg',
    category: 'parables',
    ageGroup: '9-12',
    readTime: 6
  }
];
