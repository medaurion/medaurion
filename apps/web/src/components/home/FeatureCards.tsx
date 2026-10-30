import { Icon } from "@/components/ui/Icon";
import { CardWave, FeatureArt, type FeatureArtName } from "@/components/home/HomeIllustrations";

const features: {
  art: FeatureArtName;
  label: string;
  title: string;
  description: string;
  color: string;
}[] = [
  {
    art: "brief",
    label: "BEFORE THE CONSULTATION",
    title: "Patient Brief",
    description: "Know your patient in 60 seconds, before they sit down.",
    color: "blue",
  },
  {
    art: "changes",
    label: "SEE WHAT CHANGED",
    title: "What Changed",
    description: "Every new report compared with the last one.",
    color: "mint",
  },
  {
    art: "notes",
    label: "DOCUMENT WITH EASE",
    title: "Clinical notes",
    description: "Rough notes become a clear draft. You review and approve.",
    color: "peach",
  },
  {
    art: "prescription",
    label: "FINISH THE VISIT",
    title: "Prescriptions",
    description: "Keep the visit plan and current medicines easy to find.",
    color: "lavender",
  },
];

export default function FeatureCards() {
  return (
    <section className="section doctor-section" id="for-doctors">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">FOR DOCTORS</p>
          <h2>
            More time with the person.{" "}
            <span className="h2-accent">Less time finding the record.</span>
          </h2>
          <p className="section-lead">
            Everything you need before, during and after a consultation—without
            replacing the clinic software you already use.
          </p>
        </div>
        <div className="doctor-grid">
          {features.map((feature, index) => (
            <a
              className={`doctor-card doctor-card--${feature.color}`}
              href={index === 0 ? "#patient-brief" : "#how-it-works"}
              key={feature.title}
            >
              <span className="feature-label">{feature.label}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span aria-hidden="true" className="card-link">
                <Icon name="arrow" size={22} />
              </span>
              <CardWave />
              <FeatureArt name={feature.art} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
