export const getStaticProps=async()=>{
    const res =await fetch('http://127.0.0.1:8000/api/niveaulist/');
    const data= await res.json();
    console.log(data)
    return{
        props:{ niveaux :data}
    }
}

const about = ({niveaux}) => {
    return(
        <div>
            {niveaux.map(niveau=>(
                <div key={niveau.id}>
                    <a>
                        <h3>{niveau.nom_niveau}</h3>
                        
                    </a>
                </div>
            ))}
        </div>
    )
}

export default about