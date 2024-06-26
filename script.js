
var request = fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
data1 = request.then((res) => res.json()).then((data) => foo(data));
var container = document.getElementsByClassName("col-md-12")
var table1 = document.createElement("table");
table1.className = "table table-bordered"
var heading = document.createElement("thead");
heading.className="thead table table-bordered"
var row = document.createElement("div");
row.className="table-responsive"
var head1 = document.createElement("th");
head1.innerText = "ID";
head1.className=""
var head2 = document.createElement("th");
head2.innerText = "Name"
var head3 = document.createElement("th");
head3.innerText = "Email"
var body1 = document.createElement("tbody");
body1.className="table table-bordered"
heading.append(head1, head2, head3);
table1.append(heading,body1);
row.append(table1);
document.body.append(row);


function foo(data) {
    console.log(data)
    for (let i = 0; i < 10; i++) {
        console.log(data[i]);
        var trow = document.createElement("tr");
        
        var tdata = document.createElement("td");
        tdata.innerText = data[i].id;
        var tdata2 = document.createElement("td");
        tdata2.innerText = data[i].name;
        var tdata3 = document.createElement("td");
        tdata3.innerText = data[i].email;
        trow.append(tdata, tdata2, tdata3)
        body1.append(trow)
    }
    let button1 = document.getElementById("1");
    button1.addEventListener('click', () => {
        body1.innerHTML = ''

        for (let i = 0; i < 10; i++) {
            console.log(data[i]);
            var trow = document.createElement("tr");
            var tdata = document.createElement("td");
            tdata.innerText = data[i].id;
            var tdata2 = document.createElement("td");
            tdata2.innerText = data[i].name;
            var tdata3 = document.createElement("td");
            tdata3.innerText = data[i].email;
            trow.append(tdata, tdata2, tdata3)
            body1.append(trow)
        }
    })
    let button2 = document.getElementById("2");
    button2.addEventListener('click', () => {

        body1.innerHTML = '';
        for (let i = 10; i < 20; i++) {
            console.log(data[i]);
            var trow = document.createElement("tr");
            var tdata = document.createElement("td");
            tdata.innerText = data[i].id;
            var tdata2 = document.createElement("td");
            tdata2.innerText = data[i].name;
            var tdata3 = document.createElement("td");
            tdata3.innerText = data[i].email;
            trow.append(tdata, tdata2, tdata3)
            body1.append(trow)
        }
    })
    let button3 = document.getElementById("3");
    button3.addEventListener('click', () => {

        body1.innerHTML = '';
        for (let i = 20; i < 30; i++) {
            console.log(data[i]);
            var trow = document.createElement("tr");
            var tdata = document.createElement("td");
            tdata.innerText = data[i].id;
            var tdata2 = document.createElement("td");
            tdata2.innerText = data[i].name;
            var tdata3 = document.createElement("td");
            tdata3.innerText = data[i].email;
            trow.append(tdata, tdata2, tdata3)
            body1.append(trow)
        }
    })
    let button4 = document.getElementById("4");
    button4.addEventListener('click', () => {

        body1.innerHTML = '';
        for (let i = 30; i < 40; i++) {
            console.log(data[i]);
            var trow = document.createElement("tr");
            var tdata = document.createElement("td");
            tdata.innerText = data[i].id;
            var tdata2 = document.createElement("td");
            tdata2.innerText = data[i].name;
            var tdata3 = document.createElement("td");
            tdata3.innerText = data[i].email;
            trow.append(tdata, tdata2, tdata3)
            body1.append(trow)
        }
    })
    let button5 = document.getElementById("5");
    button5.addEventListener('click', () => {

        body1.innerHTML = '';
        for (let i = 40; i < 50; i++) {
            console.log(data[i]);
            var trow = document.createElement("tr");
            var tdata = document.createElement("td");
            tdata.innerText = data[i].id;
            var tdata2 = document.createElement("td");
            tdata2.innerText = data[i].name;
            var tdata3 = document.createElement("td");
            tdata3.innerText = data[i].email;
            trow.append(tdata, tdata2, tdata3)
            body1.append(trow)
        }
    })
    let button6 = document.getElementById("6");
    button6.addEventListener('click', () => {

        body1.innerHTML = '';
        for (let i = 50; i < 60; i++) {
            console.log(data[i]);
            var trow = document.createElement("tr");
            var tdata = document.createElement("td");
            tdata.innerText = data[i].id;
            var tdata2 = document.createElement("td");
            tdata2.innerText = data[i].name;
            var tdata3 = document.createElement("td");
            tdata3.innerText = data[i].email;
            trow.append(tdata, tdata2, tdata3)
            body1.append(trow)
        }
    })
    let button7 = document.getElementById("7");
    button7.addEventListener('click', () => {

        body1.innerHTML = '';
        for (let i = 60; i < 70; i++) {
            console.log(data[i]);
            var trow = document.createElement("tr");
            var tdata = document.createElement("td");
            tdata.innerText = data[i].id;
            var tdata2 = document.createElement("td");
            tdata2.innerText = data[i].name;
            var tdata3 = document.createElement("td");
            tdata3.innerText = data[i].email;
            trow.append(tdata, tdata2, tdata3)
            body1.append(trow)
        }
    })
    let button8 = document.getElementById("8");
    button8.addEventListener('click', () => {

        body1.innerHTML = '';
        for (let i = 70; i < 80; i++) {
            console.log(data[i]);
            var trow = document.createElement("tr");
            var tdata = document.createElement("td");
            tdata.innerText = data[i].id;
            var tdata2 = document.createElement("td");
            tdata2.innerText = data[i].name;
            var tdata3 = document.createElement("td");
            tdata3.innerText = data[i].email;
            trow.append(tdata, tdata2, tdata3)
            body1.append(trow)
        }
    })
    let button9 = document.getElementById("9");
    button9.addEventListener('click', () => {

        body1.innerHTML = '';
        for (let i = 80; i < 90; i++) {
            console.log(data[i]);
            var trow = document.createElement("tr");
            var tdata = document.createElement("td");
            tdata.innerText = data[i].id;
            var tdata2 = document.createElement("td");
            tdata2.innerText = data[i].name;
            var tdata3 = document.createElement("td");
            tdata3.innerText = data[i].email;
            trow.append(tdata, tdata2, tdata3)
            body1.append(trow)
        }
    })
    let button10 = document.getElementById("10");
    button10.addEventListener('click', () => {

        body1.innerHTML = '';
        for (let i = 90; i < 100; i++) {
            console.log(data[i]);
            var trow = document.createElement("tr");
            var tdata = document.createElement("td");
            tdata.innerText = data[i].id;
            var tdata2 = document.createElement("td");
            tdata2.innerText = data[i].name;
            var tdata3 = document.createElement("td");
            tdata3.innerText = data[i].email;
            trow.append(tdata, tdata2, tdata3)
            body1.append(trow)
        }
    })
}

