export default function Stat({number,text}) {
  return (
    <section className="stat">
        <span className={`stat_number ${number<0?"stat__number--limit":""}`}>{number}</span>
        <h2 className="second-heading">{text}</h2>
    </section>
  )
}
