const toggle = document.querySelector('.toggle input')

toggle.addEventListener('click', () => {

const onOff = toggle.parentNode.querySelector('.onoff')



if (toggle.checked == true ) {

    onOff.textContent = 'ON'
} else {
    
onOff.textContent = 'OFF'
}

})







