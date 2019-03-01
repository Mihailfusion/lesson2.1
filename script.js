let week = [
    "Понеделинк",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
]
document.write(
    week[0] + "<br>" + week[1] + "<br>" + week[2] + "<br>" + week[3] + 
    "<br> <i>" + week[4] + "</i><br><b>" + week[5] + "<br>" + week[6] + "</b>"
)
let arr = [
    "234234234",
    "323434234",
    "345341",
    "65444665",
    "75658888",
    "43345555",
    "109867"
]


for (let i = 0; i < arr.length; i++) {
    
    if (arr[i].toString()[0] == 3 || arr[i].toString()[0] == 7) {
        console.log(arr[i])
    }
}


