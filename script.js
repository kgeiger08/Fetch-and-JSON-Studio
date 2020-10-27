// TODO: add code here

window.addEventListener('load', function(event) {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json){
        console.log(json);
        const container = document.getElementById("container");
        let astronauts = `Number of Astronauts: ${json.length}`;
            json.sort(function(a,b) {
                return b.hoursInSpace - a.hoursInSpace;
            });
        for (astronaut of json) {

            astronauts += `
            <div class="astronaut">
            <div class="bio">
               <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
               <ul>
                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                <li>Active: ${checkIfActive(astronaut)}</li>
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

function checkIfActive(astronaut) {
    if(astronaut.active === true) {
        return `<span style="color:green">${astronaut.active}</span>`;
    } else {
        return astronaut.active;
    }
}