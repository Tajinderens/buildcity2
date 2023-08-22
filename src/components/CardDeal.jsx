import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Socialize on a Different <br className="sm:block hidden" /> Level.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Connect with like minded individuls. Ask your AI for effective ice breakers. Plan the best events with the right people.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
