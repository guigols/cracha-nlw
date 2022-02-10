const LinksSocialMedia = {
  github: 'guigols',
  youtube: 'guilherme.simmg',
  facebook: 'guilherme.soares.142240/',
  instagram: 'guilherme_guigols',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    // alert(li.children[0].href)
  }
}
changeSocialMediaLinks()

function getGitHubProfileinfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      userImage.src = data.avatar_url
    })
}
getGitHubProfileinfos()
