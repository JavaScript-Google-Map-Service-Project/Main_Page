var t = 0;
var c = 1;
var re;
function tm () {
    document.getElementById('first').style.visibility = 'hidden';
    document.getElementById('second').style.visibility = 'visible';
    if (true) {
        setTimeout (function () {
            t++;
            re = t / 10;
            if (re != 10) {
                document.getElementById('time').innerHTML = re.toFixed(1) + '초';
                tm();
            } else {
                document.getElementById('time').innerHTML = re.toFixed(1) + '초';
                document.getElementById('second').style.visibility = 'hidden';
            }
        }, 100);
    }
}

function cnt() {
    document.getElementById('display').innerHTML = '1.00c/s';
    document.getElementById('count').innerHTML = '1번'
}

function kk () {
    c++;
    var r = 0;
    r = c / (t / 10);
    document.getElementById('display').innerHTML = r.toFixed(2) + 'c/s';
    document.getElementById('count').innerHTML = c + '번';
}