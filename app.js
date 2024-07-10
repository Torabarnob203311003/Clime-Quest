//  Not Recomended just using for demo projects 
const API_Key = `764c14ee108807d8b5a5f3441d9c3a84`;

const loadTemp = city =>{

   const  url = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric `; 

   fetch(url)
   .then(response => response.json())
   .then(data => displayTemperature(data))
}

 const displayTemperature = data =>{
 
    const temperature = document.getElementById('tempu');
    temperature.innerText = data.main.temp;
     console.log(data.weather[0].main);
   // setInnerTextByID('tempu',data.main.tempu);
   setInnerTextByID('conditions', data.weather[0].main);

 }

  const setInnerTextByID = (id,text) =>{



    const temperature = document.getElementById(id);
    temperature.innerText = text;
  }

 document.getElementById('btn-search').addEventListener('click',function(){

  const searchFeild = document.getElementById('search-feild');
  const city = searchFeild.value ;
  //set city name

   document.getElementById('city').innerText= city;

  loadTemp(city);
//   const cityName = document.getElementById('search-cityname');
//    cityName = searchFeild.innerText;


 })
loadTemp('dhaka');