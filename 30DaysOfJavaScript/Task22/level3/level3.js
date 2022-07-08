asabenehChallenges2020;

contentArea = document.querySelector('.wrapper');
title = document.createElement('h2');
titleText = document.createTextNode(`${asabenehChallenges2020['challengeTitle']} in `);
title.appendChild(titleText);
creationYear = document.createElement('h1');
creationYearText = document.createTextNode(`${asabenehChallenges2020['challengeYear']}`);
creationYear.appendChild(creationYearText);
creationYear.style.display = 'inline'
creationYear.style.fontSize = '60px'
creationYear.setAttribute('id','rgbYear');
title.appendChild(creationYear);
title.style.textAlign = 'center'
contentArea.appendChild(title);

subtitle = document.createElement('h3');
subtitleText = document.createTextNode(`${asabenehChallenges2020['challengeSubtitle']}`);
subtitle.appendChild(subtitleText);
subtitle.style.textDecoration = 'underline';
subtitle.style.textAlign = 'center'
contentArea.appendChild(subtitle);

monthKey = ['Janurary','Feburary','March','April','May','June','July','August','September','October','November','December']
rgbDate = document.createElement('div');
rgbDate.setAttribute('id','rgbDate');
rgbDateText = document.createTextNode('Loading');
rgbDate.appendChild(rgbDateText);
rgbDate.style.padding = '10px'
rgbDate.style.paddingLeft = '30px'
rgbDate.style.paddingRight = '30px'
rgbDate.style.display = 'inline-block'
rgbDate.style.position = 'relative'
rgbDate.style.left = '50%';
rgbDate.style.marginRight = '-50%'
rgbDate.style.transform = 'translate(-50%, 0%)'
contentArea.appendChild(rgbDate);


function rgbColor(){
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}
function changeYearColor(){
    document.getElementById('rgbYear').style.color = rgbColor();
}
function changeDateColor(){
    dateObject = document.getElementById('rgbDate');
    dateObject.style.backgroundColor = rgbColor();
    today = new Date()
    dateObject.innerText = `${monthKey[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
}

setInterval(changeYearColor,1000)
setInterval(changeDateColor,1000)

topicList = document.createElement('div');
topicList.setAttribute('id','listWrapper');
topicList.style.marginTop = '20px'
topicList.style.display = 'relative';
topicList.style.width = '650px'
topicList.style.marginLeft = '50%';
topicList.style.marginRight = '-50%'
topicList.style.transform = 'translate(-50%, 0%)'
topicList.style.flexDirection = 'column';
topicList.style.justifyContent = 'center';
contentArea.appendChild(topicList);
for(subject of asabenehChallenges2020['challenges']){
    listItem = document.createElement('div');
    listItem.style.margin = '2px'
    listItem.style.display = 'flex'
    listItem.style.padding = '20px'
    function backgroundColorSetter(statusLabel){
        if(statusLabel == 'Done'){
            return '#00cc66'
        }else if(statusLabel == 'Ongoing'){
            return 'rgb(255, 220, 60)'
        }else{
            return 'rgb(255, 100, 100)'
        }
    }
    listItem.style.backgroundColor = backgroundColorSetter(subject['status'])

    listLinkTitle = document.createElement('a')
    listLinkTitle.setAttribute('href',`${subject['githubUrl']}`);
    listLinkTitle.innerText = subject['name']
    listLinkTitle.style.display = 'flex'
    listLinkTitle.style.flex = '1';
    listLinkTitle.style.justifyContent = 'flex-start';
    listLinkTitle.style.alignItems = 'center';
    listItem.appendChild(listLinkTitle);

    listItemTopics = document.createElement('details')
    listItemTopics.style.display = 'flex'
    listItemTopics.style.flex = '1';
    listItemTopics.style.justifyContent = 'center';
    listItemTopics.style.alignItems = 'center';
    listItemTopicsHeader = document.createElement('summary')
    listItemTopicsHeader.innerText = subject['name'].substr(11);
    listItemTopics.appendChild(listItemTopicsHeader);
    for(topic of subject['topics']){
        listItemTopicsListItem = document.createElement('p')
        listItemTopicsListItem.innerText = topic
        listItemTopicsListItem.style.margin = '0px'
        listItemTopics.appendChild(listItemTopicsListItem)
    }
    listItem.appendChild(listItemTopics);

    listStatus = document.createElement('div')
    listStatus.innerText = subject['status']
    listStatus.style.display = 'flex'
    listStatus.style.justifyContent = 'flex-end';
    listStatus.style.alignItems = 'center';
    listItem.appendChild(listStatus);

    document.getElementById('listWrapper').appendChild(listItem);
}






authorSection = document.createElement('div')
authorName = document.createElement('h2')
authorName.innerText = asabenehChallenges2020['author']['firstName'] + ' ' + asabenehChallenges2020['author']['lastName'] 
authorName.style.textAlign = 'center'
authorSection.appendChild(authorName);

authorLinksSection = document.createElement('div')
authorLinksSection.style.textAlign = 'center'
for(link of asabenehChallenges2020['author']['socialLinks']){
    socialLink = document.createElement('a')
    socialLink.setAttribute('href',link['url']);
    socialLink.innerHTML = link['fontawesomeIcon']
    socialLink.innerText = 'Missing' //havent set up font awesome
    authorLinksSection.appendChild(socialLink);
}
authorSection.appendChild(authorLinksSection);

authorBioSection = document.createElement('div')
authorBioSection.innerText = asabenehChallenges2020['author']['bio']
authorBioSection.style.width = '650px';
authorBioSection.style.textAlign = 'center';
authorBioSection.style.marginTop = '50px';
authorBioSection.style.marginLeft = '50%';
authorBioSection.style.marginRight = '-50%'
authorBioSection.style.transform = 'translate(-50%, 0%)'
authorSection.appendChild(authorBioSection);


authorLabelsSection = document.createElement('div')
authorLabelsSection.style.width = '650px';
authorLabelsSection.style.marginTop = '50px';
authorLabelsSection.style.marginLeft = '50%';
authorLabelsSection.style.marginRight = '-50%'
authorLabelsSection.style.transform = 'translate(-50%, 0%)'

authorTitleLabel = document.createElement('div')
authorTitleLabel.style.display = 'inline-block'
authorTitleLabel.style.paddingLeft = '20px'
authorTitleLabel.style.verticalAlign = 'top'
authorTitleLabelHeader = document.createElement('h3')
authorTitleLabelHeader.style.marginBottom = '0px'
authorTitleLabelHeader.innerText = 'Titles'
authorTitleLabel.appendChild(authorTitleLabelHeader)
for(title of asabenehChallenges2020['author']['titles']){
    authorTitleLabelItem = document.createElement('li')
    authorTitleLabelItem.style.listStyleType = 'none'
    authorTitleLabelItem.innerText = title[0] + ' ' +title[1]
    authorTitleLabel.appendChild(authorTitleLabelItem)
}
authorLabelsSection.appendChild(authorTitleLabel)

authorSkillsLabel = document.createElement('div')
authorSkillsLabel.style.display = 'inline-block'
authorSkillsLabel.style.paddingLeft = '20px'
authorSkillsLabel.style.verticalAlign = 'top'
authorSkillsLabelHeader = document.createElement('h3')
authorSkillsLabelHeader.style.marginBottom = '0px'
authorSkillsLabelHeader.innerText = 'Skills'
authorSkillsLabel.appendChild(authorSkillsLabelHeader)
for(skills of asabenehChallenges2020['author']['skills']){
    authorSkillsLabelItem = document.createElement('li')
    authorSkillsLabelItem.style.listStyleType = 'none'
    authorSkillsLabelItem.innerText = '✅ ' + skills
    authorSkillsLabel.appendChild(authorSkillsLabelItem)
}
authorLabelsSection.appendChild(authorSkillsLabel)

authorQualificationsLabel = document.createElement('div')
authorQualificationsLabel.style.display = 'inline-block'
authorQualificationsLabel.style.paddingLeft = '20px'
authorQualificationsLabel.style.verticalAlign = 'top'
authorQualificationsLabelHeader = document.createElement('h3')
authorQualificationsLabelHeader.style.marginBottom = '0px'
authorQualificationsLabelHeader.innerText = 'Qualifications'
authorQualificationsLabel.appendChild(authorQualificationsLabelHeader)
for(qualifications of asabenehChallenges2020['author']['qualifications']){
    authorQualificationsLabelItem = document.createElement('li')
    authorQualificationsLabelItem.style.listStyleType = 'none'
    authorQualificationsLabelItem.innerText = '👨🏾‍🎓 ' +qualifications
    authorQualificationsLabel.appendChild(authorQualificationsLabelItem)
}
authorLabelsSection.appendChild(authorQualificationsLabel)

keywords = document.createElement('div')
keywords.style.marginLeft = '30px'
keywordsTitle = document.createElement('h3')
keywordsTitle.innerText = 'Keywords'
keywords.appendChild(keywordsTitle)

for(keylabel of asabenehChallenges2020['keywords']){
    let newKeyLabel = document.createElement('p')
    newKeyLabel.style.display = 'inline-block'
    newKeyLabel.style.margin = '2px'
    newKeyLabel.style.padding = '6px'
    newKeyLabel.style.borderRadius = '25px'
    newKeyLabel.innerText = '# ' +keylabel
    newKeyLabel.style.backgroundColor = rgbColor()
    keywords.appendChild(newKeyLabel)
    console.log(newKeyLabel.innerText)
}

authorLabelsSection.appendChild(keywords)

authorSection.appendChild(authorLabelsSection);

contentArea.appendChild(authorSection);
