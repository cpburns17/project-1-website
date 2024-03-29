// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//     apiKey: process.env.OPEN_API_KEY,
//   });
//   const openai = new OpenAIApi(configuration);




addEventListener('DOMContentLoaded', main)

function main () {


fetch('https://madlibs-2-0-website.onrender.com/stories')
  .then(res => res.json())
  .then(data => {
    for (let i of data) {
        console.log(i)
        postedStories(i)
    }
    console.log(data);
    makeCustomStory(data);
  })
  .catch(error => {
    console.error(error);
  });



function makeCustomStory (data) {

    let questionnaire = document.getElementById('questionnaire')
    questionnaire.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let blueArrow1 = document.getElementById('blue-arrow');
        blueArrow1.style.display = 'none';
        let blueArrow2 = document.getElementById('blue-arrow-2')
        blueArrow2.style.display = 'none';

    let previousStories = document.querySelector('#previous-stories')
    let children = previousStories.querySelectorAll('*')
    children.forEach(child => {
        console.log(child);
        child.style.display = 'inline-block';
        })

    let animal1 = document.getElementById('question-0-input');
    let animal = animal1.value;

    let name1 = document.getElementById('question-name-input');
    let name = name1.value;

    let word1 = document.getElementById('question-1-input');
    let nounSing = word1.value;

    let word2 = document.getElementById('question-2-input');
    let nounPlur = word2.value;

    let word3 = document.getElementById('question-3-input');
    let verbPastTense = word3.value;

    let word4 = document.getElementById('question-4-input');
    let adjective1 = word4.value;

    let word5 = document.getElementById('question-5-input');
    let adjective2 = word5.value;   

    let word6 = document.getElementById('question-6-input');
    let adjective3 = word6.value

    let word7 = document.getElementById('question-7-input');
    let noun2 = word7.value




    let storyTemplates = [`This year, my family is hosting Thanksgiving at my sister's house. She always makes a big deal about bringing a gift or dish, so this year I decided to bring a <span class="words"> ${nounSing} </span>. Last year, my brother <span class="words"> ${name} </span> brought <span class="words"> ${nounPlur} </span>, and my sister was NOT happy.

    As the day approached, my <span class="words"> ${animal} </span> and I carefully prepared my <span class="words"> ${nounSing} </span> dish, a secret weapon to dazzle the family taste buds. The anticipation grew as I <span class="words"> ${verbPastTense} </span> on my way to my sister's home, armed with my mysterious creation. Little did they know, a culinary masterpiece awaited them.
    
    To everyone's surprise, my dish turned out to be <span class="words"> ${adjective1} </span> ! The unique flavors and textures were a <span class="words"> ${adjective2} </span> addition to the traditional spread. This Thanksgiving, my unexpected contribution became a highlight, turning the table into a feast of culinary surprises.`,
    
    `In a <span class="words"> ${adjective1} </span> village, there lived a <span class="words"> ${animal} </span> named <span class="words"> ${name} </span>. One day, <span class="words"> ${nounPlur} </span> from the neighboring farms gathered for a festival. The <span class="words"> ${nounPlur} </span>, excitedly chatting, suddenly noticed the <span class="words"> ${animal} </span> as it <span class="words"> ${verbPastTense} </span> onto the scene, surprising everyone.
    The playful <span class="words"> ${animal} </span> weaved through the crowd, its <span class="words"> ${nounSing} </span> gleaming with sparkling sheen. The once ordinary festival became a <span class="words"> ${adjective2} </span> memory, thanks to the feline's spontaneous and memorable appearance.`,
    
    `In a cozy kitchen, a <span class="words"> ${animal} </span> named <span class="words"> ${name} </span> found a worn <span class="words"> ${nounSing} </span> filled with ancient Italian <span class="words"> ${nounPlur} </span>. Inspired, he <span class="words"> ${verbPastTense} </span>through the kitchen, creating a mouthwatering plate of pasta with a velvety marinara sauce. Fellow <span class="words"> ${animal} </span>'s gathered, enchanted by the aroma. <span class="words"> ${name} </span>, pleased with the compliments, turned his <span class="words"> ${animal} </span> into a haven of Italian flavors. The kitchen became a bustling restaurant, known for its <span class="words"> ${adjective1} </span> and unique creations, proving that even <span class="words"> ${adjective2} </span> chefs can create magic in the world of flavors.`,

    `In a sunlit meadow, a <span class="words"> ${animal} </span> named <span class="words"> ${name} </span> stumbled upon a forgotten basket filled with vibrant <span class="words"> ${nounPlur} </span>. Energized, <span class="words"> ${name} </span> <span class="words"> ${verbPastTense} </span> through the meadow, weaving a stunning <span class="words"> ${nounSing} </span> with a riot of colors. Other animals gathered, captivated by the beauty. <span class="words"> ${name} </span>, encouraged by their admiration, transformed the burrow into a <span class="words"> ${adjective1} </span> sanctuary. Her meadow evolved into a popular garden, celebrated for its enchanting and <span class="words"> ${adjective2} </span> blossoms, showcasing that even <span class="words"> ${animal} </span>'s can cultivate wonders in the realm of nature.`,

    `Deep in a lush forest, a(n) <span class="words"> ${animal}</span> named <span class="words"> ${name} </span> discovered an old <span class="words"> ${nounSing}</span> containing ancient woodland secrets. Inspired, <span class="words"> ${name} </span> scurried past the <span class="words"> ${nounPlur}</span>, eager to create a <span class="words"> ${adjective1}</span> potion that could heal and invigorate. Forest creatures <span class="words"> ${verbPastTense}</span>, mesmerized by the potion's power. <span class="words"> ${name} </span>, satisfied with the gratitude, turned a tree hollow into a forest that would become a renowned sanctuary, revered for its <span class="words"> ${adjective2}</span> elixirs, proving that even little <span class="words"> ${animal}</span>'s can wield wonders in the realm of magic.`,

    `On a rocky shore, a ${animal} named <span class="words"> ${name} </span> stumbled upon a weathered chest filled with <span class="words"> ${nounPlur}</span>. Intrigued, she <span class="words"> ${verbPastTense}</span> back home to craft something magical. Coastal critters gathered, fascinated by the sparkling creation. <span class="words"> ${name} </span>, content with the admiration, transformed a <span class="words"> ${nounSing} </span>into a <span class="words"> ${adjective1}</span> statue. Her beachfront became a sought-after destination, celebrated for its exquisite and <span class="words"> ${adjective2}</span> accessories, demonstrating that even small <span class="words"> ${animal}</span's can fashion wonders in the world of adornments.`,

    `In a bustling city alley, a <span class="words"> ${animal}</span> named <span class="words"> ${name} </span> discovered a discarded box filled with vibrant <span class="words"> ${nounPlur}</span>. Inspired, he <span class="words"> ${verbPastTense}</span> across the alley, creating a <span class="words"> ${nounSing} </span> that captured the essence of <span class="words"> ${adjective1}</span> life. City <span class="words"> ${animal}</span>'s gathered, awestruck by the enormous <span class="words"> ${nounSing} </span>. <span class="words"> ${name} </span>, proud of the recognition, turned his nook into an avian art gallery. His alley became a renowned hotspot, known for its <span class="words"> ${adjective2}</span> and thought-provoking murals, proving that even little <span class="words"> ${animal}</span>'s can create wonders in the realm of creativity.`,

    `At the edge of a tranquil pond, a <span class="words"> ${animal}</span> named <span class="words"> ${name} </span> stumbled upon an ancient <span class="words"> ${nounSing}</span> adorned with mystical <span class="words"> ${nounPlur}</span>. Intrigued, <span class="words"> ${name} </span> <span class="words"> ${verbPastTense}</span> around the pond, arranging the <span class="words"> ${nounPlur}</span> into a pattern that emitted a calming energy. Amphibian friends gathered, enchanted by the serene atmosphere. <span class="words"> ${name} </span>, pleased with the tranquility, turned a <span class="words"> ${adjective1}</span> nook into a zen retreat. <span class="words"> ${name} </span>'s pond became a <span class="words"> ${adjective2}</span> oasis, celebrated for its harmonious ambiance, illustrating that even <span class="words"> ${animal}</span>'s can bring wonders to the world of serenity.`
    ]

    let randomIndex = Math.floor(Math.random() * storyTemplates.length);
    let selectedStory = storyTemplates[randomIndex];

    let storyText = document.getElementById('custom-story')
    storyText.innerHTML = selectedStory;

// 
    let animalName = document.querySelector('#animal')

        animalName.addEventListener('mouseover', (e) => {
        e.onmouseover = title;
    })

    let username = document.querySelector('#name')

    username.addEventListener('mouseover', (e) => {
    e.onmouseover = title;
    })

    let singularNoun = document.querySelector('#singular-noun')

        singularNoun.addEventListener('mouseover', (e) => {
        e.onmouseover = title;
    })
    
    let pluralNoun = document.querySelector('#plural-noun')

        pluralNoun.addEventListener('mouseover', (e) => {
        e.onmouseover = title; 
    })

    let pastTenseVerb = document.querySelector('#past-tense-verb')

        pastTenseVerb.addEventListener('mouseover', (e) => {
        e.onmouseover = title;
    });

    let adjectiveFirst = document.querySelector('#adjective-1')

        adjectiveFirst.addEventListener('mouseover', (e) => {
        e.onmouseover = title;
    })

    let adjectiveSecond = document.querySelector('#adjective-2')

        adjectiveSecond.addEventListener('mouseover', (e) => {
        e.onmouseover = title; 
    })    

//
    fetch ('https://madlibs-2-0-website.onrender.com/stories', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            story: storyText.textContent,
            likes: 0,
            dislikes: 0,
        })
    })
    .then(r => r.json())
    .then(data => {
        postedStories(data)
    })
    console.log(storyText)
    questionnaire.reset()
    })

    let redButton = document.querySelector('#red-button');
    let catImage = document.querySelector('#cat-image');
  
    redButton.addEventListener('click', async () => {
      try {
        const catUrl = await getRandomCat();
        catImage.src = catUrl;
      } catch (error) {
        console.error('Error getting random cat:', error);
      }
      catImage.style.display = 'inline-block'
    });
  
    async function getRandomCat() {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        return data[0].url;
      } catch (error) {
        throw error;
      }
    }
}
//
function postedStories (data) {

    let previousPosts = document.querySelector('#previous-stories')

    let previousStory = document.createElement('p')
    previousStory.textContent = data.story;

    let likeButton = document.createElement('button')
    likeButton.textContent = data.likes + " likes"

    let dislikeButton = document.createElement('button')
    dislikeButton.textContent = data.dislikes + " dislikes";

    previousPosts.append(previousStory, likeButton, dislikeButton)


    let countL = data.likes
    likeButton.addEventListener('click', (e) => {
        countL++;
        likeButton.textContent = countL + " likes";

        fetch (`https://madlibs-2-0-website.onrender.com/stories/${data.id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            likes: countL,
        })
    })
    })
    

    let countD = data.dislikes
    dislikeButton.addEventListener('click', (e) => {
        countD++;
        dislikeButton.textContent = countD + " dislikes";

        fetch (`https://madlibs-2-0-website.onrender.com/stories/${data.id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            dislikes: countD,
        })
    })
    })

}

}