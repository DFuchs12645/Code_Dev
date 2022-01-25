function tabuada(){
    let num = document.getElementById('num')
    num = Number(num.value)
    /*
    let mlt = document.getElementById('mlt')
    mlt = Number(mlt.value)

    let lmt = document.getElementById('lmt')
    lmt = Number(lmt.value)
    */
    let msg = document.getElementById('msg')
    msg.innerHTML = ''
    
    let tab = document.getElementById('tab')
    tab.innerHTML = ''

    let c = 1
    while (c <= 10) {
        let item = document.createElement('option')
            item.text = `${c} x ${num} = ${c*num}`
            tab.appendChild(item)
        c++
    }



    /*
    let res = 0
     for (let i = 1; i <= lmt; i++) {
        res = res + num

        if (i == mlt) {
            msg.innerHTML += `<strong>${i} x ${num} = ${res}</strong> <br>`
        }
        if (i != mlt) {
            msg.innerHTML += `${i} x ${num} = ${res} <br>`
        }

     */     
    }

}