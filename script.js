function verificar()    {
    const txtv = document.getElementById("txtvel")
    const vel = Number(txtv.value)
    const res = document.getElementById("res")
    res.innerHTML = `Sua velocidade atual é de ${vel}Km/h. `
    
    if (vel > 60)   {
        res.innerHTML += `Você está MULTADO por excesso de velocidade! `
    }
        res.innerHTML += `<p>Dirija sempre com cinto de segurança!`
}