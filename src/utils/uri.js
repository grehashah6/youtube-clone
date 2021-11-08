import { Location } from 'history';


export const getParamValue =(location, paramname) => {
    if(!location || !location.search){
        return null;
    }

    const urlParams = new URLSearchParams(location.search);
    return urlParams.get(paramname);
}




