const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function(){
  const inputValue = document.getElementById("input-value").value;
  const apiKey = 'b65289605aabf6115b6877dfed170668';

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const cityName = data.name;
    const tem = data.main.temp;
    const temp = tem - 273.15;
    const description = data.weather[0].description;
    //console.log(data);

    document.getElementById("input-value").value = "";


    document.getElementById("city").innerHTML = cityName;
    document.getElementById("temp").innerHTML = temp.toFixed(2);
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById("des").innerHTML = description;
  })
  
  .catch(error => {
    alert("Please type your right city name!");
    document.getElementById("input-value").value = "";
  });
})
