import Stat from "./Stat";

export default function Stats({stats}) {
  return (
    <section className="stats">
      <Stat number={stats.wordCount} text="Words" />
      <Stat number={stats.textLen} text="Characters" />
      <Stat number={stats.instaCharLeft} text="Instagram" />
      <Stat number={stats.fbCharLeft} text="Facebook" />
    </section>
  )
}
