const app = function () {
  const url =  "http://hp-api.herokuapp.com/api/characters";

  const select = document.querySelector('#potter-select');

  makeRequest(url, requestComplete);


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
  createChart(characters);

};

const createChart = function (characters) {

  const genderArray = getGenders(characters);
  const genderCountArray = genderCount(genderArray);
  const categories = ['male', 'female'];
    new ColumnChart("Characters by Gender", "Gender", genderCountArray, categories);
  console.log(genderCountArray);

}

const genderCount = function (genderArray) {
  let maleCount = 0;
  let femaleCount = 0;
  const genderCountArray = [];
  genderArray.forEach(function(gender){
            if (gender === "male") {
              maleCount += 1;
            } else if (gender === "female") {
              femaleCount += 1;
            }
            // genderCountArray.push(maleCount);
            // genderCountArray.push(femaleCount);
            })
    genderCountArray.push(maleCount);
  genderCountArray.push(femaleCount);
    return genderCountArray;
}

const getGenders = function (characters) {
  const genderArray = [];
  characters.forEach(function (character) {
      genderArray.push(character.gender);
    })
    return genderArray;
}

const handleSelectChanged = function(characters, index){
  setPtags(characters, index);
}

const setPtags = function(characters, index){
  const pTag1 = document.querySelector('#name-select-result');
  pTag1.innerText = "Hello, name is " + characters[index].name;
  const pTag2 = document.querySelector('#species-select-result');
  pTag2.innerText = "I am a " + characters[index].gender + " " + characters[index].species;
  const pTag3 = document.querySelector('#house-select-result');
  pTag3.innerText = "and I belong to the " + characters[index].house + " house at Hogwarts";
  const pTag4 = document.querySelector('#year-of-birth-select-result');
  pTag4.innerText = "I was born in the year of " + characters[index].yearOfBirth + " and I am of " + characters[index].ancestry + "  ancestry."
  // const pTag4 = doucment.querySelector('#image-select-result');
  // pTag4.innerText = characters[index].character.image;
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
  })


  //   console.log(genders);
  //   let dataArray = genderList(genders);
  //     // title_text, name, data, categories
  //   new ColumnChart('Character by gender', 'gender',);
  //
  //
  // const genderList = function(genders){
  //   newArray = []
  //   genders.forEach(function(gender){
  //     newArray.push(character.genders);
  //   })
  //   console.log(newArray);
  //
  //   let maleCount = 0;
  //   let femaleCount = 0;
  //
  //
  //
  //   newArray.forEach(function(gender){
  //     if (gender === "male") {
  //       maleCount += 1;
  //     } else if (gender === "female") {
  //       femaleCount += 1;
  //     }
  //     dataArray = [];
  //     dataArray.push(maleCount);
  //     dataArray.push(femaleCount);
  //     })
  //     // console.log(dataArray);
  //     let gender = ["male", "female"];
  //
  //     new ColumnChart("Characters by Gender", "Gender", dataArray, gender);
  // };
};



document.addEventListener('DOMContentLoaded', app);
