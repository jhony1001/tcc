export const formatToCurrence = (value)=>{
    const valueFloat = parseFloat(value.toString())
    return valueFloat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}