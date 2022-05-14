export default function Card() {
  return (
    <section className='card'>
      <img src='/images/katie-zaferes.png' alt='katie zaferes' />
      <h3 className='status'>SOLD OUT</h3>
      <div className='rating'>
        <i class='fa-solid fa-star'></i>
        <p className='rating'>5.0</p>
        <p className='gray'>
          (30) <b>‧</b> USA
        </p>
      </div>
      <p className='course'>Life lessons with Katie Zaferes</p>
      <p className='pricing'>
        <b>From $136 </b>/ person
      </p>
    </section>
  );
}
