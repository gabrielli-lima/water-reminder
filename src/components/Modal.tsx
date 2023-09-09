type Props = {
    isOpen: boolean;
}

export const Modal = (props : Props) =>{
    const isOpen = props.isOpen
    if(isOpen===true){
        return(
            <div className="bg-orange-500" w-96 h-96>foiiii</div>
        )
    } else{
        return(<div className="bg-gray-500" w-96 h-96>não foi 222</div>)
    }

    
}