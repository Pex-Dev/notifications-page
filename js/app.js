let newNotifications = 0;//Number of unread notifications
document.addEventListener('DOMContentLoaded',() =>{
    getNumberOfUnreadNotifications();
    setAsReadButton();
})

function getNumberOfUnreadNotifications(){
    const unreadNotificationText = document.querySelector('#unreadNotifications');//Gets the span with the number of unread notifications
    newNotifications = getUnreadNotifications().length;//Gets the number of unread notifications
    unreadNotificationText.textContent = newNotifications;//Sets the number of unread notification on the span
}

function setAsReadButton(){  
    const setReadButton = document.querySelector('#setRead');
    setReadButton.addEventListener('click',() =>{
        const notifications = getUnreadNotifications();//Gets all unread notifications
        notifications.forEach(notification => {
            setNotificationAsRead(notification);
        });
        getNumberOfUnreadNotifications();//Update the number of unread notifications
    })
}

function getUnreadNotifications(){
    return document.querySelectorAll('.notification:not(.read)');//Return the list of unread notifications
}

function setNotificationAsRead(notification){
    notification.classList.add('read');//Sets read class
    const newIndicator = notification.querySelector('.new');//Gets the new point
    if(newIndicator){
        newIndicator.remove()//Remove the new point
    }
}