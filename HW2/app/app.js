function addEventListener(){
    $("#submit").click(function(e){
        e.preventDefault();
        let searchInput = $("#cityZipInput").val();

        weatherSearch(searchInput);
    })

    

}


function Toggle() {
    var x = document.getElementById('dropMenu');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function weatherSearch(userInput){

    console.log(userInput)
    $.get(`http://api.weatherapi.com/v1/current.json?key=b1708742da174db58d9204057201410&q=${userInput}&aqi=no`, function(data)
    {
        console.log(data.current)
        //$("weatherTab").append()

        document.getElementById('weatherTab').innerHTML = `

        <div class="navHolder">
                <nav>
                    <button onclick="Toggle()" id="dropDown">
                        <img src="/img/hamburger.png" alt="">
                    </button>

                    
                </nav>
        
                <button class="loginHolder">

                </button>
        
            </div>

            <div id="dropMenu">

                <Div class="userSearch">
                    <input id="cityZipInput" type="text" value=" Insert City or Zip">
                    <input id="submit" type="submit" value="search">
        
                </Div>

                <div class="navLinks">
                    <a href="#">About</a>
                    <a href="#">Products</a>
                    <a href="#">Contacts</a>

                </div>

                            
            </div>

        <div class="location">
            <p>${data.location.name}, ${data.location.country}</p>
        </div>

        <div class="weatherInfo">

    
            <div class="precip">
                <p>Total Precipitation for today is ${data.current.precip_in}</p><br>
                <p>${data.location.localtime}</p>
            </div>

            <div class="weatherSphereContain">
                <div class="weatherSphere">
                    <img src="${data.current.condition.icon}" alt="">
                    <div class="temp">
                        ${data.current.temp_f}°F
                    </div>
                    <p>Feels Like: ${data.current.feelslike_f}</p>

                </div>

            </div>

            <div class="miscContainer">
                <div class="windContain">
                    <p>wind Speed:</p><br>
                    <p>${data.current.wind_mph} mph</p>

                </div>

                <div class="humidContain">
                    <p>Current Humidity:</p><br>
                    <p>${data.current.humidity}</p>
                </div>


            </div>
        </div>
    
    `

    })
}


$(document).ready(function(){
    addEventListener();
})