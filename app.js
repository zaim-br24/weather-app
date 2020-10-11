const api = {
    key:"688479742a2ba965dd5ffbef8b7c938d",
    url:"http://api.openweathermap.org/data/2.5/weather?",
    iconUrl:"http://openweathermap.org/img/w/"
};




const box = document.querySelector('.search')
box.addEventListener('keypress', (e)=>{
    if(e.keyCode === 13){
        controller(box.value)
    }
})
window.onload = function(){
    controller("fes")
}

const controller = async (query)=>{
    const getdata = await fetch(`${api.url}q=${query}&units=metric&appid=${api.key}`)
    const res = await getdata.json();
    console.log(res)
    displayRes(res);
    clearField()
}
const DOM = {
    name:document.querySelector('.name'),
    icon:document.querySelector('.wicon .icon'),
    temp:document.querySelector('.temp'),
    dec:document.querySelector('.dec'),
    minMax:document.querySelector('.min-max'),
    date:document.querySelector('.date')

}

function displayRes(data){
DOM.name.textContent =`${data.name},${data.sys.country}`  ;
DOM.icon.src = api.iconUrl+data.weather[0].icon+'.png'
DOM.temp.innerHTML =`${Math.round(data.main.temp)}<span>°C</span>`  ;
DOM.dec.textContent = data.weather[0].description
DOM.minMax.textContent = `${Math.round(data.main.temp_min)}°C / ${Math.round(data.main.temp_max)}°C` ;
DOM.date.textContent = getDate()
}

function getDate(){
    const now = new Date();
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const mt = month[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear()
    return `${year}/${day}/${mt}`;
}
function clearField(){
    box.value = '';
}

