const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
console.log("FUCK YOU  AHUJA")
const form = document.getElementById("myform")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    getInfo()

})
const getInfo = async () => {

    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerHTML = `Plz write the code`
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=cef33ec0b0fe84608b44d5db2b5d5972`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            const arrData = [data];
            city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerHTML = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    `<i class = 'fas  fa-sun' style ='color : #eccc68;'> </i>`;
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    `<i class = 'fas fa-cloud' style = 'color : #f1f2f6;'> </i>`;
            } else if (tempMood == "Rain") {
                temp_status.innerHTML
                    `<i class = 'fas fa-rain' style = 'color: #a4b0be;'></i>`;
            } else {
                temp_status.innerHTML =
                    `<i class = 'fas fa-sun' style = 'color : #f1f2f6;'></i>`;
            }

        } catch (err) {
            console.log(err)
            city_name.innerHTML = `pls enter the city name properly`;
        }
    }

    submitBtn.addEventListener('click', getInfo);

}