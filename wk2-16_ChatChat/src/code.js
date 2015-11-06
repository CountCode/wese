var user = "";
var messages = {};

messages.gui = (function () {
    function show() {
        var messageElement = document.getElementById("messages");

        clear(messageElement);
        populate(messageElement);
    }

    function clear(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    function populate(element) {
        console.log("polulate");
        var mess = messages.io.list();
        for (var i = 0; i < mess.length; i++) {
            addMessage(element, mess[i]);
        }
    }

    function addMessage(element, message) {
        // do something relevant here
        // console.log("addMessage");
        var textElement = document.createElement("p");
        var time = message.timestamp;
        var date = new Date(time);
        var timeString = date.getHours() +":"+date.getMinutes()+":"+date.getSeconds();
        var textNode = document.createTextNode(timeString +" <"+message.nickname.toString()+"> "+message.message.toString());
        textElement.appendChild(textNode);

        element.appendChild(textElement);
    }
    
    function loginButtonPressed() {
        console.log("login button pressed");
        var nick = document.getElementById("nickname").value;
        var data = {
            nickname: nick
        }        
        displayArticle(1);         
        messages.io.send(data);
    }

    function logoutButtonPressed() {
        user = "";
        displayArticle(0);        
       // messages.io.send(data);
    }    
    
    function refreshButtonPressed() {
        console.log("refreshed");
        messages.io.getMessages();
    }
    
    function sendButtonPressed() {
        var message = document.getElementById("message").value;
        var data = {
            nickname: user,
            message: message
        }
        
        messages.io.postMessage(data);
    }    
    
    return {
        show: show,  
        loginButtonPressed: loginButtonPressed,
        logoutButtonPressed: logoutButtonPressed,
        refreshButtonPressed: refreshButtonPressed,
        sendButtonPressed: sendButtonPressed
    };
    
})();

messages.io = (function(displayHook) {

var messages = new Array();

    function send(info) {
        console.log("send");
        var url = "http://bad.herokuapp.com/app/auth";
        var data = JSON.stringify(info);        
        var req = new XMLHttpRequest();
        
        req.onreadystatechange = function () {
            // jos tila ei ole valmis, ei käsitellä
            if (req.readyState !== this.DONE) {
                console.log("state " + req.readyState);
                return false;
            }

            // jos statuskoodi ei ole 200 (ok), ei käsitellä
            if (req.status !== 200) {
                console.log("status " + req.status);
                return false;
            }

            // näytetään vastaus
            console.log(req.responseText);
            var teksti = JSON.parse(req.responseText);
            user = teksti.nickname;
            //console.log(teksti);                
           // displayHook();
        }        
        
        req.open("POST", url);

        req.setRequestHeader("Content-Type","application/json");
        req.send(data);    
    }    

    function postMessage(info) {
        console.log("post message");
        var url = "http://bad.herokuapp.com/app/messages";
        var data = JSON.stringify(info);        
        var req = new XMLHttpRequest();
        
        req.onreadystatechange = function () {
            // jos tila ei ole valmis, ei käsitellä
            if (req.readyState !== this.DONE) {
                console.log("state " + req.readyState);
                return false;
            }

            // jos statuskoodi ei ole 200 (ok), ei käsitellä
            if (req.status !== 200) {
                console.log("status " + req.status);
                return false;
            }

            // näytetään vastaus
            console.log("STATUS "+req.status);
         //   console.log(req.responseText);
         //   var teksti = JSON.parse(req.responseText);
            //console.log(teksti);                
           displayHook();
        }        
        
        req.open("POST", url);

        req.setRequestHeader("Content-Type","application/json");
        req.send(data);    
    }      
    
    function getMessages() {
        console.log("get messages");
        var url = "http://bad.herokuapp.com/app/messages";
      //  var data = JSON.stringify(info);        
        var req = new XMLHttpRequest();
        
        req.onreadystatechange = function () {
            // jos tila ei ole valmis, ei käsitellä
            if (req.readyState !== this.DONE) {
                console.log("state " + req.readyState);
                return false;
            }

            // jos statuskoodi ei ole 200 (ok), ei käsitellä
            if (req.status !== 200) {
                console.log("status " + req.status);
                return false;
            }

            // näytetään vastaus
            console.log(req.responseText);
            var teksti = JSON.parse(req.responseText);
            var i = 0;            
            console.log(teksti[i].id);
            while (teksti[i]){
                console.log(messages.length);
                messages.push(teksti[i]);
                console.log("While: "+teksti[i]);                
                i++;
            }                  
                
            displayHook();
        }        
               
        req.open("GET", url);

        req.setRequestHeader("Content-Type","application/json");
        req.send();    
    }
 
    function list() {
        return messages;
    }
 
 
    return {
        postMessage: postMessage,
        getMessages: getMessages,
        send: send,
        list: list
    };
    
})(messages.gui.show); 

function displayArticle(index) {
    
    var articles = document.getElementsByTagName("article");
   // console.log("index: "+index);
    for (var i = 0; i < articles.length; i++) {
        if (index == i) {
            articles[i].className = '';
        } else {
            articles[i].className = 'hidden';
        }
    }
}

function init() {

    displayArticle(0);

    var loginButton = document.getElementById("login");    
    loginButton.addEventListener("click", messages.gui.loginButtonPressed, false);
    
    var logoutButton = document.getElementById("logout");    
    logoutButton.addEventListener("click", messages.gui.logoutButtonPressed, false);
    
    var refreshButton = document.getElementById("refresh");    
    refreshButton.addEventListener("click", messages.gui.refreshButtonPressed, false);
    
    var sendButton = document.getElementById("send");    
    sendButton.addEventListener("click", messages.gui.sendButtonPressed, false);    
    
}
