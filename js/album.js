"use strict";

/*
    Album detail data
    Open a page with: album.html?album=debut
*/

const albumOrder = [
    "debut", "fearless", "speak-now", "red", "1989", "reputation", "lover", "folklore",
    "evermore", "fearless-tv", "red-tv", "midnights", "speak-now-tv", "1989-tv", "ttpd", "showgirl"
];

const officialAlbumLinks = {
    "debut": "https://taylor.lnk.to/TaylorSwiftAlbum",
    "fearless": "https://taylor.lnk.to/FearlessPlatinumID",
    "speak-now": "https://taylor.lnk.to/SpeakNowDLX",
    "red": "https://taylor.lnk.to/Red",
    "1989": "https://taylor.lnk.to/1989dlx",
    "reputation": "https://taylor.lnk.to/reputation",
    "lover": "https://taylor.lnk.to/TSlover",
    "folklore": "https://taylor.lnk.to/folkloredlx",
    "evermore": "https://taylor.lnk.to/evermorealbum",
    "fearless-tv": "https://taylor.lnk.to/FearlessTaylorsVersion",
    "red-tv": "https://taylor.lnk.to/redtaylorsversion",
    "midnights": "https://taylor.lnk.to/taylorswiftmidnights",
    "speak-now-tv": "https://taylor.lnk.to/SpeakNowTaylorsVersion",
    "1989-tv": "https://taylor.lnk.to/1989taylorsversion",
    "ttpd": "https://taylor.lnk.to/TTPD-TheAnthology",
    "showgirl": "https://taylor.lnk.to/tsthelifeofashowgirl"
};

// Official Taylor Swift videos selected for each album era.
const albumVideos = {
    "debut": [
        { id: "xKCek6_dB0M", title: "Teardrops On My Guitar" },
        { id: "Jb2stN7kH28", title: "Our Song" }
    ],
    "fearless": [
        { id: "8xg3vE8Ie_E", title: "Love Story" },
        { id: "VuNIsY6JdUw", title: "You Belong With Me" },
        { id: "Pb-K2tXWK4w", title: "Fifteen" }
    ],
    "speak-now": [
        { id: "XPBwXKgDTdE", title: "Mine" },
        { id: "QUwxKWT6m7U", title: "Back To December" },
        { id: "jYa1eI1hpDE", title: "Mean" }
    ],
    "red": [
        { id: "WA4iX5D9Z64", title: "We Are Never Ever Getting Back Together" },
        { id: "vNoKguSdy4Y", title: "I Knew You Were Trouble" },
        { id: "AgFeZr5ptV8", title: "22" }
    ],
    "1989": [
        { id: "e-ORhEE9VVg", title: "Blank Space" },
        { id: "nfWlot6h_JM", title: "Shake It Off" },
        { id: "-CmadmM5cOk", title: "Style" }
    ],
    "reputation": [
        { id: "3tmd-ClpJxA", title: "Look What You Made Me Do" },
        { id: "wIft-t-MQuE", title: "...Ready For It?" },
        { id: "tCXGJQYZ9JA", title: "Delicate" }
    ],
    "lover": [
        { id: "-BjZmE2gtdo", title: "Lover" },
        { id: "FuXNumBwDOM", title: "ME!" },
        { id: "Dkk9gvTmCXY", title: "You Need To Calm Down" }
    ],
    "folklore": [
        { id: "K-a8s8OLBSE", title: "cardigan" },
        { id: "osdoLjUNFnA", title: "exile (Official Lyric Video)" },
        { id: "KsZ6tROaVOQ", title: "the 1 (Official Lyric Video)" }
    ],
    "evermore": [
        { id: "RsEZmictANA", title: "willow" },
        { id: "wMpqCRF7TKg", title: "champagne problems (Official Lyric Video)" },
        { id: "IEPomqor2A8", title: "no body, no crime (Official Lyric Video)" }
    ],
    "fearless-tv": [
        { id: "8xg3vE8Ie_E", title: "Love Story" },
        { id: "VuNIsY6JdUw", title: "You Belong With Me" },
        { id: "Pb-K2tXWK4w", title: "Fifteen" }
    ],
    "red-tv": [
        { id: "tollGa3S0o8", title: "All Too Well: The Short Film" },
        { id: "5UMCrq-bBCg", title: "I Bet You Think About Me" },
        { id: "WA4iX5D9Z64", title: "We Are Never Ever Getting Back Together" }
    ],
    "midnights": [
        { id: "b1kbLwvqugk", title: "Anti-Hero" },
        { id: "b7QlX3yR2xs", title: "Bejeweled" },
        { id: "h8DLofLM7No", title: "Lavender Haze" }
    ],
    "speak-now-tv": [
        { id: "lVkKLf4DCn8", title: "I Can See You" },
        { id: "XPBwXKgDTdE", title: "Mine" },
        { id: "jYa1eI1hpDE", title: "Mean" }
    ],
    "1989-tv": [
        { id: "e-ORhEE9VVg", title: "Blank Space" },
        { id: "-CmadmM5cOk", title: "Style" },
        { id: "nfWlot6h_JM", title: "Shake It Off" }
    ],
    "ttpd": [
        { id: "q3zqJs7JUCQ", title: "Fortnight" },
        { id: "Sl6en1NPTYM", title: "I Can Do It With A Broken Heart" }
    ],
    "showgirl": [
        { id: "1FVF-9KQiPo", title: "Opalite" },
        { id: "ko70cExuzZM", title: "The Fate of Ophelia" },
        { id: "OU6362Nggg0", title: "The Life of a Showgirl (Lyric Video)" }
    ]
};

// Reuse the compact era logos already used by the Tour navbar.
const albumNavLogos = {
    "debut": "images/tour/logo-debut.png",
    "fearless": "images/tour/logo-fearless.png",
    "speak-now": "images/tour/logo-speak-now.png",
    "red": "images/tour/logo-red.png",
    "1989": "images/tour/logo-1989.png",
    "reputation": "images/tour/logo-reputation.png",
    "lover": "images/tour/logo-lover.png",
    "folklore": "images/tour/logo-folklore.png",
    "evermore": "images/tour/logo-evermore.png",
    "fearless-tv": "images/tour/logo-fearless.png",
    "red-tv": "images/tour/logo-red.png",
    "midnights": "images/tour/logo-midnights.png",
    "speak-now-tv": "images/tour/logo-speak-now.png",
    "1989-tv": "images/tour/logo-1989.png",
    "ttpd": "images/tour/logo-ttpd.png",
    "showgirl": "images/album/showgirl-logo.png"
};

const albums = {
    "debut": {
        title: "Taylor Swift", label: "TAYLOR SWIFT", year: "2006", genre: "COUNTRY POP", edition: "DELUXE", tracks: "15",
        logo: "images/album/debut-logo.png", cover: "images/album/debut-cover.jpg", image: "images/album/era-debut.jpg",
        colors: ["#c9ead7", "#f0f4e7", "#173b32", "#7ba38c", "#0d2d28"],
        description: "率直な言葉とカントリーギターが響く、すべての物語の始まり。日々の記憶を歌に変えていく、若きソングライターの第一章。",
        storyTitle: "WHERE THE STORY BEGAN",
        story: "Released in 2006, Taylor Swift introduced a young songwriter whose sharp observations could turn everyday memories into vivid country-pop songs.",
        spotify: "5eyZZoQEFQWRHkV2xgAeBw"
    },
    "fearless": {
        title: "Fearless", label: "FEARLESS", year: "2008", genre: "COUNTRY POP", edition: "PLATINUM", tracks: "19",
        logo: "images/album/fearless-logo.png", cover: "images/album/fearless-cover.png", image: "images/album/era-fearless.jpg",
        colors: ["#e4c76f", "#f7edd1", "#4c3517", "#bc8e3d", "#2f210d"],
        description: "おとぎ話のような恋と、恐れずに本音を語る強さ。日記の一ページから生まれた物語が、大きなステージへ羽ばたいた時代。",
        storyTitle: "HEAD FIRST, FEARLESS",
        story: "Fearless expands bright country-pop storytelling into a world of first love, doubt, courage, and cinematic choruses.",
        spotify: "2gP2LMVcIFgVczSJqn340t"
    },
    "speak-now": {
        title: "Speak Now", label: "SPEAK NOW", year: "2010", genre: "COUNTRY ROCK", edition: "DELUXE", tracks: "20",
        logo: "images/album/speak-now-logo.png", cover: "images/album/speak-now-cover.png", image: "images/album/era-speak-now.jpg",
        colors: ["#c8a9d7", "#eee1f1", "#442554", "#8b64a0", "#2c1735"],
        description: "すべての曲を自ら書き上げ、胸の内に秘めた言葉を解き放った作品。きらめくギターとドラマチックな物語が重なり合う。",
        storyTitle: "SAY WHAT YOU MEAN",
        story: "Written entirely by Taylor Swift, Speak Now turns private moments into vivid scenes—romantic, theatrical, sharp, and unapologetically direct.",
        spotify: "5MfAxS5zz8MlfROjGQVXhy"
    },
    "red": {
        title: "Red", label: "RED", year: "2012", genre: "POP · COUNTRY", edition: "DELUXE", tracks: "22",
        logo: "images/album/red-logo.png", cover: "images/album/red-cover.png", image: "images/album/era-red.jpg",
        colors: ["#d76a62", "#f2d1c9", "#52201f", "#ad403d", "#2b1011"],
        description: "失恋の痛み、鮮やかな記憶、カントリーの原点、そして大胆なポップへの衝動。そのすべてを忘れられない赤で描いたアルバム。",
        storyTitle: "LOVING HIM WAS RED",
        story: "Red follows emotion at full volume, moving between quiet acoustic detail and stadium-sized pop without smoothing out the contradictions.",
        spotify: "1EoDsNmgTLtmwe1BDAVxV5"
    },
    "1989": {
        title: "1989", label: "1989", year: "2014", genre: "SYNTH POP", edition: "DELUXE", tracks: "16",
        logo: "images/album/1989-logo.png", cover: "images/album/1989-cover.png", image: "images/album/era-1989.jpg",
        colors: ["#9ed8e6", "#e1f2f2", "#214b5c", "#61a9bd", "#132f3b"],
        description: "ポラロイドの空、都会の光、心に残るメロディ。新しい可能性へ踏み出し、鮮やかなポップサウンドへ生まれ変わった時代。",
        storyTitle: "WELCOME TO NEW YORK",
        story: "1989 embraces sleek synth-pop while keeping the close-up storytelling intact, marking a bold new chapter with confidence and precision.",
        spotify: "2QJmrSgbdM35R67eoGQo4j"
    },
    "reputation": {
        title: "reputation", label: "REPUTATION", year: "2017", genre: "ELECTRO POP", edition: "STANDARD", tracks: "15",
        logo: "images/album/reputation-logo.png", cover: "images/album/reputation-cover.png", image: "images/album/era-reputation.jpg",
        colors: ["#b9b7b1", "#e8e6df", "#242424", "#67645e", "#121212"],
        description: "鋭く大胆なサウンドの奥で描かれる、静かで親密なラブストーリー。強さと繊細さのコントラストが際立つ作品。",
        storyTitle: "NO EXPLANATION",
        story: "reputation turns public noise into dramatic pop architecture while its center stays intimate: trust, vulnerability, and choosing what matters.",
        spotify: "6DEjYFkNZh67HP7R9PSZvv"
    },
    "lover": {
        title: "Lover", label: "LOVER", year: "2019", genre: "POP", edition: "STANDARD", tracks: "18",
        logo: "images/album/lover-logo.png", cover: "images/album/lover-cover.png", image: "images/album/era-lover.jpg",
        colors: ["#efa9c8", "#f6e1eb", "#633750", "#8db9d0", "#3b2434"],
        description: "パステルカラーに包まれた、愛と自立の祝福。恋する喜びだけでなく、複雑に揺れる心の色まで鮮やかに描いている。",
        storyTitle: "STEP INTO THE DAYLIGHT",
        story: "Lover opens the curtains on a colorful pop world where romance sits beside self-definition, anxiety, and social conviction.",
        spotify: "1NAmidJlEaVgA3MpcPFYGq"
    },
    "folklore": {
        title: "folklore", label: "FOLKLORE", year: "2020", genre: "INDIE FOLK", edition: "DELUXE", tracks: "17",
        logo: "images/album/folklore-logo.png", cover: "images/album/folklore-cover.png", image: "images/album/era-folklore.jpg",
        colors: ["#bdbcb7", "#e8e7e2", "#373835", "#858680", "#20211f"],
        description: "静かな部屋から広がる、誰かの人生と交差する時間。淡いグレーの景色の中で、想像と記憶が物語へと姿を変えていく。",
        storyTitle: "A WORLD WITHIN THE WOODS",
        story: "folklore steps away from autobiography alone and into intertwined characters, hushed textures, and cinematic detail.",
        spotify: "2fenSS68JI1h4Fo296JfGr"
    },
    "evermore": {
        title: "evermore", label: "EVERMORE", year: "2020", genre: "ALTERNATIVE", edition: "DELUXE", tracks: "17",
        logo: "images/album/evermore-logo.png", cover: "images/album/evermore-cover.png", image: "images/album/era-evermore.jpg",
        colors: ["#bb916a", "#ead8c3", "#4a3124", "#8b6848", "#291a13"],
        description: "冬の町を舞台にした物語と、大人になった心が選ぶさまざまな結末。最後のページを閉じても、旋律は静かに残り続ける。",
        storyTitle: "INTO THE DEEPER WOODS",
        story: "evermore continues the narrative experiment with warmer earth tones, stranger turns, and stories that resist simple endings.",
        spotify: "2Xoteh7uEpea4TohMxjtaq"
    },
    "fearless-tv": {
        title: "Fearless (Taylor's Version)", label: "FEARLESS TV", year: "2021", genre: "COUNTRY POP", edition: "TAYLOR'S VERSION", tracks: "26",
        logo: "images/album/fearless-tv-logo.png", cover: "images/album/fearless-tv-cover.jpg", image: "images/album/era-fearless.jpg",
        colors: ["#d8bd7e", "#f5ead0", "#4e3d25", "#aa874b", "#302313"],
        description: "かつての物語を自らの手で取り戻し、より豊かな歌声と新たな細部で描き直した作品。眠っていた楽曲も光の中へ戻ってきた。",
        storyTitle: "THE FIRST RECLAIMED CHAPTER",
        story: "Fearless (Taylor's Version) revisits a defining era with mature vocals, expanded context, and previously unheard songs from the vault.",
        spotify: "4hDok0OAJd57SGIT8xuWJH"
    },
    "red-tv": {
        title: "Red (Taylor's Version)", label: "RED TV", year: "2021", genre: "POP · COUNTRY", edition: "TAYLOR'S VERSION", tracks: "30",
        logo: "images/album/red-tv-logo.png", cover: "images/album/red-tv-cover.png", image: "images/album/era-red.jpg",
        colors: ["#963b36", "#dfb9ae", "#3e1b1a", "#ad5b50", "#24100f"],
        description: "愛された秋の記憶が、より深い色と長い物語をまとって帰ってきた。失われかけた一章を完全な形で取り戻した作品。",
        storyTitle: "THE WHOLE STORY",
        story: "Red (Taylor's Version) widens the original emotional spectrum with vault songs and a complete ten-minute telling of its most enduring memory.",
        spotify: "6kZ42qRrzov54LcAk4onW9"
    },
    "midnights": {
        title: "Midnights", label: "MIDNIGHTS", year: "2022", genre: "SYNTH POP", edition: "3AM", tracks: "20",
        logo: "images/album/midnights-logo.png", cover: "images/album/midnights-cover.png", image: "images/album/era-midnights.jpg",
        colors: ["#486283", "#c3d0de", "#1c2a40", "#846e89", "#101827"],
        description: "眠れない夜に浮かぶ後悔、復讐、愛、そして自分自身への問い。真夜中の思考をきらめくポップサウンドに閉じ込めた作品。",
        storyTitle: "MEET ME AT MIDNIGHT",
        story: "Midnights gathers thoughts that arrive after dark and sets them against intimate synth-pop, hazy rhythm, and precise confession.",
        spotify: "151w1FgRZfnKZA9FEcg9Z3"
    },
    "speak-now-tv": {
        title: "Speak Now (Taylor's Version)", label: "SPEAK NOW TV", year: "2023", genre: "COUNTRY ROCK", edition: "TAYLOR'S VERSION", tracks: "22",
        logo: "images/album/speak-now-tv-logo.png", cover: "images/album/speak-now-tv-cover.png", image: "images/album/era-speak-now.jpg",
        colors: ["#956cad", "#e3d0ea", "#3d2148", "#a77fba", "#25142c"],
        description: "自ら綴ったすべての言葉が、より力強い歌声と豊かな音でよみがえる。隠されていた六つの物語も、ついに光の中へ。",
        storyTitle: "SPEAKING AGAIN",
        story: "Speak Now (Taylor's Version) protects a fully self-written landmark and adds vault songs that deepen its dramatic, guitar-driven world.",
        spotify: "5AEDGbliTTfjOB8TSm1sxt"
    },
    "1989-tv": {
        title: "1989 (Taylor's Version)", label: "1989 TV", year: "2023", genre: "SYNTH POP", edition: "TAYLOR'S VERSION", tracks: "21",
        logo: "images/album/1989-tv-logo.png", cover: "images/album/1989-tv-cover.png", image: "images/album/era-1989.jpg",
        colors: ["#78bfd7", "#dbf0f6", "#234c60", "#d7bf8e", "#142f3d"],
        description: "青空のように爽やかなポップの名作が、透明感のある音とともに帰ってきた。海辺の光をまとった新たな物語も加わる。",
        storyTitle: "WELCOME BACK",
        story: "1989 (Taylor's Version) reclaims a defining pop transformation while the vault reveals more of the story behind its clean lines.",
        spotify: "64LU4c1nfjz1t4VnGhagcg"
    },
    "ttpd": {
        title: "The Tortured Poets Department", label: "TTPD", year: "2024", genre: "SYNTH POP · FOLK", edition: "THE ANTHOLOGY", tracks: "31",
        logo: "images/album/ttpd-logo.png", cover: "images/album/ttpd-cover.png", image: "images/album/era-ttpd.jpg",
        colors: ["#bcb5ab", "#e8e4de", "#38332f", "#887f74", "#1e1b19"],
        description: "熱を帯びた記憶、文学的な言葉、傷ついた心に残るユーモア。妥協のない告白を重ねた、広大で濃密なアンソロジー。",
        storyTitle: "ENTER THE DEPARTMENT",
        story: "The Tortured Poets Department presents a densely written collection that moves between sleek electronics and stark acoustic rooms.",
        spotify: "1Mo4aZ8pdj6L1jx8zSwJnt"
    },
    "showgirl": {
        title: "The Life of a Showgirl", label: "SHOWGIRL", year: "2025", genre: "POP", edition: "STANDARD", tracks: "12",
        logo: "images/album/showgirl-logo.png", cover: "images/album/showgirl-cover.jpg", image: "images/album/showgirl-cover.jpg",
        colors: ["#dc784b", "#f3cfac", "#4b281c", "#2d9b87", "#29150f"],
        description: "スポットライトと華やかな舞台、その裏側にある素顔。ひとりの人間とパフォーマーの間に生まれる緊張と輝きを描く。",
        storyTitle: "BEHIND THE CURTAIN",
        story: "The showgirl chapter closes this archive with theatrical color, performance energy, and a look at life under the brightest lights.",
        spotify: "4a6NzYL1YHRUgx9e3YZI6I"
    }
};

// Curated era photography. The composition is built with CSS; no gallery controls are required.
const albumPhotos = {
    "debut": [1, 2, 3, 4, 5].map((number) => `images/album/gallery/selftitled-${number}.jpg`),
    "fearless": [1, 2, 3, 4, 5].map((number) => `images/album/gallery/fearless-${number}.jpg`),
    "speak-now": [1, 2, 3, 4, 5].map((number) => `images/album/gallery/speaknow-${number}.jpg`),
    "red": [3, 1, 4, 2, 5].map((number) => `images/album/gallery/red-${number}.jpg`),
    "1989": [1, 2, 3, 4].map((number) => `images/album/gallery/1989-${number}.jpg`).concat("images/album/era-1989.jpg"),
    "reputation": [3, 1, 2, 4, 5].map((number) => `images/album/gallery/reputation-${number}.jpg`),
    "lover": [1, 2, 3].map((number) => `images/album/gallery/lover-${number}.jpg`).concat("images/album/era-lover.jpg", "images/album/lover-cover.png"),
    "folklore": [1, 2, 3].map((number) => `images/album/gallery/folklore-${number}.jpg`).concat("images/album/era-folklore.jpg", "images/album/folklore-cover.png"),
    "evermore": ["images/album/gallery/evermore-2.jpg", "images/album/gallery/evermore-1.webp", "images/album/gallery/evermore-3.jpg", "images/album/era-evermore.jpg", "images/album/evermore-cover.png"],
    "fearless-tv": [1, 2, 3, 4, 5].map((number) => `images/album/gallery/fearless-${number}.jpg`),
    "red-tv": [3, 1, 4, 2, 5].map((number) => `images/album/gallery/red-${number}.jpg`),
    "midnights": ["images/album/era-midnights.jpg", "images/album/gallery/midnights-1.jpg", "images/album/gallery/midnights-2.jpg", "images/album/gallery/midnights-3.jpg", "images/album/midnights-cover.png"],
    "speak-now-tv": [1, 2, 3, 4, 5].map((number) => `images/album/gallery/speaknow-${number}.jpg`),
    "1989-tv": [1, 2, 3, 4].map((number) => `images/album/gallery/1989-${number}.jpg`).concat("images/album/1989-tv-cover.png"),
    "ttpd": ["images/album/era-ttpd.jpg", "images/album/gallery/ttpd-1.jpg", "images/album/gallery/ttpd-2.jpg", "images/album/gallery/ttpd-3.jpg", "images/album/ttpd-cover.png"],
    "showgirl": ["images/album/gallery/showgirl-3.jpg", "images/album/gallery/showgirl-1.webp", "images/album/gallery/showgirl-2.jpeg", "images/album/gallery/showgirl-4.jpeg", "images/album/showgirl-cover.jpg"]
};

const $ = (selector) => document.querySelector(selector);
const setText = (selector, text) => {
    const element = $(selector);
    if (element) element.textContent = text;
};

const setImage = (selector, source, alt) => {
    const image = $(selector);
    if (!image) return;
    image.src = source;
    image.alt = alt;
};

const requestedKey = new URLSearchParams(window.location.search).get("album") || "debut";
const albumKey = Object.hasOwn(albums, requestedKey) ? requestedKey : "debut";
const album = albums[albumKey];
const albumIndex = albumOrder.indexOf(albumKey);
const previousKey = albumOrder[(albumIndex - 1 + albumOrder.length) % albumOrder.length];
const nextKey = albumOrder[(albumIndex + 1) % albumOrder.length];
const previousAlbum = albums[previousKey];
const nextAlbum = albums[nextKey];

const [background, soft, ink, accent, dark] = album.colors;
const root = document.documentElement;
root.style.setProperty("--era-bg", background);
root.style.setProperty("--era-soft", soft);
root.style.setProperty("--era-ink", ink);
root.style.setProperty("--era-accent", accent);
root.style.setProperty("--era-dark", dark);

document.body.dataset.album = albumKey;
document.title = `${album.title.toUpperCase()} | TAYLOR SWIFT`;

setText("#album-title", album.title);
setText("[data-era-number]", String(albumIndex + 1).padStart(2, "0"));
setText("[data-year]", album.year);
setText("[data-genre]", album.genre);
setText("[data-description]", album.description);
setText("[data-photos-era]", album.label);
setText("[data-previous-title]", previousAlbum.label);
setText("[data-next-title]", nextAlbum.label);

setImage("[data-era-image]", album.image, `${album.title} era`);
setImage("[data-cover]", album.cover, `${album.title} album cover`);
setImage("[data-logo]", album.logo, album.title);
setImage("[data-nav-era-logo]", albumNavLogos[albumKey], `${album.title} era logo`);
setImage("[data-previous-cover]", previousAlbum.cover, `${previousAlbum.title} album cover`);
setImage("[data-next-cover]", nextAlbum.cover, `${nextAlbum.title} album cover`);

const searchTerm = encodeURIComponent(`Taylor Swift ${album.title}`);
const spotifyArtist = "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02";
const spotifyUrl = album.spotify ? `https://open.spotify.com/album/${album.spotify}` : spotifyArtist;
const spotifyEmbed = $("[data-spotify-embed]");

$("[data-spotify-link]").href = spotifyUrl;
$("[data-apple-link]").href = `https://music.apple.com/us/search?term=${searchTerm}`;
$("[data-amazon-link]").href = `https://music.amazon.com/search/${searchTerm}`;
$("[data-more-link]").href = officialAlbumLinks[albumKey];
$("[data-previous-link]").href = `album.html?album=${previousKey}`;
$("[data-next-link]").href = `album.html?album=${nextKey}`;

if (album.spotify) {
    spotifyEmbed.src = `https://open.spotify.com/embed/album/${album.spotify}?utm_source=generator&theme=0`;
    spotifyEmbed.title = `${album.title} on Spotify`;
} else {
    spotifyEmbed.src = "https://open.spotify.com/embed/artist/06HL4z0CvFAxyc27GXpf02?utm_source=generator&theme=0";
    spotifyEmbed.title = "Taylor Swift on Spotify";
}

// Render only available media so the page never shows empty placeholders.
const videoSection = $(".video-section");
const videoGrid = $("[data-video-grid]");
const videos = albumVideos[albumKey] || [];

if (videos.length) {
    videoGrid.dataset.count = String(videos.length);
    videos.forEach((video) => {
        const card = document.createElement("article");
        card.className = "video-card";
        card.innerHTML = `<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${video.id}?rel=0" title="${video.title} — Taylor Swift" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><h3>${video.title}</h3>`;
        videoGrid.append(card);
    });
} else {
    videoSection.hidden = true;
}

const photoGrid = $("[data-photos-grid]");
const photos = albumPhotos[albumKey].map((source, index) => ({
    source,
    alt: `${album.title} era photograph ${index + 1}`
}));

photos.forEach((photo, index) => {
    const figure = document.createElement("figure");
    figure.className = "photo-frame";
    figure.innerHTML = `<img src="${photo.source}" alt="${photo.alt}" loading="lazy">`;
    photoGrid.append(figure);
});

// Build the era selector with each album's original wordmark.
const eraMenu = $("[data-era-menu]");
albumOrder.forEach((key) => {
    const item = albums[key];
    const link = document.createElement("a");
    link.href = `album.html?album=${key}`;
    link.dataset.era = key;
    link.setAttribute("aria-label", `Open the ${item.title} era`);
    link.style.setProperty("--tile-soft", item.colors[1]);
    link.style.setProperty("--tile-ink", item.colors[2]);
    link.style.setProperty("--tile-accent", item.colors[3]);
    link.style.setProperty("--tile-dark", item.colors[4]);
    link.innerHTML = `<img src="${item.logo}" alt="${item.title}" loading="lazy">`;
    if (key === albumKey) link.setAttribute("aria-current", "page");
    eraMenu.append(link);
});

if (window.location.hash === "#listen") {
    window.requestAnimationFrame(() => {
        $("#listen")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}
