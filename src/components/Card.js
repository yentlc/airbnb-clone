export default function Card({ card }) {
  let spots;
  if (card.openSpots == 0) {
    spots = 'SOLD OUT';
  }
  return (
    <section className='card'>
      <img src={`/images/${card.coverImg}`} alt='katie zaferes' />
      {spots && <h3 className='status'>{spots}</h3>}
      <div className='rating'>
        <i class='fa-solid fa-star'></i>
        <p className='rating'>{card.stats.rating}</p>
        <p className='gray'>
          ({card.stats.reviewCount}) <b>‧</b> {card.location}
        </p>
      </div>
      <p className='course'>{card.title}</p>
      <p className='pricing'>
        <span className='bold'>From ${card.price} </span>/ person
      </p>
    </section>
  );
}
