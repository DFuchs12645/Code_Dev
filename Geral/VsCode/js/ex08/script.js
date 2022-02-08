function tabuada(){
    let num = document.getElementById('num')
    let mlt = document.getElementById('mlt')
    let lmt = document.getElementById('lmt')
    let msg = document.getElementById('msg')

    num = Number(num.value)
    mlt = Number(mlt.value)
    lmt = Number(lmt.value)
    msg.innerHTML = ''
    
    let res = 0

   

    for (let i = 1; i <= lmt; i++) {
        res = res + num

        if (i == mlt) {
            msg.innerHTML += `<strong>${i} x ${num} = ${res}</strong> <br>`
        }
        if (i != mlt) {
            msg.innerHTML += `${i} x ${num} = ${res} <br>`
        }

        
        
    }

}