function Card(props){
    return(
         <div style={{backgroundColor:props.bgColor}} className="px-10 py-10 border rounded-md text-center flex-grow text-2xl font-medium">
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
        </div>
    )
}

export default Card