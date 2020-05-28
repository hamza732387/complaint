if(localStorage.getItem('token') == undefined || localStorage.getItem('token') == null){
    window.location.href = "../login/login.html";
}

let newNews= document.getElementById('newNews')
let spanVald=document.getElementById('spanVald')
function logout() {
    localStorage.removeItem('token')
    window.location.href = '../login/login.html'
}

// let URL = 'https://complaint-campz.herokuapp.com/'
let URL = 'http://localhost:3000/'

let header = new Headers();
header.append('content-type', 'application/json');

function send_news() {
    let newNews = document.getElementById('newNews')
    console.log(newNews.value)
    fetch(URL + 'addnews',{
        method: 'post',
        headers: header,
        body: JSON.stringify({
            newNews: newNews.value,
        })
    }).then(re => {
        return re.json();
    }).then(data => {
        console.log(data)
        if(data.status == 200) {
            spanVald.innerHTML='حموزتي';
            newNews.value=''
        }
    })
    

}


