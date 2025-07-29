const superheros = [
  {
    name: "Spider-Man",
    image: "https://wallpapers.com/images/featured/spiderman-background-oycfyb1ksermw921.jpg",
    tagline: "With great power comes great responsibility",
    description: "Bitten by a radioactive spider, Peter Parker becomes Spider-Man, protecting New York City with his agility and spider-sense.",
  },
  {
    name: "Iron Man",
    image: "https://wallpapers.com/images/featured/iron-man-superhero-ponky3hlfivddo2m.jpg",
    tagline: "I am Iron Man",
    description: "Genius billionaire Tony Stark builds a high-tech suit to become Iron Man, defending the world with his intellect and technology.",
  },
  {
    name: "Batman",
    image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2621/H9v5o8vP6RKkQtR77LIGrGDE.png",
    tagline: "I am the night",
    description: "Bruce Wayne, a wealthy philanthropist, becomes Batman to fight crime in Gotham using his intellect, gadgets, and martial arts.",
  },
  {
    name: "Wonder Woman",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWjLc9zj8ceX1SquhZhDJOQMHeIYXgLPGSQ&s",
    tagline: "Truth, Justice, and Equality",
    description: "An Amazon warrior princess, Diana uses her divine powers and combat skills to fight for peace and justice.",
  },
  {
    name: "Superman",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27vHitrcJti3j9eB3cJRtSNoiFfJGWn2gOg&s",
    tagline: "Faster than a speeding bullet",
    description: "Kal-El from Krypton, raised as Clark Kent, becomes Superman, using his powers to protect Earth and uphold truth and justice.",
  },
  {
    name: "Captain America",
    image: "https://wallpapers.com/images/featured/marvel-captain-america-pictures-w9n6ryri2sljuwzl.jpg",
    tagline: "I'm just a kid from Brooklyn",
    description: "Steve Rogers becomes a super-soldier during WWII, fighting for freedom and leading the Avengers as Captain America.",
  },
  {
    name: "Thor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTkV5Q5gJPwjzTlROVHS8MXHZ79cWCl4FG7A&s",
    tagline: "God of Thunder",
    description: "The Norse god Thor wields the magical hammer Mjölnir, battling threats across realms as a protector of Earth and Asgard.",
  },
  {
    name: "Black Widow",
    image: "https://wallpapers.com/images/featured/black-widow-pictures-6qpbflv20mdmwayu.jpg",
    tagline: "Nothing lasts forever",
    description: "Natasha Romanoff, a master spy and assassin, fights for justice with the Avengers after escaping her dark past.",
  },
  {
    name: "Hulk",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNuNLZJ6jQJHEDgDR3_7RbZvuLvSqranhBVA&s",
    tagline: "Don't make me angry",
    description: "Dr. Bruce Banner transforms into the powerful Hulk when angry, using his strength to fight alongside the Avengers.",
  },
  {
    name: "Black Panther",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuToaTTBVlCFnxHJ8m9l6C3xJQRm2hYCoqkQ&s",
    tagline: "Wakanda Forever",
    description: "T'Challa, king of Wakanda, uses his enhanced strength and advanced technology to protect his people as the Black Panther.",
  },
];
      
     
      const container = document.querySelector(".container");
      const input = document.getElementById("input");
      const searchBtn = document.getElementById("searchBtn");
      const section = document.createElement("div");
      section.className = "hero-section";

      searchBtn.addEventListener("click", function () {   
          const value = input.value.toLowerCase().trim();
        const hero = superheros.find(
          (heros) => heros.name.toLowerCase() === value
        );
        if (hero) {
          section.innerHTML = `
        <h3>${hero.name}</h3>
        <div class="img"><img src="${hero.image}"></div>
        <p class="tagline">${hero.tagline}</p>
        <p class="description">${hero.description}</p>
      `;
        } else {
          section.innerHTML = ` Superhero not found </p>`;
        }

        container.appendChild(section);
      });
