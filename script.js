        const apiKey = "2f0aed6d47ec0d691bca27a77f7dde5a";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric&q=`;
        
        const SearchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
        let SearchBox = document.querySelector(".search input");
        
        async function checkweather(){
           
            const response = await fetch(apiUrl + SearchBox.value );

            if(response.ok){
                document.querySelector(".weather").style.display = "block";
                let data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temperature").innerHTML = parseInt(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".Wind").innerHTML = data.wind.speed + " kmh";

            switch (data.weather[0].main) {
                case "Clouds":
                    weatherIcon.src = "images/clouds.png";
                    break;
                case "Drizzle":
                    weatherIcon.src = "images/drizzle.png";
                    
                    break;
                case "Humidity":
                    weatherIcon.src = "images/humidity.png";
                    break;
                case "Wind":
                    weatherIcon.src = "images/wind.png";
                    break;
                case "Show":
                    weatherIcon.src = "images/show.png";
                case "Rain":
                    weatherIcon.src = "images/rain.png";
                    break;
                case "Mist":
                    weatherIcon.src = "images/mist.png";
                    break;
              
                default:
                    weatherIcon.src = "images/clear.png";
                    break;
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }
            else{
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }

            
        }

        SearchBtn.addEventListener("click", () => {
            checkweather();
        });
        SearchBox.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                checkweather();
            }
        });

