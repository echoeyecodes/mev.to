const getMonth = (month) =>{
    if(month.toString() === '01'){
        return 'Jan'
    }else if(month.toString() === '02'){
        return 'Feb'
    }
    else if(month.toString() === '03'){
        return 'Mar'
    }
    else if(month.toString() === '04'){
        return 'Apr'
    }
    else if(month.toString() === '05'){
        return 'May'
    }
    else if(month.toString() === '06'){
        return 'Jun'
    }
    else if(month.toString() === '07'){
        return 'Jul'
    }
    else if(month.toString() === '08'){
        return 'Aug'
    }
    else if(month.toString() === '09'){
        return 'SEP'
    }else if(month.toString() === '10'){
        return 'Oct'
    }else if(month.toString() === '11'){
        return 'Nov'
    }else{
        return 'Dec'
    }
}

export default getMonth