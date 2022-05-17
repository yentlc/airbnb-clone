export default function Card({
  img,
  status,
  rating,
  reviewCount,
  country,
  title,
  price,
}) {
  return (
    <section className='card'>
      <img src={img} alt='katie zaferes' />
      <h3 className='status'>{status}</h3>
      <div className='rating'>
        <i class='fa-solid fa-star'></i>
        <p className='rating'>{rating}</p>
        <p className='gray'>
          ({reviewCount}) <b>‧</b> {country}
        </p>
      </div>
      <p className='course'>{title}</p>
      <p className='pricing'>
        <span className='bold'>From ${price} </span>/ person
      </p>
    </section>
  );
}
