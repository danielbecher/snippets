function getBlackFriDay (yearBf) {
    /* Função que retorna o dia de Black Friday daquele ano */
    /* O ano é passado por parâmetro (yearBf). Se não for passado, a função pega o ano corrente */
    let dateData = new Date()
    let mm = 11
    var aaaa = yearBf === undefined ? dateData.getFullYear() : aaaa = yearBf
    let dd = 30
    let dateStart = new Date(mm + '/' + '01' + '/' + aaaa)
    let dateEnd = new Date(mm + '/' + dd + '/' + aaaa)
    let fridays = []
    while (dateStart <= dateEnd) {
        if (dateStart.getDay() == 5) {
            fridays.push(dateStart.getDate())
        }
        let newDate = dateStart.setDate(dateStart.getDate() + 1);
        dateStart = new Date(newDate);
    }
    var blackFridayDay = fridays[fridays.length - 1]
    console.log('A BlackFriday deste ano será: ' + blackFridayDay + '/' + mm + '/' + aaaa)
    console.log('Data formatada padrão: ', new Date(mm + '/' + blackFridayDay + '/' + aaaa))
    return blackFridayDay + '/' + mm + '/' + aaaa
}