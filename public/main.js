getCss.onclick=function(){
    const request = new XMLHttpRequest();
    request.open('GET', '/1.css');
    request.onreadystatechange=()=>{
        if (request.readyState === 4 && request.status === 200) {
            let string = request.response.toString()
            let dom = document.createElement('style');
            dom.innerHTML=string
            document.head.appendChild(dom);
        }
    }
    request.send()
}

getJs.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js');
    request.onreadystatechange=()=>{
        if (request.readyState === 4 && request.status) {
            let string = request.response.toString();
            let dom = document.createElement('script');
            dom.innerHTML=string
            document.body.appendChild(dom);
        }
    }
    request.send()
}

getHtml.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onreadystatechange=()=>{
        if (request.readyState === 4 && request.status === 200) {
            let string = request.response.toString();
            let dom = document.createElement('div')
            dom.innerHTML=string
            document.body.appendChild(dom)
        }
    }
    request.send()
}

getXml.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange=()=>{
        if (request.readyState === 4 && request.status === 200) {
            let dom = request.responseXML
            let text = dom.getElementsByTagName('message')[0].textContent
            alert(text)

        }
    }
    request.send()
}

getJson.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange=()=>{
        if (request.readyState === 4 && request.status) {
            let json = JSON.parse(request.response.toString())
            alert(json.message)

        }
    }
    request.send()
}