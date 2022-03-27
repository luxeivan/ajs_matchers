export default function appObject(arrGamer) {
  return arrGamer.sort((a, b) => b.health - a.health);
}
