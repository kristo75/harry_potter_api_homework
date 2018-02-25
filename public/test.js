onst setPtags = function(characters, index){


  const pTag1 = document.querySelector('#name-select-result');
  pTag1.innerText = "Hello, name is " + characters[index].name", I am a " + characters[index].gender + characters[index].species;

  // const pTag2 = document.querySelector('#species-select-result');
  // pTag2.innerText =
  // const pTag3 = document.querySelector('#gender-select-result');
  // pTag3.innerText = characters[index].gender;
  const pTag4 = document.querySelector('#house-select-result');
  pTag4.innerText = "I belong to the " + characters[index].house;


  const setPtags = function(characters, index){
    const pTag1 = document.querySelector('#name-select-result');
    pTag1.innerText = "Hello, name is: " + characters[index].name;

    const pTag2 = document.querySelector('#species-select-result');
    pTag2.innerText = "I am a: " + characters[index].gender + characters[index].species;

    const pTag3 = document.querySelector('#gender-select-result');
    pTag3.innerText = characters[index].gender;

    const pTag4 = document.querySelector('#house-select-result');
    pTag4.innerText = "I belong to the " + characters[index].house;
