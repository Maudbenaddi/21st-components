import { NotchedProjectCard } from "./notched-project-card";

/* Three cards, one per device (desktop, phone, tablet), and three
   confessions from a designer who would rather not build her own cards. */

const settings = {
  accent: "#0033ff",
  accentForeground: "#ffffff",
  monochrome: true,
  title1: "Ctrl+C, Ctrl+V, Ship",
  title2: "The Button I Didn't Design",
  title3: "Dashboard, Eventually",
};

export default function Demo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props };
  return (
    <div className="grid w-full max-w-6xl gap-x-5 gap-y-12 p-6 min-[700px]:grid-cols-3 lg:gap-x-8 lg:p-8">
      {/* desktop: the window runs off the bottom-right corner */}
      <NotchedProjectCard
        href="#"
        title={s.title1}
        description="A landing page built in the time it took my coffee to cool. Searched 21st.dev, found a card, pasted it. Nobody needs to know."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
        badge="2026"
        tags={["Copy-paste", "Speedrun"]}
        monochrome={s.monochrome}
        accent={s.accent}
        accentForeground={s.accentForeground}
      />
      {/* phone: rises out of the bottom edge, its foot cropped */}
      <NotchedProjectCard
        href="#"
        title={s.title2}
        description="Three weeks agonising over a border radius. Then I found one on 21st.dev that was already perfect. Therapy is expensive, components are free."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80"
        badge="2025"
        tags={["Self-care", "Zero effort"]}
        monochrome={s.monochrome}
        accent={s.accent}
        accentForeground={s.accentForeground}
      />
      {/* tablet: stands in the bottom-right corner, running off both edges */}
      <NotchedProjectCard
        href="#"
        title={s.title3}
        description="Planned to build it from scratch this weekend. Installed it from 21st.dev in one command instead, then took a well-deserved nap."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
        badge="2024"
        tags={["Nap-driven", "With AI"]}
        monochrome={s.monochrome}
        accent={s.accent}
        accentForeground={s.accentForeground}
      />
    </div>
  );
}
