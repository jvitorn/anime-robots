
const robot = {
  image: require('./robots/image'),
  text: require('./robots/text'),
  input: require("./robots/input"),
  anime: require("./robots/anime"),
  state: require('./robots/state/'),
  pdf: require('./robots/pdf')
} 
async function init() {
  try {
    await robot.input();
    await robot.anime();
    await robot.text();
    await robot.image();
    await robot.pdf();
    console.log("> [ALL ROBOTS]  === the robots' actions were executed successfully! ==");
    process.exit(0);
  } catch(e) {
    console.log("Erro no orquestrador: " + e.message);
    process.exit(1);
  }
  
}


init();