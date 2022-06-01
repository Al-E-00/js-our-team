/* 
    For "How we are" section of our business website, we have to 
    develop "our team" section.
    We must establish an array of objects who represents the team members.
    Every member has it's own personal information necessary to print
    out the relative card: Name, rule, photo.
*/
/* 
MILESTONE 1: 
print inside the console the members list, writing separetely every components details
*/
/* 
MILESTONE 2: 
print datas inside a container into html page dynamically, 
creating for each member of the team a html element that contains their data.
*/
/* 
BONUS:
Stylize section creating each member of the team card
*/
/*
TIPS:
1. We think in steps
2. Write logic in English, then translate into code
3. Remember console.log() and console.table()
4. If a piece of code works, let's ask ourself if we can divide it in 
smaller funcitons
5. What contain the fied that represent objects picture?
6. How we can tranform it into a visible image inside the html?
*/

/* 
MILESTONE 1: 
print inside the console the members list, writing separetely every components details
*/
const membersList = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        rule: 'Founder & CEO',
        imgFile: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela',
        surname: 'Caroll',
        rule: 'Chief Editor',
        imgFile: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter',
        surname: 'Gordon',
        rule: 'Office Manage',
        imgFile: 'img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela',
        surname: 'Lopez',
        rule: 'Social Media Manager',
        imgFile: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott',
        surname: 'Estrada',
        rule: 'Developer',
        imgFile: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        rule: 'Graphic Designer',
        imgFile: 'img/barbara-ramos-graphic-designer.jpg'
    }
]
console.log(membersList[0].imgFile)

console.table(membersList);

/* 
MILESTONE 2 && 3: 
print datas inside a container into html page dynamically, 
creating for each member of the team a html element that contains their data.
------------
Stylize section creating each member of the team card
*/

function createCards (user, indexReference) {
    // team-card div created

    const teamCardSection = document.createElement(`div`);
    teamCardSection.classList.add("team-card");
    document.querySelector(".team-container").append(teamCardSection);

    //creating card-image section
    
    const cardImageSection = document.createElement(`div`);
    cardImageSection.classList.add('card-image');
    teamCardSection.append(cardImageSection);

    // creating the link to the element img

    const imgElement = document.createElement('img');
    imgElement.src = user[indexReference].imgFile;
    cardImageSection.appendChild(imgElement);

    // creating card text section

    const cardText = document.createElement('div');
    cardText.classList.add('card-text');
    teamCardSection.appendChild(cardText);

    //creating elements inside card text section

    const nameSurname = document.createElement(`h3`);
    const rule = document.createElement(`p`);

    nameSurname.innerHTML = `${user[indexReference].name}, ${user[indexReference].surname}`;
    rule.innerHTML = `${user[indexReference].rule}` 

    cardText.appendChild(nameSurname);
    cardText.appendChild(rule);

}

for  (let i = 0; i < 6; i++) {
    createCards(membersList, i);
}