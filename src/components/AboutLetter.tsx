import RichText from "./RichText";
import { about, site } from "@/lib/content";

/** The About letter: date, paragraphs and sign-off. Used by the /about page and the About pop-up. */
export default function AboutLetter() {
  return (
    <>
      <h1 className="sr-only">{site.name}</h1>

      <p className="text-[15px] font-medium leading-[normal] text-accent">
        {about.date}
      </p>

      <div className="mt-4 space-y-3 text-[15px] font-light leading-[normal] text-foreground">
        {about.paragraphs.map((paragraph, i) => (
          <p key={i}>
            <RichText text={paragraph} />
          </p>
        ))}
      </div>

      <p className="mt-3 text-[15px] leading-[normal] text-[#656565]">
        {about.signOff}
      </p>
    </>
  );
}
