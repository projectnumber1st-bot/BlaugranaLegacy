// 1. Data Hasil Pertandingan Terbaru
const matchData = [
  {
    id: "m1",
    date: "27 Agu 2026",
    competition: "La Liga (Pekan 2)",
    match: "Elche CF vs FC Barcelona",
    score: "0 - 5",
    result: "Menang",
    goals: "FCB: Raphinha 14' (P), 67', Karim Adeyemi 45+3', Fermín López 71', 79'",
    possessionVal: 54,
    possessionStr: "45.6% - 54.4%",
    shots: "7 - 11",
    fouls: "13 - 12"
  },
  {
    id: "m2",
    date: "23 Agu 2026",
    competition: "La Liga (Pekan 1)",
    match: "FC Barcelona vs Athletic Bilbao",
    score: "2 - 0",
    result: "Menang",
    goals: "FCB: Raphinha 37', Fermín López 82'",
    possessionVal: 71,
    possessionStr: "71% - 29%",
    shots: "22 - 5",
    fouls: "13 - 6"
  },
  {
    id: "m3",
    date: "1 Sep 2026",
    competition: "La Liga (Pekan 3)",
    match: "FC Barcelona vs Rayo Vallecano",
    score: "5 - 2",
    result: "Menang",
    goals: "FCB: Raphinha 19', 71', Lamine Yamal 21', 90', Florian Lejeune OG 51' | RAY: Sergio Camello 12', 59'",
    possessionVal: 68,
    possessionStr: "68% - 32%",
    shots: "26 - 11",
    fouls: "4 - 11"
}
];

// 2. Data Jadwal Pertandingan Mendatang
const upcomingMatches = [
  {
    date: "1 Sep 2026",
    time: "02:30 WIB",
    competition: "La Liga (Pekan 3)",
    match: "FC Barcelona vs Rayo Vallecano",
    venue: "Spotify Camp Nou"
  },
  {
    date: "6 Sep 2026",
    time: "21:15 WIB",
    competition: "La Liga (Pekan 4)",
    match: "Valencia vs FC Barcelona",
    venue: "Estadio de Mestalla"
  },
  {
    date: "9 Sep 2026",
    time: "23:45 WIB",
    competition: "UEFA Champions League",
    match: "FC Barcelona vs Feyenoord",
    venue: "Spotify Camp Nou"
  }
];
// 3. Data Skuad Pemain FC Barcelona (Statistik Utama Rapi)
const squadData = [
  // Kiper (GK)
  { no: 1, name: "Joan García", pos: "GK", country: "🇪🇸 Spanyol", type: "gk", age: "25 Thn", height: "194 cm", marketValue: "€45M", stats: "🧤 2 Laga • 2 Clean Sheet" },
  { no: 13, name: "Wojciech Szczęsny", pos: "GK", country: "🇵🇱 Polandia", type: "gk", age: "36 Thn", height: "196 cm", marketValue: "€3M", stats: "🧤 6 Laga • 2 Clean Sheet" },

  // Bek (DF)
  { no: 2, name: "João Cancelo", pos: "RB/LB", country: "🇵🇹 Portugal", type: "df", age: "32 Thn", height: "182 cm", marketValue: "€18M", stats: "⚽ 4 Gol • 🅰️ 5 Assist • 44 Laga" },
  { no: 3, name: "Alejandro Balde", pos: "LB", country: "🇪🇸 Spanyol", type: "df", age: "22 Thn", height: "175 cm", marketValue: "€50M", stats: "⚽ 3 Gol • 🅰️ 10 Assist • 147 Laga" },
  { no: 5, name: "Pau Cubarsí", pos: "CB", country: "🇪🇸 Spanyol", type: "df", age: "19 Thn", height: "184 cm", marketValue: "€80M", stats: "🛡️ 60+ Laga • 🎯 Umpan Akurat 92%" },
  { no: 12, name: "Xavi Espart", pos: "DF", country: "🇪🇸 Spanyol", type: "df", age: "19 Thn", height: "176 cm", marketValue: "€5M", stats: "🌱 0 Laga • Musim Debut" },
  { no: 15, name: "Andreas Christensen", pos: "CB", country: "🇩🇰 Denmark", type: "df", age: "30 Thn", height: "187 cm", marketValue: "€8M", stats: "⚽ 4 Gol • 🛡️ Tekel Sukses 88% • 75+ Laga" },
  { no: 18, name: "Gerard Martín", pos: "LB/CB", country: "🇪🇸 Spanyol", type: "df", age: "24 Thn", height: "186 cm", marketValue: "€10M", stats: "🎯 Umpan Akurat 89% • 30+ Laga" },
  { no: 23, name: "Jules Koundé", pos: "RB/CB", country: "🇫🇷 Prancis", type: "df", age: "27 Thn", height: "180 cm", marketValue: "€60M", stats: "⚽ 4 Gol • 🅰️ 13 Assist • 120+ Laga" },
  { no: 24, name: "Eric García", pos: "CB/DM", country: "🇪🇸 Spanyol", type: "df", age: "25 Thn", height: "182 cm", marketValue: "€18M", stats: "⚽ 1 Gol • 🅰️ 2 Assist • 110+ Laga" },

  // Gelandang (MF)
  { no: 6, name: "Gavi", pos: "CM", country: "🇪🇸 Spanyol", type: "mf", age: "22 Thn", height: "173 cm", marketValue: "€90M", stats: "⚽ 7 Gol • 🅰️ 14 Assist • 115 Laga" },
  { no: 7, name: "Fermín López", pos: "CM/AM", country: "🇪🇸 Spanyol", type: "mf", age: "23 Thn", height: "174 cm", marketValue: "€100M", stats: "⚽ 14 Gol • 🅰️ 1 Assist • 100+ Laga" },
  { no: 8, name: "Pedri", pos: "CM", country: "🇪🇸 Spanyol", type: "mf", age: "23 Thn", height: "174 cm", marketValue: "€150M", stats: "⚽ 24 Gol • 🅰️ 15 Assist • 190+ Laga" },
  { no: 16, name: "Rodri", pos: "DM/CM", country: "🇪🇸 Spanyol", type: "mf", age: "30 Thn", height: "191 cm", marketValue: "€65M", stats: "🎯 Umpan Akurat 94% • 2 Laga" },
  { no: 0, name: "Marc Casadó", pos: "DM", country: "🇪🇸 Spanyol", type: "mf", age: "22 Thn", height: "172 cm", marketValue: "€15M", stats: "🎯 Umpan Akurat 91% • 40+ Laga" },
  { no: 20, name: "Dani Olmo", pos: "AM", country: "🇪🇸 Spanyol", type: "mf", age: "28 Thn", height: "179 cm", marketValue: "€60M", stats: "⚽ 13 Gol • 🅰️ 6 Assist • 28 Laga" },
  { no: 21, name: "Frenkie de Jong", pos: "CM/DM", country: "🇳🇱 Belanda", type: "mf", age: "29 Thn", height: "181 cm", marketValue: "€70M", stats: "⚽ 17 Gol • 🅰️ 21 Assist • 213 Laga" },
  { no: 22, name: "Marc Bernal", pos: "DM", country: "🇪🇸 Spanyol", type: "mf", age: "19 Thn", height: "191 cm", marketValue: "€30M", stats: "🎯 Umpan Akurat 92% • 10+ Laga" },

  // Penyerang (FW)
  { no: 10, name: "Lamine Yamal", pos: "RW", country: "🇪🇸 Spanyol", type: "fw", age: "19 Thn", height: "178 cm", marketValue: "€200M", stats: "⚽ 18 Gol • 🅰️ 25 Assist • 85 Laga" },
  { no: 11, name: "Raphinha", pos: "LW/RW", country: "🇧🇷 Brasil", type: "fw", age: "29 Thn", height: "176 cm", marketValue: "€70M", stats: "⚽ 32 Gol • 🅰️ 33 Assist • 110 Laga" },
  { no: 14, name: "Karim Adeyemi", pos: "LW/ST/RW", country: "🇩🇪 Jerman", type: "fw", age: "24 Thn", height: "180 cm", marketValue: "€45M", stats: "⚽ 1 Gol • 2 Laga" },
  { no: 17, name: "Anthony Gordon", pos: "LW/RW", country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inggris", type: "fw", age: "25 Thn", height: "183 cm", marketValue: "€65M", stats: "🅰️ 2 Assist • 2 Laga" },
  { no: 19, name: "Roony Bardghji", pos: "RW", country: "🇸🇪 Swedia", type: "fw", age: "20 Thn", height: "173 cm", marketValue: "€15M", stats: "⚡ 0 Laga • Rekrutan Baru" },
  { no: 27, name: "Jesse Bisiwu", pos: "RW/LW", country: "🇧🇪 Belgia", type: "fw", age: "18 Thn", height: "-", marketValue: "-", stats: "🌱 0 Laga • Akademi Promosi" },
  { no: 35, name: "Hamza Abdelkarim", pos: "ST/CF", country: "🇪🇬 Mesir", type: "fw", age: "18 Thn", height: "182 cm", marketValue: "€2M", stats: "🌱 0 Laga • Talenta Muda" }
];
// 4. Data Klasemen La Liga 2026/27
// Update: 1 September 2026

const laLigaTeams = [
  "FC Barcelona",
  "Real Madrid",
  "Atlético de Madrid",
  "Deportivo Alavés",
  "CA Osasuna",
  "Sevilla FC",
  "Real Betis",
  "RC Deportivo",
  "Levante UD",
  "R. Racing Club",
  "RCD Espanyol de Barcelona",
  "Athletic Club",
  "Real Sociedad",
  "Getafe CF",
  "Villarreal CF",
  "Valencia CF",
  "Celta",
  "Rayo Vallecano",
  "Elche CF",
  "Málaga CF"
];

const laLigaStandings = laLigaTeams.map((team, index) => {
  const isBarca = team === "FC Barcelona";

  const stats = [
    // 1. FC Barcelona
    { pld: 3, w: 3, d: 0, l: 0, gf: 12, ga: 2, gd: "+10", pts: 9 },

    // 2. Real Madrid
    { pld: 3, w: 3, d: 0, l: 0, gf: 10, ga: 2, gd: "+8", pts: 9 },

    // 3. Atlético de Madrid
    { pld: 3, w: 2, d: 1, l: 0, gf: 7, ga: 3, gd: "+4", pts: 7 },

    // 4. Deportivo Alavés
    { pld: 3, w: 2, d: 1, l: 0, gf: 5, ga: 1, gd: "+4", pts: 7 },

    // 5. CA Osasuna
    { pld: 3, w: 2, d: 1, l: 0, gf: 3, ga: 1, gd: "+2", pts: 7 },

    // 6. Sevilla FC
    { pld: 3, w: 2, d: 0, l: 1, gf: 6, ga: 5, gd: "+1", pts: 6 },

    // 7. Real Betis
    { pld: 3, w: 2, d: 0, l: 1, gf: 4, ga: 5, gd: "-1", pts: 6 },

    // 8. RC Deportivo
    { pld: 3, w: 1, d: 2, l: 0, gf: 5, ga: 3, gd: "+2", pts: 5 },

    // 9. Levante UD
    { pld: 3, w: 1, d: 1, l: 1, gf: 5, ga: 5, gd: "0", pts: 4 },

    // 10. R. Racing Club
    { pld: 3, w: 1, d: 1, l: 1, gf: 5, ga: 5, gd: "0", pts: 4 },

    // 11. RCD Espanyol de Barcelona
    { pld: 3, w: 1, d: 0, l: 2, gf: 5, ga: 4, gd: "+1", pts: 3 },

    // 12. Athletic Club
    { pld: 3, w: 1, d: 0, l: 2, gf: 3, ga: 5, gd: "-2", pts: 3 },

    // 13. Real Sociedad
    { pld: 3, w: 1, d: 0, l: 2, gf: 3, ga: 6, gd: "-3", pts: 3 },

    // 14. Getafe CF
    { pld: 3, w: 1, d: 0, l: 2, gf: 1, ga: 4, gd: "-3", pts: 3 },

    // 15. Villarreal CF
    { pld: 3, w: 0, d: 2, l: 1, gf: 4, ga: 5, gd: "-1", pts: 2 },

    // 16. Valencia CF
    { pld: 3, w: 0, d: 1, l: 2, gf: 1, ga: 4, gd: "-3", pts: 1 },

    // 17. Celta
    { pld: 3, w: 0, d: 1, l: 2, gf: 1, ga: 4, gd: "-3", pts: 1 },

    // 18. Rayo Vallecano
    { pld: 3, w: 0, d: 1, l: 2, gf: 4, ga: 8, gd: "-4", pts: 1 },

    // 19. Elche CF
    { pld: 3, w: 0, d: 1, l: 2, gf: 3, ga: 9, gd: "-6", pts: 1 },

    // 20. Málaga CF
    { pld: 3, w: 0, d: 1, l: 2, gf: 1, ga: 7, gd: "-6", pts: 1 }
  ];

  return {
    pos: index + 1,
    team: team,
    pld: stats[index].pld,
    w: stats[index].w,
    d: stats[index].d,
    l: stats[index].l,
    gf: stats[index].gf,
    ga: stats[index].ga,
    gd: stats[index].gd,
    pts: stats[index].pts,
    isBarca: isBarca
  };
});

// 5. Data Klasemen UCL League Phase (36 Klub)
const uclTeams = [
  "Paris Saint-Germain", "Bayern München", "Real Madrid", "Liverpool", "Inter",
  "Manchester City", "Arsenal", "FC Barcelona", "Atlético Madrid", "Borussia Dortmund",
  "Roma", "Sporting CP", "Aston Villa", "Porto", "Manchester United",
  "Club Brugge", "Real Betis", "PSV Eindhoven", "Feyenoord", "Lille",
  "Bodø/Glimt", "Napoli", "RB Leipzig", "Villarreal", "Fenerbahçe",
  "Shakhtar Donetsk", "Galatasaray", "AEK Athens", "Como", "LASK",
  "Lens", "Slovan Bratislava", "Slavia Praha", "—————————", "—————————", "—————————"
];

const uclStandings = uclTeams.map((team, index) => {
  const isBarca = team === "FC Barcelona";
  return {
    pos: index + 1,
    team: team,
    pld: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0,
    ga: 0,
    gd: "0",
    pts: 0,
    isBarca: isBarca
  };
});

// 6. Data Kabinet Trofi Lengkap (Tanpa CWC, Fairs Cup, & Latin Cup)
const trophyData = [
  {
    id: "copa-del-rey",
    title: "Copa del Rey",
    count: 32,
    icon: "👑",
    desc: "Pemegang Rekor Juara Terbanyak (Klik untuk detail)",
    glow: "red-glow",
    history: [
      { year: "1910", comp: "Copa del Rey", opponent: "Español de Madrid", score: "3–2", result: "🏆 Menang" },
      { year: "1912", comp: "Copa del Rey", opponent: "Gimnástica", score: "2–0", result: "🏆 Menang" },
      { year: "1913", comp: "Copa del Rey", opponent: "Real Sociedad", score: "2–2, 0–0, 2–1", result: "🏆 Menang" },
      { year: "1920", comp: "Copa del Rey", opponent: "Athletic Club", score: "2–0", result: "🏆 Menang" },
      { year: "1922", comp: "Copa del Rey", opponent: "Real Unión", score: "5–1", result: "🏆 Menang" },
      { year: "1925", comp: "Copa del Rey", opponent: "Arenas Club", score: "2–0", result: "🏆 Menang" },
      { year: "1926", comp: "Copa del Rey", opponent: "Atlético Madrid", score: "3–2 AET", result: "🏆 Menang" },
      { year: "1928", comp: "Copa del Rey", opponent: "Real Sociedad", score: "1–1, 1–1, 3–1", result: "🏆 Menang" },
      { year: "1942", comp: "Copa del Rey", opponent: "Athletic Club", score: "4–3 AET", result: "🏆 Menang" },
      { year: "1951", comp: "Copa del Rey", opponent: "Real Sociedad", score: "3–0", result: "🏆 Menang" },
      { year: "1952", comp: "Copa del Rey", opponent: "Valencia", score: "4–2 AET", result: "🏆 Menang" },
      { year: "1953", comp: "Copa del Rey", opponent: "Athletic Club", score: "2–1", result: "🏆 Menang" },
      { year: "1957", comp: "Copa del Rey", opponent: "Espanyol", score: "1–0", result: "🏆 Menang" },
      { year: "1959", comp: "Copa del Rey", opponent: "Granada", score: "4–1", result: "🏆 Menang" },
      { year: "1963", comp: "Copa del Rey", opponent: "Zaragoza", score: "3–1", result: "🏆 Menang" },
      { year: "1968", comp: "Copa del Rey", opponent: "Real Madrid", score: "1–0", result: "🏆 Menang" },
      { year: "1971", comp: "Copa del Rey", opponent: "Valencia", score: "4–3 AET", result: "🏆 Menang" },
      { year: "1978", comp: "Copa del Rey", opponent: "Las Palmas", score: "3–1", result: "🏆 Menang" },
      { year: "1981", comp: "Copa del Rey", opponent: "Sporting Gijón", score: "3–1", result: "🏆 Menang" },
      { year: "1983", comp: "Copa del Rey", opponent: "Real Madrid", score: "2–1", result: "🏆 Menang" },
      { year: "1988", comp: "Copa del Rey", opponent: "Real Sociedad", score: "1–0", result: "🏆 Menang" },
      { year: "1990", comp: "Copa del Rey", opponent: "Real Madrid", score: "2–0", result: "🏆 Menang" },
      { year: "1997", comp: "Copa del Rey", opponent: "Real Betis", score: "3–2 AET", result: "🏆 Menang" },
      { year: "1998", comp: "Copa del Rey", opponent: "Mallorca", score: "1–1 AET, 5–4 pen.", result: "🏆 Menang" },
      { year: "2009", comp: "Copa del Rey", opponent: "Athletic Club", score: "4–1", result: "🏆 Menang" },
      { year: "2012", comp: "Copa del Rey", opponent: "Athletic Club", score: "3–0", result: "🏆 Menang" },
      { year: "2015", comp: "Copa del Rey", opponent: "Athletic Club", score: "3–1", result: "🏆 Menang" },
      { year: "2016", comp: "Copa del Rey", opponent: "Sevilla", score: "2–0 AET", result: "🏆 Menang" },
      { year: "2017", comp: "Copa del Rey", opponent: "Alavés", score: "3–1", result: "🏆 Menang" },
      { year: "2018", comp: "Copa del Rey", opponent: "Sevilla", score: "5–0", result: "🏆 Menang" },
      { year: "2021", comp: "Copa del Rey", opponent: "Athletic Club", score: "4–0", result: "🏆 Menang" },
      { year: "2025", comp: "Copa del Rey", opponent: "Real Madrid", score: "3–2 AET", result: "🏆 Menang" }
    ]
  },
  {
    id: "supercopa",
    title: "Supercopa de España",
    count: 16,
    icon: "🛡️",
    desc: "Rekor Terbanyak di Spanyol (Klik untuk detail)",
    glow: "",
    history: [
      { year: "1983", comp: "Supercopa de España", opponent: "Athletic Club", score: "3–1, 0–1", result: "🏆 Menang" },
      { year: "1991", comp: "Supercopa de España", opponent: "Atlético Madrid", score: "1–0, 1–1", result: "🏆 Menang" },
      { year: "1992", comp: "Supercopa de España", opponent: "Atlético Madrid", score: "3–1, 2–1", result: "🏆 Menang" },
      { year: "1994", comp: "Supercopa de España", opponent: "Zaragoza", score: "2–0, 4–5", result: "🏆 Menang" },
      { year: "1996", comp: "Supercopa de España", opponent: "Atlético Madrid", score: "5–2, 1–3", result: "🏆 Menang" },
      { year: "2005", comp: "Supercopa de España", opponent: "Real Betis", score: "3–0, 1–2", result: "🏆 Menang" },
      { year: "2006", comp: "Supercopa de España", opponent: "Espanyol", score: "1–0, 3–0", result: "🏆 Menang" },
      { year: "2009", comp: "Supercopa de España", opponent: "Athletic Club", score: "2–1, 3–0", result: "🏆 Menang" },
      { year: "2010", comp: "Supercopa de España", opponent: "Sevilla", score: "1–3, 4–0", result: "🏆 Menang" },
      { year: "2011", comp: "Supercopa de España", opponent: "Real Madrid", score: "2–2, 3–2", result: "🏆 Menang" },
      { year: "2013", comp: "Supercopa de España", opponent: "Atlético Madrid", score: "1–1, 0–0", result: "🏆 Menang" },
      { year: "2016", comp: "Supercopa de España", opponent: "Sevilla", score: "2–0, 3–0", result: "🏆 Menang" },
      { year: "2018", comp: "Supercopa de España", opponent: "Sevilla", score: "2–1", result: "🏆 Menang" },
      { year: "2023", comp: "Supercopa de España", opponent: "Real Madrid", score: "3–1", result: "🏆 Menang" },
      { year: "2025", comp: "Supercopa de España", opponent: "Real Madrid", score: "5–2", result: "🏆 Menang" },
      { year: "2026", comp: "Supercopa de España", opponent: "Real Madrid", score: "3–2", result: "🏆 Menang" }
    ]
  },
  {
    id: "ucl",
    title: "UEFA Champions League",
    count: 5,
    icon: "⭐",
    desc: "Liga Champions Eropa (Klik untuk detail)",
    glow: "blue-glow",
    history: [
      { year: "1992", comp: "European Cup / UCL", opponent: "Sampdoria", score: "1–0 AET", result: "🏆 Menang" },
      { year: "2006", comp: "UCL", opponent: "Arsenal", score: "2–1", result: "🏆 Menang" },
      { year: "2009", comp: "UCL", opponent: "Manchester United", score: "2–0", result: "🏆 Menang" },
      { year: "2011", comp: "UCL", opponent: "Manchester United", score: "3–1", result: "🏆 Menang" },
      { year: "2015", comp: "UCL", opponent: "Juventus", score: "3–1", result: "🏆 Menang" }
    ]
  },
  {
    id: "club-world-cup",
    title: "FIFA Club World Cup",
    count: 3,
    icon: "🌍",
    desc: "Piala Dunia Antarklub (Klik untuk detail)",
    glow: "green-glow",
    history: [
      { year: "2009", comp: "FIFA Club World Cup", opponent: "Estudiantes", score: "2–1 AET", result: "🏆 Menang" },
      { year: "2011", comp: "FIFA Club World Cup", opponent: "Santos", score: "4–0", result: "🏆 Menang" },
      { year: "2015", comp: "FIFA Club World Cup", opponent: "River Plate", score: "3–0", result: "🏆 Menang" }
    ]
  },
  {
    id: "uefa-super-cup",
    title: "Piala Super UEFA",
    count: 5,
    icon: "🎖️",
    desc: "UEFA Super Cup (Klik untuk detail)",
    glow: "",
    history: [
      { year: "1992", comp: "UEFA Super Cup", opponent: "Werder Bremen", score: "1–1, 2–1", result: "🏆 Menang" },
      { year: "1997", comp: "UEFA Super Cup", opponent: "Borussia Dortmund", score: "2–0, 1–1", result: "🏆 Menang" },
      { year: "2009", comp: "UEFA Super Cup", opponent: "Shakhtar Donetsk", score: "1–0 AET", result: "🏆 Menang" },
      { year: "2011", comp: "UEFA Super Cup", opponent: "Porto", score: "2–0", result: "🏆 Menang" },
      { year: "2015", comp: "UEFA Super Cup", opponent: "Sevilla", score: "5–4 AET", result: "🏆 Menang" }
    ]
  },
  {
    id: "la-liga",
    title: "La Liga",
    count: 29,
    icon: "🏆",
    desc: "Gelar Juara Liga Spanyol",
    glow: "yellow-glow",
    history: []
  }
];

// 7. Data Top 10 Pencetak Gol Sepanjang Masa
const topScorers = [
  { rank: "🥇 1", name: "Lionel Messi", years: "2004 – 2021", matches: "778", goals: "672 Gol" },
  { rank: "🥈 2", name: "César Rodríguez", years: "1942 – 1955", matches: "350", goals: "232 Gol" },
  { rank: "🥉 3", name: "Luis Suárez", years: "2014 – 2020", matches: "283", goals: "198 Gol" },
  { rank: "4", name: "László Kubala", years: "1950 – 1961", matches: "256", goals: "194 Gol" },
  { rank: "5", name: "Josep Samitier", years: "1919 – 1932", matches: "360", goals: "184 Gol" },
  { rank: "6", name: "Josep Escolà", years: "1934 – 1949", matches: "223", goals: "167 Gol" },
  { rank: "7", name: "Paulino Alcántara", years: "1912 – 1927", matches: "395", goals: "143 Gol" },
  { rank: "8", name: "Samuel Eto'o", years: "2004 – 2009", matches: "199", goals: "130 Gol" },
  { rank: "9", name: "Rivaldo", years: "1997 – 2002", matches: "235", goals: "130 Gol" },
  { rank: "10", name: "Ángel Arocha", years: "1926 – 1933", matches: "207", goals: "127 Gol" }
];

// Switch Tab Navigation
function switchTab(tabId, element) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  if (element) element.classList.add('active');
}

// Expandable Rows Detail Match
function toggleDetail(id) {
  const detailRow = document.getElementById(`detail-${id}`);
  if (detailRow) {
    detailRow.classList.toggle('open');
  }
}

// Render Data Pertandingan (Hasil)
function renderMatches() {
  const tbody = document.getElementById("match-list");
  if (!tbody) return;

  tbody.innerHTML = "";

  matchData.forEach(item => {
    let statusClass = item.result === "Menang" ? "status-win" : "status-loss";

    const mainRow = document.createElement("tr");
    mainRow.className = "match-row";
    mainRow.setAttribute("onclick", `toggleDetail('${item.id}')`);
    mainRow.innerHTML = `
      <td>${item.date}</td>
      <td><span class="comp-tag">${item.competition}</span></td>
      <td><strong>${item.match}</strong></td>
      <td><strong>${item.score}</strong></td>
      <td><span class="${statusClass}">${item.result}</span></td>
    `;

    const detailRow = document.createElement("tr");
    detailRow.id = `detail-${item.id}`;
    detailRow.className = "details-row";
    detailRow.innerHTML = `
      <td colspan="5">
        <div class="details-container">
          <div class="details-grid">
            <div class="scorers-box">
              <h4>⚽ Pencetak Gol</h4>
              <div style="font-size: 0.9rem; line-height: 1.6;">${item.goals}</div>
            </div>
            <div class="stats-box">
              <h4>📊 Match Stats</h4>
              <div class="stat-item">
                <span>Penguasaan Bola:</span>
                <strong>${item.possessionStr}</strong>
              </div>
              <div class="possession-bar">
                <div class="possession-fill" style="width: ${item.possessionVal}%;"></div>
              </div>
              <div class="stat-item" style="margin-top: 10px;">
                <span>Tembakan (On Target):</span>
                <strong>${item.shots}</strong>
              </div>
              <div class="stat-item">
                <span>Pelanggaran:</span>
                <strong>${item.fouls}</strong>
              </div>
            </div>
          </div>
        </div>
      </td>
    `;

    tbody.appendChild(mainRow);
    tbody.appendChild(detailRow);
  });
}

// Render Jadwal Mendatang
function renderUpcoming() {
  const container = document.getElementById("upcoming-list");
  if (!container) return;

  container.innerHTML = "";

  upcomingMatches.forEach(item => {
    const card = document.createElement("div");
    card.className = "card glass blue-glow";
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="comp-tag">${item.competition}</span>
        <span style="font-size: 0.8rem; color: var(--barca-gold); font-weight: 700;">⏰ ${item.time}</span>
      </div>
      <h3 style="font-size: 1.1rem; margin-bottom: 8px;">${item.match}</h3>
      <p style="font-size: 0.85rem; color: var(--text-muted);">📅 ${item.date} • 📍 ${item.venue}</p>
    `;
    container.appendChild(card);
  });
}

// Render Data Skuad dengan Event Click
function renderSquad() {
  const categories = ['gk', 'df', 'mf', 'fw'];

  categories.forEach(type => {
    const container = document.getElementById(`${type}-list`);
    if (!container) return;

    container.innerHTML = "";
    const filtered = squadData.filter(p => p.type === type);

    filtered.forEach(player => {
      const card = document.createElement("div");
      card.className = "card glass clickable-card";
      card.setAttribute("onclick", `showPlayerDetail(${player.no})`);
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span style="font-size: 1.5rem; font-weight: 900; color: var(--barca-gold);">#${player.no}</span>
          <span class="comp-tag">${player.pos}</span>
        </div>
        <h3 style="font-size: 1.1rem; margin-bottom: 4px;">${player.name}</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted);">${player.country}</p>
      `;
      container.appendChild(card);
    });
  });
}

// Fungsi Menampilkan Modal Detail Pemain
function showPlayerDetail(playerNo) {
  const player = squadData.find(p => p.no === playerNo);
  if (!player) return;

  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    <div class="player-detail-header">
      <div class="player-detail-number">#${player.no}</div>
      <div class="player-detail-info">
        <h2>${player.name}</h2>
        <span class="comp-tag">${player.pos}</span>
      </div>
    </div>
    <div class="player-detail-grid">
      <div class="detail-item">
        <span>Kewarganegaraan</span>
        <strong>${player.country}</strong>
      </div>
      <div class="detail-item">
        <span>Umur</span>
        <strong>${player.age}</strong>
      </div>
      <div class="detail-item">
        <span>Tinggi Badan</span>
        <strong>${player.height}</strong>
      </div>
      <div class="detail-item">
        <span>Nilai Pasar</span>
        <strong>${player.marketValue}</strong>
      </div>
    </div>
    <div class="detail-item" style="margin-top: 12px;">
      <span>Statistik Utama</span>
      <strong>${player.stats}</strong>
    </div>
  `;

  document.getElementById("player-modal").classList.add("active");
}

// Fungsi Menutup Modal Detail Pemain
function closePlayerModal(event, force = false) {
  if (force || event.target.id === "player-modal") {
    document.getElementById("player-modal").classList.remove("active");
  }
}

// Render Klasemen
function renderStandings() {
  const laLigaBody = document.getElementById("laliga-standings-body");
  const uclBody = document.getElementById("ucl-standings-body");

  if (laLigaBody) {
    laLigaBody.innerHTML = laLigaStandings.map(row => `
      <tr class="${row.isBarca ? 'highlight-barca' : ''}">
        <td>${row.pos}</td>
        <td><strong>${row.team}</strong></td>
        <td>${row.pld}</td>
        <td>${row.w}</td>
        <td>${row.d}</td>
        <td>${row.l}</td>
        <td>${row.gf}</td>
        <td>${row.ga}</td>
        <td>${row.gd}</td>
        <td><strong>${row.pts}</strong></td>
      </tr>
    `).join('');
  }

  if (uclBody) {
    uclBody.innerHTML = uclStandings.map(row => `
      <tr class="${row.isBarca ? 'highlight-barca' : ''}">
        <td>${row.pos}</td>
        <td><strong>${row.team}</strong></td>
        <td>${row.pld}</td>
        <td>${row.w}</td>
        <td>${row.d}</td>
        <td>${row.l}</td>
        <td>${row.gf}</td>
        <td>${row.ga}</td>
        <td>${row.gd}</td>
        <td><strong>${row.pts}</strong></td>
      </tr>
    `).join('');
  }
}

// Render Kabinet Trofi
function renderTrophies() {
  const trophyGrid = document.getElementById("trophy-grid");
  if (!trophyGrid) return;

  trophyGrid.innerHTML = trophyData.map(item => `
    <div class="card glass clickable-trophy ${item.glow}" onclick="showTrophyDetail('${item.id}')">
      <div class="card-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <div class="stat-value">${item.count}</div>
      <p>${item.desc}</p>
    </div>
  `).join('');
}

// Fungsi Menampilkan Modal Detail Trofi
function showTrophyDetail(trophyId) {
  const trophy = trophyData.find(t => t.id === trophyId);
  if (!trophy || !trophy.history || trophy.history.length === 0) return;

  const modalBody = document.getElementById("trophy-modal-body");
  
  const historyRows = trophy.history.map(row => `
    <tr>
      <td><strong>${row.year}</strong></td>
      <td><span class="comp-tag">${row.comp}</span></td>
      <td><strong>${row.opponent}</strong></td>
      <td>${row.score}</td>
      <td><span class="status-win">${row.result}</span></td>
    </tr>
  `).join('');

  modalBody.innerHTML = `
    <div class="trophy-detail-header">
      <div class="trophy-detail-icon">${trophy.icon}</div>
      <div class="trophy-detail-title">
        <h2>${trophy.title}</h2>
        <p>Total Gelar Juara: ${trophy.count}</p>
      </div>
    </div>
    <div class="table-card glass">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Tahun</th>
              <th>Kompetisi</th>
              <th>Final / Lawan</th>
              <th>Skor</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            ${historyRows}
          </tbody>
        </table>
      </div>
    </div>
  `;

  document.getElementById("trophy-modal").classList.add("active");
}

// Fungsi Menutup Modal Detail Trofi
function closeTrophyModal(event, force = false) {
  if (force || event.target.id === "trophy-modal") {
    document.getElementById("trophy-modal").classList.remove("active");
  }
}

// Render Top Scorers Detail
function renderTopScorers() {
  const tbody = document.getElementById("top-scorers-body");
  if (!tbody) return;

  tbody.innerHTML = topScorers.map(player => `
    <tr>
      <td>${player.rank}</td>
      <td><strong>${player.name}</strong></td>
      <td>${player.years}</td>
      <td>${player.matches} Laga</td>
      <td><strong>${player.goals}</strong></td>
    </tr>
  `).join('');
}

// Inisialisasi Aplikasi
document.addEventListener("DOMContentLoaded", () => {
  renderMatches();
  renderUpcoming();
  renderSquad();
  renderStandings();
  renderTrophies();
  renderTopScorers();
});
