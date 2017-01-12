var userName = 'Вы';
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var parentDiv = document.querySelector('.feedback__message--container');


document.querySelector('.feedback__message--like-count').onclick = function()  {
    ++document.querySelector('.feedback__message--like-count').innerHTML
};

document.querySelector(".message__send-button").onclick = function ()  {
    checkMessage();
    clearField();
};

function getMonthName(monthNum)  {
    var monthName = ['Января', 'Февраля', 'Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
    return monthName[monthNum]
}
function addUserName()  {
    var user = document.createElement('p');
    user.className = "feedback__message--username";
    parentDiv.appendChild(user);
    user.innerHTML = userName;
}
function addTime()  {
    var time = document.createElement('span');
    time.className = "feedback__message--time";
    parentDiv.appendChild(time);
    time.innerHTML = day + " "  + getMonthName(month) + " " + year;
}
function addMessageText(selector)  {
    var message = document.createElement('p');
    message.className = "feedback__message";
    parentDiv.appendChild(message);
    message.innerHTML = document.querySelector(selector).value;
}
function checkMessage()  {
    if (document.querySelector(".message__textarea").value != 0)  {
        addUserName();
        addTime();
        addMessageText('.message__textarea');
    }else {
        alert('Невозможно отправлять пустые сообщения!')
    }
}
function clearField()  {
    document.querySelector('.message__textarea').value = '';
}


