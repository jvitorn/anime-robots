
const robot = {
  image: require('./robots/image'),
  text: require('./robots/text'),
  input: require("./robots/input"),
  anime: require("./robots/anime"),
  state: require('./robots/state/')
} 
async function init() {
  try {
    await robot.input();
    await robot.anime();
    await robot.text();
    await robot.image();
    const conteudo = await robot.state.load();
    console.log(conteudo);
    process.exit(0);
  } catch(e) {
    console.log("Erro no orquestrador: " + e.message);
    process.exit(0);
  }
  
}


init();