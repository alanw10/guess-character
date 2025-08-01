
const getChoices = (characters) => {
  
  function shuffle(array) {
  let currentIndex = array.length;


  while (currentIndex != 0) {


    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;


    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array
}
  const chars = (shuffle(characters)).slice(0, 4);


  return chars
}

export default getChoices

