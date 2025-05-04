export class StringPatterns {
    static MEETINGS_PATTERN = ["oi", "olá", "ola", "eae", "eai", "e ai", "e ae", "bom dia", "boa tarde", "boa noite", "salve"];
    static MEETINGS_RESPONSES = [
        `Salve, {name}! 🐆 A tropa da FURIA no CS2 tá on! Bora amassar? 🔥`,
        `E aí, {name}! Preparado pra descobrir a emoção do CS2 com a gente? 🚀`,
        `Fala, {name}! Aqui é FURIA, sempre na atividade! Qual a boa? 😎`
    ];

    static FURIA_PATTERN = ["furia", "e-sports", "cs2", "cs", "major"];
    static FURIA_RESPONSES = [
        "🚀 Fundada em 2017, a FURIA possui o time de Counter-Strike que melhor desempenha nas competições internacionais mais recentes, sempre a frente nas colocações entre equipes do país.",
        "🐆 A organização foi eleita por dois anos consecutivos, 2020 e 2021, como a melhor organização de esportes eletrônicos no Prêmio eSports Brasil.",
        "✌️ Em 2022, a Furia foi apontada como a quinta maior organização de esportes eletrônicos do mundo pelo portal norte-americano Nerd Street",
        "🏅 A FURIA foi campeã da ESL Pro League S12 NA, vice na ECS S7 Finals e alcançou o Top 4 em torneios como IEM Rio e ESL Pro League, somando mais de US$ 200 mil em premiações.",
    ];

    static PLAYERS_PATTERN = ["jogadores", "elenco", "time principal", "time" ,"roster", "equipe"];
    static PLAYERS_RESPONSES = [
        "🧑‍💻 O elenco atual de Counter-Strike 2 da FURIA <br> É composto pelos brasileiros 🇧🇷 nosso professor FalleN (IGL), KSCERATO (o clutch master) e yuurih como riflers, o cazaque 🇰🇿 molodoy como AWPer, o 🇱🇻 letão YEKINDAR (stand-in) como entry fragger. E, claro, os 🇧🇷 brasileiros no comando coach sidde e o manager guerri.",
    ]

    static SOCIAL_PATTERN = ["redes", "social", "instagram", "twitter", "twitch"];
    static SOCIAL_RESPONSES = [
        "Siga a FURIA nas redes sociais!<br>🐦 Twitter (X): @FURIA<br>📸 Instagram: @furiagg <br>📺 Twitch: Twitch.tv/FURIAtv",
    ];

    static GENERAL_MATCHES_PATTERN = ["jogos", "partidas", "calendário", "compromissos"];
    static GENERAL_MATCHES_RESPONSES = [
        "📅 A FURIA tem vários confrontos marcados! Quer saber o próximo? É contra The MongolZ em 10/05.",
        "🗓️ Quer saber dos jogos da FURIA? O próximo é dia 10 de maio, mas tem mais vindo por aí!",
        "👀 Fica de olho que a agenda da FURIA está cheia este mês!",
        "⚡ Tem partidas importantes vindo aí! A primeira é contra The MongolZ no dia 10.",
        "🎮 Acompanhe todos os jogos da FURIA aqui ou direto na Twitch Twitch.tv/FURIAtv!"
    ];

    static TOURNAMENTS_PATTERN = ["campeonatos", "torneios", "eventos futuros", "torneio"];
    static TOURNAMENTS_RESPONSES = [
        "📌 Próximo grande torneio: PGL Astana 2025. Vamos torcer juntos!",
        "🌍 Além da PGL Astana, a FURIA ainda joga a IEM Dallas e o mais aguardado: BLAST.tv Austin Major 2025 Stage 2"
    ];

    static NEXT_MATCH_PATTERN = ["próximo", "proximo", "quando é o jogo", "próxima partida", "calendário", "compromissos"];
    static NEXT_MATCH_RESPONSES = [
        "📅 A próxima partida da FURIA será contra The MongolZ no dia 10/05 às 05h00 (horário de Brasília).",
        "🎮 Próximo confronto marcado: FURIA vs The MongolZ – 10 de maio, 05h da manhã!",
        "🗓️ Agende aí! FURIA enfrenta The MongolZ no dia 10/05 às 05h00 AM.",
        "⚔️ Próxima batalha: FURIA vs The MongolZ, em 10/05 às 5h da manhã. Vai passar na Twitch!",
        "🚨 Fique ligado! FURIA volta aos servidores contra The MongolZ no dia 10/05 às 05h00 (BR)."
    ];

    static LIVE_STATUS_PATTERN = ["status do jogo", "como tá o jogo", "placar", "tempo real"];
    static LIVE_STATUS_RESPONSES = [
        "🎮 Ainda não temos um jogo ao vivo agora, mas fica ligado nas redes da FURIA para acompanhar tudo em tempo real!",
        "⏱️ Status: Aguardando início da próxima partida vs The MongolZ - 10/05 às 05h00.",
        "🚫 Nenhuma partida ao vivo no momento. Volte mais tarde ou acesse Twitch.tv/FURIAtv!"
    ];

    static CROWD_PATTERN = ["torcida", "gritos", "canta comigo", "bora furia"];
    static CROWD_RESPONSES = [
        "🎙️ *FURIA! FURIA! FURIA!* A tropa não para nunca! 🐆🔥",
        "🗣️ *É o Brasil na bala! Vai pra cima, FURIA!* 🇧🇷💥",
        "📣 *Treme tudo! Aqui é pressão total da torcida FURIOSA!* 🚀"
    ];

    static COMMANDS_PATTERN = ["comandos", "ajuda", "opções", "comando"];
    static COMMANDS_RESPONSES = [
            `🐆 <strong>COMANDOS DISPONÍVEIS</strong> 🐆<br>
                📣 <strong>Saudações</strong> → digite "oi", "eae", "bom dia", "olá", etc.<br>
                🎯 <strong>FURIA e CS2</strong> → digite "furia", "cs2", "e-sports", "major"<br>
                💻 <strong>Elenco da FURIA</strong> → digite "jogadores", "elenco", "roster", "time"<br>
                📅 <strong>Próxima Partida</strong> → digite "próxima partida", "quando é o jogo", "calendário"<br>
                🗓️ <strong>Jogos e Agenda</strong> → digite "jogos", "partidas", "compromissos"<br>
                🏆 <strong>Campeonatos</strong> → digite "campeonatos", "torneios", "eventos futuros"<br>
                📱 <strong>Redes Sociais</strong> → digite "instagram", "twitter", "twitch", "redes sociais"<br>
                📣 <strong>Torcida</strong> → digite "torcida", "canta comigo", "gritos", "bora furia"<br>
                🔥 <strong>Status ao Vivo</strong> → digite "status do jogo", "placar", "tempo real"<br>
                📞 <strong>Contato</strong> → digite "contato", "saber mais", "mais informações"<br>
                🤖 <strong>Sobre o Bot</strong> → digite "sobre", "quem é você", "chatbot"<br>
                👤 <strong>Seu Nome</strong> → digite <code>/name SeuNome</code> (para alterar seu nome no chat)<br>
                `
    ];


    static ABOUT_PATTERN = ["sobre", "quem é você", "chatbot"];
    static ABOUT_RESPONSES = [
        "<strong> 🐆 Chatbot FURIA - v1.0 </strong> <br>🚀 Desenvolvido para o processo seletivo<br>💻Tecnologias: HTML, CSS, JavaScript<br>✨By: Beatrys Buzzolo"
    ];

    static MORE_PATTERN = ["contato", "saber mais", "mais informações"];
    static MORE_RESPONSES = [
        `📞 Quer saber mais? Utilize o Contato Inteligente FURIA via WhatsApp (beta): <a href="https://wa.me/5511993404466" target="_blank">Clique aqui para abrir no WhatsApp</a>`,
    ];

    static DEFAULT_RESPONSES = [
        `Acho que você devia tentar algo diferente, {name}. Quer saber o que eu posso responder? digite "comandos".`,
        `Aposto que essa é uma ótima pergunta, {name}, mas ainda não consigo responder sobre isso. Digite "comandos" para descobrir o que posso responder.`,
        `Parece que você tentou algo diferente, {name}. 🤔 Que tal tentar um dos comandos disponíveis? Digite "comandos" para saber o que posso responder!`
    ];
}