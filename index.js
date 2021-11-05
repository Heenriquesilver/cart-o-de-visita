const linksSocialMedia = {
    github: 'heenriquesilver',
    youtube: 'UCMlzvNhw8gwk2TzrF_vBaEg',
    facebook: 'henriquemendees',
    instagram: 'heenriquesilver',
    twitter: 'Heenriquesilver'
}

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')
    
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}
changeSocialMediaLinks()

function getGitHubMediaLinks(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
   
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('userName').innerHTML = data.name;
        document.getElementById('bio').innerHTML = data.bio;
    })
   

} 

getGitHubMediaLinks()