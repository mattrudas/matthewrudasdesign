import RichText from "./RichText";
import { about, site } from "@/lib/content";

/** The About letter: portrait, name, date, paragraphs and sign-off. Used by the /about page and the About pop-up. */
export default function AboutLetter() {
  return (
    <>
      <div className="flex items-center gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.aboutPortrait}
          alt={site.name}
          width={80}
          height={80}
          className="h-20 w-20 shrink-0 rounded-[12px] object-cover"
        />
        <div className="flex flex-col gap-2 text-[15px] font-medium leading-[normal]">
          <h1 className="text-foreground">{site.name}</h1>
          <p className="text-[#656565]">{about.role}</p>
        </div>
      </div>

      <hr className="mt-4 border-0 border-t border-border" />

      <p className="mt-4 text-[15px] font-medium leading-[normal] text-accent">
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
