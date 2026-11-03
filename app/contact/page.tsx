"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "opening";

function openEmail(event: FormEvent<HTMLFormElement>, subject: string, setState: (state: FormState) => void) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const lines = Array.from(data.entries()).map(([name, value]) => {
    const label = name.charAt(0).toUpperCase() + name.slice(1).replaceAll("_", " ");
    return `${label} : ${String(value)}`;
  });
  setState("opening");
  window.location.href = `mailto:contact@studionini.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\\n\\n"))}`;
  window.setTimeout(() => setState("idle"), 1200);
}

function SubmitButton({ state, children }: { state: FormState; children: string }) {
  return <button className="button" type="submit" disabled={state === "opening"}>
    {state === "opening" ? "Ouverture de votre messagerie…" : children}
  </button>;
}

export default function Contact() {
  const [contactState, setContactState] = useState<FormState>("idle");
  const [reviewState, setReviewState] = useState<FormState>("idle");

  return <main className="contact-v2">
    <section className="contact-hero page-shell"><div><p className="eyebrow">Créer ensemble</p><h1>Parlez-moi de votre projet.</h1><p>Même si tout n’est pas encore défini, racontez-moi votre événement, vos envies et ce que vous aimeriez faire vivre à vos invités.</p></div><a href="mailto:contact@studionini.fr">contact@studionini.fr</a></section>
    <section className="contact-main page-shell"><form className="contact-form-v2" onSubmit={(event) => openEmail(event, "Nouvelle demande — Studio Nini", setContactState)}><h2>Votre événement</h2><div className="form-row"><label>Nom et prénom<input name="nom" required/></label><label>Adresse e-mail<input type="email" name="email" required/></label></div><div className="form-row"><label>Type d’événement<select name="evenement" defaultValue=""><option value="" disabled>Choisir</option><option>Mariage</option><option>EVJ</option><option>Anniversaire</option><option>Événement privé</option><option>Autre</option></select></label><label>Date envisagée<input type="date" name="date"/></label></div><label>Ce que vous imaginez<textarea name="message" placeholder="Votre histoire, l’ambiance, les créations souhaitées, le nombre d’invités…" required/></label><SubmitButton state={contactState}>Préparer mon e-mail</SubmitButton><small>Votre messagerie s’ouvrira avec votre demande déjà rédigée. Il ne restera qu’à l’envoyer à contact@studionini.fr.</small></form><aside><p className="eyebrow">Studio Nini</p><h2>Une vraie personne vous répond.</h2><p>Je lis personnellement chaque demande et je reviens vers vous avec des premières pistes adaptées à votre projet.</p><dl><div><dt>Contact</dt><dd><a href="mailto:contact@studionini.fr">contact@studionini.fr</a></dd></div><div><dt>Où ?</dt><dd>Lyon et projets partout en France</dd></div><div><dt>Quand ?</dt><dd>Idéalement 45 jours avant l’événement</dd></div></dl></aside></section>
    <section id="temoignage" className="review-panel"><div className="page-shell"><div><p className="eyebrow">Votre expérience</p><h2>Laisser un témoignage</h2><p>Votre retour aide les futurs clients à se projeter. Il sera relu avant toute publication.</p></div><form onSubmit={(event) => openEmail(event, "Témoignage — Studio Nini", setReviewState)}><div className="form-row"><label>Votre prénom<input name="prenom" required/></label><label>Votre événement<input name="projet" placeholder="Mariage, anniversaire…" required/></label></div><label>Votre témoignage<textarea name="temoignage" placeholder="Racontez ce que vous avez aimé dans l’accompagnement et les créations…" required/></label><label>Note<select name="note" defaultValue="5/5"><option>5/5</option><option>4/5</option><option>3/5</option></select></label><SubmitButton state={reviewState}>Préparer mon avis</SubmitButton><small>Votre messagerie s’ouvrira avec votre avis prérempli. Il ne sera jamais publié sans validation.</small></form></div></section>
  </main>;
}
