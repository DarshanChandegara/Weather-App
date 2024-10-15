const submit = document.getElementById('submitbtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp_real = document.getElementById('temp_real');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getinfo = async (event) => {
    event.preventDefault();
    // alert('Hiii');.
    let cityval = cityname.value;

    if (cityval === "") {   
        city_name.innerText = `please write the name before search`;
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=c889154c056b883d65f9d531595df5d5`;
            const response = await fetch(url);
            const data = await response.json();
            const arr = [data];
            // console.log(arr);
            city_name.innerText = `${arr[0].name} , ${arr[0].sys.country}`;
            temp_real.innerText = arr[0].main.temp;
            temp_status.innerText = arr[0].weather[0].main;
            
            const tmpstatus = arr[0].weather[0].main;
            
            if (tmpstatus == "clear") {
                temp_status.innerHTML = `<i class="fas fa-sun" style="color : #eccc68"></i>`;
            }
            else if (tmpstatus == "Clouds") {
                temp_status.innerHTML = `<i class="fas fa-cloud" style="color : #f1f2f6"></i>`;
            }
            else if (tmpstatus == "Rain") {
                temp_status.innerHTML = `<i class="fas fa-cloud-rain" style="color : #a4b0be"></i>`;
            }
            else {
                temp_status.innerHTML = `<i class="fas fa-sun" style="color : #eccc68"></i>`;
            }
            datahide.classList.remove('data_hide');
        }
        catch {
            city_name.innerText = `please correct city name`;
            datahide.classList.add('data_hide');
        }
    }
}
submit.addEventListener('click', getinfo);