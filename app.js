const display = document.querySelector('#display')
const btn = document.querySelectorAll('button')


btn.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') { display.innerHTML = '' }
        else if (item.id == 'backspace') {
            let str = display.innerHTML.toString();
            display.innerHTML = str.substring(0, str.length - 1)
        }
        else if (display.innerHTML != '' && item.id == 'equal') { display.innerHTML = eval(display.innerHTML) }
        else if (display.innerHTML == '' && item.id == 'equal') {
            display.innerHTML = 'Empty!';
            setTimeout(() => (display.innerHTML = ''), 1500)

        }
        else { display.innerHTML = display.innerHTML + item.id }
    }
})
let dark = true
const themeToggle = document.querySelector('.theme-toggler')
const Theme = document.querySelector('.calculator')
themeToggle.onclick = () => {
    document.querySelector('.calculator').classList.toggle('dark')
    document.querySelector('.theme-toggler').classList.toggle('active')
    dark != dark
}