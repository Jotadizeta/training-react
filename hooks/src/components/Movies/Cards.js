import './Cards.css';

function Cards(props) {

    const formatGenre=()=>{
        return props.movie.genre.replace("|"," | ");
    }


  return (
    <div className="card">
            <h2>{props.movie.title}</h2>
            <h3>{formatGenre()}</h3>
          </div>
  );
}

export default Cards;