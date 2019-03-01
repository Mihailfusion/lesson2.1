let week = [
    "Воскресенье",
    "Понеделинк",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    
];
function getWeekDay(date) {
    date = date || new Date();
    var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var day = date.getDay();

    return days[day];
}


var date = new Date();
let now = getWeekDay(date)

console.log(now);
for (let z = 0; z < 7; z++) {
    if (now == week[z]) {
        week[z] = week[z].italics()
        document.write(
            week[1] + "<br>" + week[2] + "<br>" + week[3] + "<br>" + week[4] +
            "<br>" + week[5] + "<br><b>" + week[6] + "<br>" + week[0] + "</b>"
        )
    }
};


let arr = [
    "234234234",
    "323434234",
    "345341",
    "65444665",
    "75658888",
    "43345555",
    "109867"
];


for (let i = 0; i < arr.length; i++) {
    
    if (arr[i].toString()[0] == 3 || arr[i].toString()[0] == 7) {
        console.log(arr[i])
    }
};


