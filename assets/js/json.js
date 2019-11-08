const teamData = [
  {
      "name": "Monica Dempsey",
      "occupation": "Owner/Educator",
      "favPractice": ["natural manicure and pedicure","gel/acryl extension", "extreme shape", "nail art educator", "trainer/educator" ],
      "startYear": 2000,
      "email": "monicadempsey@yahoo.com",
      "photo": "images\\Monica.jpg"
    },
    {
      "name": "Sara Smith",
      "occupation": "Nail Technician",
      "favPractice": ["natural manicure", "natural pedicure","nails reconstruction"],
      "startYear": 2011,
      "photo": "images/Sara.jpg"
    },
    {
      "name": "Kate Moss",
      "occupation": "Nail Technician",
      "favPractice": ["gel/acryl", "nail art educator", "nails reconstruction", "extreme shapes"],
      "startYear": 2012,
      "photo": "images\\Kate.jpg"
    }
  ];
  
  function Experience(startYear) {
    let calculatedExperience = new Date().getFullYear() - startYear;
    if (calculatedExperience == 1) {
      return '1 year'      
        } 
    else if (calculatedExperience == 0) {
       return 'None'    
    } else {
      return `${calculatedExperience} years`
    }
  }


  function specialisation(specialisation) {
    return `
  <h4>Specialisation:</h4>
  <ul class ="specialisation-list">
  ${specialisation.map(specialisation =>`<li>${specialisation}</li>`).join('')}
  </ul>
  `
  }
  function teamTemplate(team) {
     return `
  <div class="team-members">
  <img class="team-photo" src="${team.photo}">
  <h2 class="team.name">${team.name} <span class="occupation">(${team.occupation}) </span></h2>
  <p><stron>Experience:</strong> ${Experience(team.startYear)}</p>
  ${team.favPractice? specialisation(team.favPractice) : ''}
  </div>
  `
  }
  
  document.getElementById("app").innerHTML = `
    <h1 class="app-title">Our Team Members </h1>
    ${teamData.map(teamTemplate).join('')}
    
  `

