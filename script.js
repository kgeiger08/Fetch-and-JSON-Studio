// TODO: add code here

window.addEventListener('load', function(event) {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json){
        console.log(json);
        const container = document.getElementById("container");
        let astronauts = `Number of Astronauts: ${json.length}`
        for (astronaut of json) {
            // if (astronaut.active === true) {
            //     astronaut.active.color = "green";
            // }
            astronauts += `
            <div class="astronaut">
            <div class="bio">
               <h3>${astronauts.firstName}${astronauts.lastName}</h3>
               <ul>
                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                <li>Active: ${astronaut.active}</li>
                <li>Skills: ${astronaut.skills.join(", ")} </li>
               </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
         </div>
         `
         }
         container.innerHTML = astronauts;
        })
    });
});