export default function appObject(arrGamer) {
  return arrGamer.sort((a, b) => {
    return b.health - a.health;
  });
}
