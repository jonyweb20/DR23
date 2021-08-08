let klass = [
    {room: 111, place: 15, faculty: ['REF', 'FLA', 'AVTF']},
    {room: 211, place: 10, faculty: ['AVTF', 'MTF']},
    {room: 311, place: 17, faculty: ['FLA', 'FB']},
    {room: 511, place: 25, faculty: ['MTF', 'FLA', 'FB']},
    {room: 611, place: 30, faculty: ['FB', 'REF']}
]
let facultyAll = [];

function clearTab(){
    let all_td = document.querySelectorAll('.cell');
        for(let i=0; i < all_td.length; i++){
            all_td[i].remove();
        }
}

function allRoom() {
    clearTab();
    let tr = '';
    let td = '';
    let selFaculty = document.getElementById('sel-10');
    let selGroup = document.getElementById('sel-11');
    let table = document.getElementById('tab1');
    for (let i = 0; i < klass.length; i++) {
        tr = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            switch (j) {
                case 0: {
                    td = document.createElement('td');
                    tr.appendChild(td);
                    td.setAttribute('class', 'cell');
                    td.innerHTML = klass[i].room;
                    break;
                }
                case 1: {
                    td = document.createElement('td');
                    tr.appendChild(td);
                    td.setAttribute('class', 'cell');
                    td.innerHTML = klass[i].place;
                    break;
                }
                case 2: {
                    td = document.createElement('td');
                    tr.appendChild(td);
                    td.setAttribute('class', 'cell');
                    td.innerHTML = klass[i].faculty;
                    break;
                }
            }
        }
        table.appendChild(tr);
    }
    for (let i = 0; i < klass.length; i++) {
        for (let j = 0; j < klass[i].faculty.length; j++) {

            if (facultyAll.indexOf(klass[i].faculty[j]) === -1) {
                facultyAll.push(klass[i].faculty[j]);
            }
        }
    }
    document.getElementById('sel-10').innerHTML = '';
    document.getElementById('sel-11').innerHTML= '';
    for (let y = 0; y < facultyAll.length; y++) {
        selFaculty.appendChild(Option(facultyAll[y]));
        selGroup.appendChild(Option(facultyAll[y]));
    }
}

function selectFaculty() {
    debugger
    document.querySelector('.room-ForFaculty').innerHTML = '';
    document.querySelector('.room-ForGroup').innerHTML = '';
    document.querySelector('.roomTitle').innerHTML = '';
    let selectFacultyM = document.getElementById('sel-10');
    let outFaculty = document.querySelector('.room-ForFaculty');
    let faculty = selectFacultyM.options[selectFacultyM.selectedIndex].value;
    document.querySelector('.roomTitle').innerHTML = 'Аудитории для факультета  ' + faculty;
    for (let i = 0; i < klass.length; i++) {
        for (let j = 0; j < klass[i].faculty.length; j++) {
            if (klass[i].faculty.includes(faculty)) {
                outFaculty.innerHTML += klass[i].room + '<br/>';
                break;
            }
        }
    }
}

function selectRoomForGroup() {
    debugger

    document.querySelector('.room-ForFaculty').innerHTML = '';
    document.querySelector('.room-ForGroup').innerHTML = '';
    document.querySelector('.roomTitle').innerHTML = '';
    let NameGroup = document.querySelector('#i-11').value;
    let outPlace = document.querySelector('.room-ForGroup');
    let PlaceGroup = document.getElementById('i-12').value;
    let FacultyGroup = document.getElementById('sel-11');
    let facultyF = FacultyGroup.options[FacultyGroup.selectedIndex].value;
    document.querySelector('.roomTitle').innerHTML = 'Аудитории для группы  ' + NameGroup;
    for (let i = 0; i < klass.length; i++) {
        for (let j = 0; j < klass[i].faculty.length; j++) {
            if (klass[i].faculty.includes(facultyF) && klass[i].place >= PlaceGroup) {
                outPlace.innerHTML += klass[i].room + '<br/>';
                break;
            }
        }
    }
}

function sortForPlace(){
    klass.sort(function (x, y) {
        if (x.place > y.place) {
            return 1;
        }
        if (x.place < y.place) {
            return -1;
        }
        return 0;
    });
    allRoom();
}

function sortForRoom(){
    klass.sort(function (x, y) {
        if (x.room > y.room) {
            return 1;
        }
        if (x.room < y.room) {
            return -1;
        }
        return 0;
    });
    allRoom();
}
