export default function Card() {
  return (
    <section className='card'>
      <h3>SOLD OUT</h3>
      <img src='/images/katie-zaferes.png' />
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
