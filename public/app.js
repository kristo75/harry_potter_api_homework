const app = function () {
  const url =  "http://hp-api.herokuapp.com/api/characters";

  const select = document.querySelector('#potter-select');

  makeRequest(url, requestComplete);

  document.addEventListener('load', function() {
    let dataArray = genderList(genders);
    new PieChart();
});
}

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const characters = JSON.parse(jsonString);
  populateList(characters);
  populateDropdown(characters);
};

const handleSelectChanged = function(characters, index){
  setPtags(characters, index);
}

const setPtags = function(characters, index){
  const pTag1 = document.querySelector('#name-select-result');
  pTag1.innerText = "Hello, name is " + characters[index].name;
  const pTag2 = document.querySelector('#species-select-result');
  pTag2.innerText = "I am a " + characters[index].gender + " " + characters[index].species;
  const pTag3 = document.querySelector('#house-select-result');
  pTag3.innerText = "and I belong to the " + characters[index].house + " house";
  // const pTag4 = doucment.querySelector('#image-select-result');
  // pTag4.innerText = characters[index].character.image;

  // const pTag4 = document.querySelector('#ingredients-select-result');
  // pTag4.innerText = name[index].ingredients.malt.name;
};

const populateDropdown = function(characters){
  const select = document.getElementById("name-select");
  characters.forEach(function(character, index){
    const option = document.createElement('option');
    option.innerText = character.name;
    option.value = index;
    select.appendChild(option);
  });
  select.addEventListener("change", function(){
    handleSelectChanged(characters, this.value)
  });
};

// CREATE LIST ITEM FROM LAB SOLUTION

const genderList = function(genders){
  newArray = []
  genders.forEach(function(gender){
    newArray.push(gender.characters);
  })
  console.log(newArray);

  let maleCount = 0;
  let femaleCount = 0;


  newArray.forEach(function(area){
    if (gender === "male") {
      africaCount += 1;
    } else if (area === "female") {
      asiaCount += 1;

    } else if (area === "") {
      noneCount += 1;
    }
    dataArray = [];
    dataArray.push(maleCount);
    dataArray.push(femaleCount);
    dataArray.push(noneCount);
    })
    console.log(dataArray);
    let gender = ["male", "female", "None"];

    new ColumnChart("Characters by Gender", "Gender", dataArray, gender);
};

  const populateList = function(characters){
  const dl = document.getElementById("character-list");
  characters.forEach(function(character){
    const dt = document.createElement('dl');
    dt.innerText = character.name;
    const image = document.createElement('img')
    image.src = character.image;
    image.width = '200';
    dl.appendChild(dt);
    dl.appendChild(image);
  });
};



document.addEventListener('DOMContentLoaded', app);
