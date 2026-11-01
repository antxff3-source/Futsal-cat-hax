// Inicialización optimizada para Venezuela (sin lag y con geolocalización correcta)
var room = HBInit({
  roomName: "Futsal Cat Hax | x1 [Conpetitive]",
  maxPlayers: 12,
  public: true,
  playerName: "X1 BOT",
  noPlayer: true,
  geo: { code: "ve", lat: 10.5, lon: -66.9 }
});

// Configuración del Webhook de Discord para las repeticiones
const WEBHOOK_DISCORD = 'https://discord.com/api/webhooks/1566523201973002371/clTC85X7AKjMlEcRND4tx0f1NeSVZ0JOmm0xt9k0iyk6GpbaJSf9S0fggb_mNdrRcbLD';

// Cargar el mapa personalizado de Futsal
room.setCustomStadium(JSON.stringify({
  "name": "1v1 & 2v2 Futsal Map by D1⚽️S (FIXED) [haxmods.com]",
  "width": 420,
  "height": 200,
  "spawnDistance": 180,
  "redSpawnPoints": [[-180,0],[-180,-50],[-180,50],[-180,100],[-180,-100],[-368,0]],
  "blueSpawnPoints": [[180,0],[180,-50],[180,50],[180,100],[180,-100],[368,0]],
  "bg": {"type":"","height":0,"width":0,"color":"404447"},
  "vertexes": [
    {"x":368,"y":171,"trait":"ballArea"},{"x":0,"y":200,"trait":"kickOffBarrier"},{"x":0,"y":66,"bCoef":0.15,"trait":"kickOffBarrier","color":"b3b6b6","vis":true,"curve":180},{"x":0,"y":-66,"bCoef":0.15,"trait":"kickOffBarrier","color":"b3b6b6","vis":true,"curve":180},{"x":0,"y":-200,"trait":"kickOffBarrier"},{"x":-368,"y":-60,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-368,-60]},{"x":-400,"y":-60,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-368,-60]},{"x":-400,"y":60,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-368,60]},{"x":-368,"y":60,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[-368,60]},{"x":368,"y":-60,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[550,-80]},{"x":400,"y":-60,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[550,-80]},{"x":400,"y":60,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[550,80]},{"x":368,"y":60,"cMask":["ball"],"trait":"goalNet","curve":0,"color":"ffffff","pos":[550,80]},{"x":-368,"y":60,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[-368,60],"bias":25},{"x":-368,"y":171,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","bias":25},{"x":-368,"y":-60,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[-368,-60],"bias":-25},{"x":-368,"y":-171,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","bias":-25},{"x":-368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff","bias":25},{"x":368,"y":171,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff","bias":25},{"x":368,"y":60,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[550,80],"color":"FFFFFF","bias":-25},{"x":368,"y":171,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"FFFFFF","bias":-25},{"x":368,"y":-171,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","bias":-25},{"x":368,"y":-60,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[550,-80],"bias":-25},{"x":-368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff","bias":-25},{"x":368,"y":-171,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff","bias":-25},{"x":0,"y":-171,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"B6B6B8"},{"x":0,"y":-66,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"B6B6B8"},{"x":0,"y":66,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"B6B6B8"},{"x":0,"y":171,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"B6B6B8"},{"x":0,"y":66,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"b3b6b6"},{"x":0,"y":66,"trait":"kickOffBarrier","color":"b3b6b6","vis":true,"curve":-180},{"x":0,"y":66,"trait":"kickOffBarrier","color":"b3b6b6","vis":true,"curve":0},{"x":0,"y":66,"bCoef":0.1,"trait":"line","color":"b3b6b6"},{"x":-368,"y":60,"bCoef":0.1,"trait":"line","color":"b3b6b6","pos":[-368,60]},{"x":368,"y":-60,"bCoef":0.1,"trait":"line","color":"b3b6b6","pos":[550,-80]},{"x":368,"y":60,"bCoef":0.1,"trait":"line","color":"b3b6b6","pos":[550,80]},{"x":-368,"y":140,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":-95},{"x":-260,"y":50,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":-95},{"x":-368,"y":-140,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":95},{"x":-260,"y":-50,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":95},{"x":368,"y":171,"bCoef":0.1,"trait":"line","curve":90,"color":"b3b6b6"},{"x":368,"y":140,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":95},{"x":260,"y":50,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":95},{"x":368,"y":-140,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":-95},{"x":260,"y":-50,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":-95},{"x":260,"y":50,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":0},{"x":260,"y":-50,"bCoef":0.1,"trait":"line","color":"B6B6B8","curve":0},{"x":-260,"y":2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":-260,"y":-2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":-260,"y":2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":-260,"y":-2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":-260,"y":-2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":-260,"y":2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":-260,"y":-2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":-260,"y":2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":260,"y":2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":260,"y":-2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":260,"y":2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":260,"y":-2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":260,"y":-2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":260,"y":2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":260,"y":-2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":260,"y":2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":-305.5046578529513,"y":171,"bCoef":0.1,"trait":"line","color":"b3b6b6"},{"x":-305.5046578529513,"y":171,"bCoef":0.1,"trait":"line","color":"b3b6b6"},{"x":-152.75232892647566,"y":171,"bCoef":0.1,"trait":"line","color":"b3b6b6"},{"x":-152.75232892647566,"y":171,"bCoef":0.1,"trait":"line","color":"b3b6b6"},{"x":305.5046578529513,"y":171,"bCoef":0.1,"trait":"line","color":"b3b6b6"},{"x":305.5046578529513,"y":171,"bCoef":0.1,"trait":"line","color":"b3b6b6"},{"x":152.75232892647566,"y":171,"bCoef":0.1,"trait":"line","color":"b3b6b6"},{"x":152.75232892647566,"y":171,"bCoef":0.1,"trait":"line","color":"b3b6b6"},{"x":-731.9382427726956,"y":163.9038930791752,"bCoef":0.1,"trait":"line","color":"b3b6b6"},{"x":-731.9382427726956,"y":-163.9038930791752,"bCoef":0.1,"trait":"line","color":"b3b6b6"},{"x":-368,"y":60,"bCoef":0,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-368,60],"vis":false},{"x":368,"y":-60,"color":"ffffff","pos":[550,-80]},{"x":368,"y":60,"color":"0099ff","pos":[550,80]},{"x":-368,"y":-60,"cMask":["wall"],"color":"F80000","pos":[-368,-60]},{"x":-368,"y":-20,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"C31E12","curve":0,"_data":{"mirror":[]}},{"x":-368,"y":20,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"C31E12","curve":0,"_data":{"mirror":[]}},{"x":-368,"y":60,"cMask":["wall"],"color":"F80000","curve":0,"pos":[-368,60]},{"x":-368,"y":60,"color":"ff6363","pos":[-368,60]},{"x":368,"y":-60,"cMask":["wall"],"color":"2597ED","pos":[550,-80]},{"x":368,"y":-20,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"016EC0"},{"x":368,"y":60,"cMask":["wall"],"color":"FFFFff","curve":0,"pos":[550,80]},{"x":368,"y":20,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"016EC0"},{"x":368,"y":60,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"2597ED","pos":[550,80]},{"x":-175,"y":-171,"bCoef":0.1,"trait":"line","color":"8B8B8B"},{"x":-175,"y":171,"bCoef":0.1,"trait":"line","color":"8B8B8B"},{"x":175,"y":-171,"bCoef":0.1,"trait":"line","color":"8B8B8B","_data":{"mirror":[]}},{"x":175,"y":171,"bCoef":0.1,"trait":"line","color":"8B8B8B","_data":{"mirror":[]}},{"x":0,"y":-65,"bCoef":0.1,"trait":"line","color":"b3b6b6","curve":-180},{"x":0,"y":65,"bCoef":0.1,"trait":"line","curve":-180},{"x":0,"y":-65,"bCoef":0.1,"trait":"line","color":"b3b6b6","curve":180,"_data":{"mirror":[]}},{"x":0,"y":65,"bCoef":0.1,"trait":"line","curve":180,"_data":{"mirror":[]}},{"x":260,"y":-2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":260,"y":2.75,"bCoef":0.1,"trait":"line","curve":180,"color":"ffffff"},{"x":260,"y":-2.75,"bCoef":0.1,"trait":"line","curve":0,"color":"ffffff"},{"x":260,"y":2.75,"bCoef":0.1,"trait":"line","curve":0,"color":"ffffff"},{"x":0,"y":-65,"bCoef":0.1,"trait":"line","color":"B6B6B8"},{"x":0,"y":65,"bCoef":0.1,"trait":"line","color":"B6B6B8","_data":{"mirror":[]}},{"x":420,"y":-200,"bCoef":0.1,"cMask":["all"],"vis":false},{"x":420,"y":200,"bCoef":0.1,"cMask":["all"],"vis":false},{"x":-420,"y":-200,"bCoef":0.1,"cMask":["all"],"vis":false,"curve":0},{"x":-420,"y":200,"bCoef":0.1,"cMask":["all"],"vis":false,"curve":0},{"x":-420,"y":200,"bCoef":0.1,"cMask":["all"]},{"x":420,"y":200,"bCoef":0.1,"cMask":["all"]},{"x":-420,"y":-200,"bCoef":0.1,"cMask":["all"],"curve":0},{"x":420,"y":-200,"bCoef":0.1,"cMask":["all"],"curve":0},{"bCoef":0.1,"trait":"line","x":0,"y":-65,"_data":{"mirror":[]},"color":"B6B6B8"},{"bCoef":0.1,"trait":"line","x":0,"y":65,"_data":{"mirror":[]},"color":"B6B6B8"}
  ],
  "segments": [
    {"v0":5,"v1":6,"curve":0,"color":"ffffff","cMask":["ball"],"trait":"goalNet","pos":[-368,-60],"y":-60},{"v0":6,"v1":7,"color":"ffffff","cMask":["ball"],"trait":"goalNet","x":-400},{"v0":7,"v1":8,"curve":0,"color":"ffffff","cMask":["ball"],"trait":"goalNet","pos":[-368,60],"y":60},{"v0":9,"v1":10,"curve":0,"color":"ffffff","cMask":["ball"],"trait":"goalNet","pos":[550,-80],"y":-60},{"v0":10,"v1":11,"color":"ffffff","cMask":["ball"],"trait":"goalNet","x":400},{"v0":11,"v1":12,"curve":0,"color":"ffffff","cMask":["ball"],"trait":"goalNet","pos":[550,80],"y":60},{"v0":1,"v1":2,"trait":"kickOffBarrier"},{"v0":2,"v1":3,"curve":180,"vis":true,"color":"b3b6b6","bCoef":0.15,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":2,"v1":3,"curve":-180,"vis":true,"color":"b3b6b6","bCoef":0.15,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"trait":"kickOffBarrier"},{"v0":13,"v1":14,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":25,"x":-368},{"v0":15,"v1":16,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":-25,"x":-368},{"v0":17,"v1":18,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":25,"y":171},{"v0":19,"v1":20,"vis":true,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":-25,"x":368},{"v0":21,"v1":22,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","bias":-25,"x":368},{"v0":23,"v1":24,"curve":0,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","bias":-25,"y":-171},{"v0":25,"v1":26,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":27,"v1":28,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":36,"v1":37,"curve":-95,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":38,"v1":39,"curve":95,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":37,"v1":39,"curve":0,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":-260},{"v0":41,"v1":42,"curve":95,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":43,"v1":44,"curve":-95,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":45,"v1":46,"curve":0,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","x":260},{"v0":48,"v1":47,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-260},{"v0":47,"v1":48,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-260},{"v0":50,"v1":49,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-260},{"v0":49,"v1":50,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-260},{"v0":52,"v1":51,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-260},{"v0":51,"v1":52,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-260},{"v0":54,"v1":53,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-260},{"v0":53,"v1":54,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":-260},{"v0":56,"v1":55,"curve":179.83540351837757,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":260},{"v0":55,"v1":56,"curve":180.1642154442635,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":260},{"v0":58,"v1":57,"curve":180.00000000000165,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":260},{"v0":57,"v1":58,"curve":179.99999999999835,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":260},{"v0":60,"v1":59,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":260},{"v0":59,"v1":60,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":260},{"v0":62,"v1":61,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":260},{"v0":61,"v1":62,"curve":180.55861544418315,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":260},{"v0":79,"v1":78,"curve":0,"vis":true,"color":"F80000","cMask":["wall"],"x":-368},{"v0":77,"v1":76,"curve":0,"vis":true,"color":"F80000","cMask":["wall"],"x":-368},{"v0":82,"v1":81,"curve":0,"vis":true,"color":"2597ED","cMask":["wall"],"x":368},{"v0":82,"v1":84,"curve":0,"vis":true,"color":"016EC0","bCoef":0.1,"cMask":["wall"],"trait":"line","x":368},{"v0":85,"v1":84,"curve":0,"vis":true,"color":"2597ED","bCoef":0.1,"cMask":["wall"],"trait":"line","x":368},{"v0":78,"v1":77,"curve":0,"vis":true,"color":"C31E12","cMask":["wall"],"x":-368,"_data":{"mirror":[],"arc":{"a":[-368,20],"b":[-368,-20],"curve":0}}},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"8B8B8B","bCoef":0.1,"trait":"line","x":-175},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"8B8B8B","bCoef":0.1,"trait":"line","x":175,"_data":{"mirror":[],"arc":{"a":[175,-171],"b":[175,171],"curve":0}}},{"v0":90,"v1":91,"curve":-180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line"},{"v0":92,"v1":93,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","_data":{"mirror":[],"arc":{"a":[0,-65],"b":[0,65],"curve":180,"radius":65,"center":[0,0],"from":-1.5707963267948966,"to":1.5707963267948966}}},{"v0":53,"v1":54,"color":"ffffff","bCoef":0.1,"trait":"line","x":-260},{"v0":94,"v1":95,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":260},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"ffffff","bCoef":0.1,"trait":"line","x":260},{"v0":100,"v1":101,"vis":false,"bCoef":0.1,"cMask":["all"],"x":420},{"v0":102,"v1":103,"curve":0,"vis":false,"bCoef":0.1,"cMask":["all"],"x":-420},{"v0":104,"v1":105,"curve":0,"vis":false,"bCoef":0.1,"cMask":["all"],"y":200},{"v0":106,"v1":107,"curve":0,"vis":false,"bCoef":0.1,"cMask":["all"],"y":-200},{"curve":0,"vis":true,"color":"B6B6B8","bCoef":0.1,"trait":"line","v0":108,"v1":109,"_data":{"mirror":[],"arc":{"a":[0,-65],"b":[0,65],"curve":0}},"x":0}
  ],
  "goals": [
    {"p0":[-375,-60],"p1":[-375,60],"team":"red"},
    {"p0":[375,60],"p1":[375,-60],"team":"blue"}
  ],
  "discs": [
    {"radius":6.4,"invMass":1.5,"pos":[0,0],"color":"FFD500","bCoef":0.4,"cGroup":["ball","kick","score"],"damping":0.99,"_data":{"mirror":[]}},
    {"radius":5,"pos":[-368,60],"color":"F80000","trait":"goalPost","y":60,"x":-368},
    {"radius":5,"pos":[-368,-60],"color":"F80000","trait":"goalPost","y":-60,"x":-368},
    {"radius":5,"pos":[368,60],"color":"6666FF","trait":"goalPost","y":80},
    {"radius":5,"pos":[368,-60],"color":"6666FF","trait":"goalPost","y":-80}
  ],
  "planes": [
    {"normal":[-1,0],"dist":-789.2203661201241,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-789.2203661201241,"canvas_rect":[-395.47682345544615,-108.05377690039512,426.2721498720588,108.05377690039512],"a":[789.2203661201241,-108.05377690039512],"b":[789.2203661201241,108.05377690039512]}}},
    {"normal":[-1,0],"dist":-789.2203661201241,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0,"_data":{"extremes":{"normal":[-1,0],"dist":-789.2203661201241,"canvas_rect":[-395.47682345544615,-108.05377690039512,426.2721498720588,108.05377690039512],"a":[789.2203661201241,-108.05377690039512],"b":[789.2203661201241,108.05377690039512]}}}
  ],
  "traits": {
    "ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},
    "goalPost":{"radius":8,"invMass":0,"bCoef":0.5},
    "goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},
    "line":{"vis":true,"bCoef":0.1,"cMask":[""]},
    "kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}
  },
  "playerPhysics": {"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},
  "ballPhysics": "disc0",
  "joints": [],
  "canBeStored": true
}));

room.setScoreLimit(3); 
room.setTimeLimit(3);  

var tiempoInicioTimer = null;
var nivelesJugadores = {};

function obtenerRango(puntos, nombre) {
  var nombreLimpio = nombre.replace(/\s+/g, ' ').trim();
  if (nombreLimpio === "F I X X A") {
    return "👑 ADMINISTRADOR SUPREMO";
  }
  if (puntos >= 50) return "🔥 Leyenda del X1";
  if (puntos >= 30) return "⚡ Pro Master";
  if (puntos >= 15) return "⭐ Jugador Destacado";
  if (puntos >= 5)  return "⚽ Competidor";
  return "🌱 Novato";
}

// Anuncios en el chat
var mensajesAnuncio = [
  "📢 ¡Bienvenido a Futsal Cat Hax! ¡Demuestra tu nivel en el x1!",
  "⚽ Escribe !ayuda para ver los comandos y tu nivel actual.",
  "🔗 Únete a nuestro Discord para más salas y comunidad.",
  "⚠️ Por favor mantén el respeto y el juego limpio en la sala."
];

var indiceMensaje = 0;
setInterval(function() {
  room.sendAnnouncement(mensajesAnuncio[indiceMensaje], null, 0xFFFF00, "bold", 1);
  indiceMensaje = (indiceMensaje + 1) % mensajesAnuncio.length;
}, 10000);

setInterval(function() {
  room.sendAnnouncement("🔗 Únete al servidor de Discord: https://discord.gg/mKupKErhy", null, 0x00BFFF, "bold", 1);
}, 7000);

// Sistema AFK
var posicionesJugadores = {};
room.onPlayerActivity = function(player) {
  posicionesJugadores[player.id] = {
    x: player.position ? player.position.x : 0,
    y: player.position ? player.position.y : 0,
    tiempoUltimoMovimiento: Date.now()
  };
};

setInterval(function() {
  var players = room.getPlayerList();
  var ahs = Date.now();
  players.forEach(function(player) {
    if (player.team !== 0 && player.name !== "X1 BOT" && player.position) {
      if (!posicionesJugadores[player.id]) {
        posicionesJugadores[player.id] = { x: player.position.x, y: player.position.y, tiempoUltimoMovimiento: ahs };
        return;
      }
      var ultimaPos = posicionesJugadores[player.id];
      var seMovio = (Math.abs(player.position.x - ultimaPos.x) > 1 || Math.abs(player.position.y - ultimaPos.y) > 1);
      if (seMovio) {
        posicionesJugadores[player.id] = { x: player.position.x, y: player.position.y, tiempoUltimoMovimiento: ahs };
      } else {
        var tiempoInactivo = ahs - ultimaPos.tiempoUltimoMovimiento;
        if (tiempoInactivo >= 4000 && !ultimaPos.advertido) {
          room.sendAnnouncement("⚠️ " + player.name + ", si no te mueves en 4 segundos seras expulsado", null, 0xFF0000, "bold", 1);
          ultimaPos.advertido = true;
        }
        if (tiempoInactivo >= 8000) {
          room.kickPlayer(player.id, "Expulsado por estar AFK (inactivo).", false);
        }
      }
    }
  });
}, 1000);

// Entradas y salidas
room.onPlayerJoin = function(player) {
  if (!nivelesJugadores[player.auth]) {
    nivelesJugadores[player.auth] = { puntos: 0 };
  }
  var nombreLimpio = player.name.replace(/\s+/g, ' ').trim();
  if (nombreLimpio === "F I X X A") {
    setTimeout(function() { room.setPlayerAdmin(player.id, true); }, 150);
    room.sendAnnouncement("¡EL ADMINISTRADOR SUPREMO A LLEGADO! 🔥", null, 0xFF0000, "bold", 2);
  } else {
    room.sendAnnouncement("👋 ¡Hola " + player.name + "! Bienvenido a la sala. Las repeticiones se suben automáticamente al Discord. Usa !ayuda o !nivel.", null, 0x00FFFF, "bold", 1);
  }
  autoOrganizarYEmpezar();
};

room.onPlayerLeave = function(player) {
  room.sendAnnouncement("🚪 " + player.name + " ha salido de la sala.", null, 0xFF8800, "normal", 0);
  delete posicionesJugadores[player.id];
  autoOrganizarYEmpezar();
};

// Goles
room.onTeamGoal = function(team) {
  var players = room.getPlayerList().filter(p => p.name !== "X1 BOT");
  var red = players.filter(p => p.team === 1);
  var blue = players.filter(p => p.team === 2);

  if (red.length === 0 || blue.length === 0) {
    var scores = room.getScores();
    room.setScores({
      red: (team === 1) ? scores.red - 1 : scores.red,
      blue: (team === 2) ? scores.blue - 1 : scores.blue,
      time: scores.time,
      scoreLimit: scores.scoreLimit,
      timeLimit: scores.timeLimit
    });
    room.sendAnnouncement("⚠️ ¡Gol anulado! No puedes marcar gol estando solo en la cancha.", null, 0xFF0000, "bold", 1);
    return;
  }

  var scores = room.getScores();
  var equipoNombre = (team === 1) ? "ROJO" : "AZUL";
  var speed = 0;
  try {
    var discVel = room.getDiscProperties(0);
    if (discVel && discVel.xspeed !== undefined) {
      var vx = discVel.xspeed;
      var vy = discVel.yspeed;
      speed = Math.round(Math.sqrt(vx * vx + vy * vy) * 10);
    }
  } catch(e) {
    speed = Math.floor(Math.random() * 40) + 60;
  }
  room.sendAnnouncement("🔥 GOLAZO DEL EQUIPO " + equipoNombre + " | 🚀 Velocidad: " + speed + " km/h (" + scores.red + " - " + scores.blue + ")", null, 0x00FF00, "bold", 2);
};

// Envío automático de repeticiones a Discord vía Webhook
room.onRoomRecording = async (recordingBuffer) => {
  console.log("⚽ Partido finalizado. Enviando repetición a Discord...");
  const blob = new Blob([recordingBuffer], { type: 'application/octet-stream' });
  const formData = new FormData();
  const nombreArchivo = `partido_${Date.now()}.hbr2`;
  formData.append('file', blob, nombreArchivo);
  formData.append('content', '📹 **¡Partidazo finalizado!** Aquí tienes la repetición para descargar:');
  try {
    await fetch(WEBHOOK_DISCORD, { method: 'POST', body: formData });
    console.log("✅ ¡Repetición enviada a Discord con éxito!");
  } catch (error) {
    console.error("❌ Error al enviar la repetición a Discord:", error);
  }
};

// Fin de partida y rotación
room.onTeamVictory = function(scores) {
  var ganadorTeam = (scores.red > scores.blue) ? 1 : 2;
  var perdedorTeam = (ganadorTeam === 1) ? 2 : 1;
  var equipoGanadorNombre = (ganadorTeam === 1) ? "ROJO" : "AZUL";

  var players = room.getPlayerList();
  players.forEach(function(p) {
    if (p.team === ganadorTeam && p.name !== "X1 BOT") {
      if (nivelesJugadores[p.auth]) nivelesJugadores[p.auth].puntos += 5;
    }
  });

  room.sendAnnouncement("🏆 ¡Felicidades equipo " + equipoGanadorNombre + "! Siguiente ronda en 3 segundos...", null, 0xFFFF00, "bold", 2);

  var perdedor = players.find(p => p.team === perdedorTeam && p.name !== "X1 BOT");
  if (perdedor) room.setPlayerTeam(perdedor.id, 0);

  var specsActuales = room.getPlayerList().filter(p => p.team === 0 && p.name !== "X1 BOT");
  if (specsActuales.length > 0) room.setPlayerTeam(specsActuales[0].id, perdedorTeam);

  room.stopGame();
  if (tiempoInicioTimer !== null) clearTimeout(tiempoInicioTimer);
  tiempoInicioTimer = setTimeout(function() {
    room.startGame();
    tiempoInicioTimer = null;
  }, 3000);
};

function autoOrganizarYEmpezar() {
  var players = room.getPlayerList().filter(p => p.name !== "X1 BOT");
  var red = players.filter(p => p.team === 1);
  var blue = players.filter(p => p.team === 2);
  var spec = players.filter(p => p.team === 0);

  while (spec.length > 0 && (red.length < 1 || blue.length < 1)) {
    var p = spec.shift();
    if (red.length < blue.length) {
      room.setPlayerTeam(p.id, 1);
      red.push(p);
    } else {
      room.setPlayerTeam(p.id, 2);
      blue.push(p);
    }
  }

  players = room.getPlayerList().filter(p => p.name !== "X1 BOT");
  red = players.filter(p => p.team === 1);
  blue = players.filter(p => p.team === 2);

  if (red.length > 0 && blue.length > 0 && room.getScores() === null) {
    if (tiempoInicioTimer !== null) clearTimeout(tiempoInicioTimer);
    room.sendAnnouncement("⏳ El juego iniciará en 3 segundos...", null, 0x00FFFF, "bold", 1);
    tiempoInicioTimer = setTimeout(function() {
      room.startGame();
      tiempoInicioTimer = null;
    }, 3000);
  }
}

// Comandos
room.onPlayerChat = function(player, message) {
  var msg = message.trim();
  if (msg === "!afk") {
    room.setPlayerTeam(player.id, 0);
    room.sendAnnouncement("💤 " + player.name + " pasó a espectadores.", null, 0xFFAA00, "normal", 0);
    autoOrganizarYEmpezar();
    return false;
  }
  if (msg === "!nivel" || msg === "!rank") {
    var datos = nivelesJugadores[player.auth] || { puntos: 0 };
    room.sendAnnouncement("📊 " + player.name + " | Rango: " + obtenerRango(datos.puntos, player.name) + " | Puntos: " + datos.puntos, player.id, 0x00FFFF, "normal", 0);
    return false;
  }
  if (msg === "!ayuda" || msg === "!help") {
    room.sendAnnouncement("📋 Comandos: !afk, !nivel, !bb, !discord, !desafio", player.id, 0xFFFFFF, "normal", 0);
    return false;
  }
  if (msg === "!discord") {
    room.sendAnnouncement("🔗 Discord: https://discord.gg/mKupKErhy", player.id, 0x00BFFF, "bold", 1);
    return false;
  }
  if (msg === "!bb") {
    room.sendAnnouncement("👋 " + player.name + " dice: ¡Nos vemos pronto!", null, 0xFF8800, "normal", 0);
    return false;
  }
  if (msg === "!desafio") {
    room.sendAnnouncement("🔥 ¡Si le ganas al host se cierra x1!", player.id, 0xFFFF00, "bold", 1);
    return false;
  }

  var datos = nivelesJugadores[player.auth] || { puntos: 0 };
  room.sendAnnouncement("[" + obtenerRango(datos.puntos, player.name) + "] " + player.name + ": " + message, null, 0xFFFFFF, "normal", 1);
  return false;
};