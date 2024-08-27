let btnEncriptar = document.getElementById('btnEncriptar')
let btnDesencriptar = document.getElementById('btnDesencriptar')
let textoAEncriptar = document.getElementById('textoAEncriptar')
let tituloDesencriptado = document.getElementById('tituloDesencriptado')
let mensajeDesencriptado = document.getElementById('mensajeDesencriptado')
let advertencia = document.getElementById('advertencia')
let btnCopiar = document.getElementById('btnCopiar')
let muneco = document.getElementById('muneco')

function encriptar(texto){
    if(advertenciaDeTexto()){
        return false
    }else if(texto === ''){
        alert('No a ingresado ningun texto')
    }else{
        let palabraEnArray = []
        

        let letrasSeparadas = texto.split('')
        letrasSeparadas.map((a)=>{
            if(a === 'a'){
                palabraEnArray.push('ai')
            }else if( a === 'e'){
                palabraEnArray.push('enter')
            }else if(a === 'i'){
                palabraEnArray.push('imes')
            }else if(a === 'o'){
                palabraEnArray.push('ober')
            }else if(a === 'u'){
                palabraEnArray.push('ufat')
            }else{
                palabraEnArray.push(a)
            }
    
        })
        let textoEncriptado = palabraEnArray.join('')
        mensajeDesencriptado.textContent = textoEncriptado
        muneco.classList.add('mensajeOculto')
        tituloDesencriptado.textContent = 'Texto encriptado:'
        
        btnCopiar.classList.add('mostrar')
        btnCopiar.scrollIntoView({ behavior: 'smooth'})
        return textoEncriptado
    }
    
}



function desencriptar(texto){
    if(advertenciaDeTexto()){
        return false
    }else if(texto === ''){
        alert('No a ingresado ningun texto')
    }else if(!texto.includes('ai') ||!texto.includes('ai') || !texto.includes('ai') || !texto.includes('ai') || !texto.includes('ai') ){
        tituloDesencriptado.textContent = 'El mensaje no esta encriptado!'
        mensajeDesencriptado.classList.add('mensajeOculto')
    }
    else{
    palabraDesencriptada = texto.replaceAll('ai', 'a')
    palabraDesencriptada = palabraDesencriptada.replaceAll('enter', 'e')
    palabraDesencriptada = palabraDesencriptada.replaceAll('imes', 'i')
    palabraDesencriptada = palabraDesencriptada.replaceAll('ober', 'o')
    palabraDesencriptada = palabraDesencriptada.replaceAll('ufat', 'u')
    
    tituloDesencriptado.textContent = 'Texto desencriptado:'
    mensajeDesencriptado.textContent = palabraDesencriptada
    muneco.classList.add('mensajeOculto')
    btnCopiar.classList.add('mostrar')
    btnCopiar.scrollIntoView({ behavior: 'smooth'})
    return palabraDesencriptada
    }
}

function advertenciaDeTexto(){
    if(textoAEncriptar.value.match(/[A-Z]/g, '') || textoAEncriptar.value.normalize('NFD').match(/[\u0300-\u036f]/g, '')){
        advertencia.classList.add('advertencia')
        setTimeout(()=>{
            advertencia.classList.remove('advertencia')
        }, 510)
        return true
    }
    
}

function copiarTexto(texto){
    navigator.clipboard.writeText(texto)
        .then(()=>{
            btnCopiar.textContent = 'Copiado!'
            btnCopiar.classList.add('textoCopiado')
            setTimeout(()=>{
                btnCopiar.classList.remove('textoCopiado')
                btnCopiar.textContent = 'Copiar'
            }, 2000)
        })
}

textoAEncriptar.addEventListener('input', ()=>{
    textoAEncriptar.style.height= 'auto'
    textoAEncriptar.style.height = `${textoAEncriptar.scrollHeight}px`
})

btnEncriptar.addEventListener('click', ()=>{
    encriptar(textoAEncriptar.value)
})

btnDesencriptar.addEventListener('click', ()=>{
    desencriptar(textoAEncriptar.value)
})

btnCopiar.addEventListener('click', ()=>{
    copiarTexto(mensajeDesencriptado.textContent)
})