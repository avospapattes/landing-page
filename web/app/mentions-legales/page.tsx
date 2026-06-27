export default function MentionsLegalesPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-stroke-title">
        Mentions Légales
      </h1>
      <div className="bg-white p-8 rounded-2xl neo-shadow prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            1. INFORMATIONS LÉGALES
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong>Nom commercial</strong> : « A vos papattes by Nath »
            </li>
            <li>
              <strong>Représentante légale</strong> : Nathalie HUSSER
            </li>
            <li>
              <strong>Statut</strong> : Entreprise Individuelle
            </li>
            <li>
              <strong>TVA</strong> : Non applicable selon l’article 293B du Code
              Général des Impôts
            </li>
            <li>
              <strong>Adresse</strong> : 7 Rue Pierre de Coubertin, 67205
              OBERHAUSBERGEN
            </li>
            <li>
              <strong>Téléphone</strong> : 06 15 42 29 50
            </li>
            <li>
              <strong>Email</strong> : contact@avospapattes.fr
            </li>
            <li>
              <strong>SIRET</strong> : 999 226 772 00013
            </li>
            <li>
              <strong>Hébergement du site</strong> : o2switch, chemin des
              Pardiaux, 63000 Clermont-Ferrand, France.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            2. INFORMATIONS PROFESSIONNELLES
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong>Assurance</strong> : Responsabilité Civile Professionnelle
              (RC Pro) souscrite auprès de ORUS (Contrat n° RCPH278507216).
            </li>
            <li>
              <strong>Certification</strong> : Titulaire de l&apos;ACACED
              (Attestation de Connaissances pour les Animaux de Compagnie
              d&apos;Espèces Domestiques) n° 2025/b58a-64dc.
            </li>
            <li>
              <strong>Médiateur de la consommation</strong> : MEDIAVET
              (https://mediavet.net) - Convention MEDIAVET-D-26-5548.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            3. PROPRIÉTÉ INTELLECTUELLE
          </h2>
          <p className="text-muted-foreground">
            L&apos;ensemble du contenu de ce site (textes, logos, photographies
            d&apos;animaux, graphismes) est la propriété exclusive de A VOS
            PAPATTES, sauf mention contraire. Toute reproduction ou
            représentation, totale ou partielle, est interdite sans autorisation
            préalable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            4. PROTECTION DES DONNÉES PERSONNELLES / RGPD
          </h2>
          <p className="text-muted-foreground mb-4">
            Les informations recueillies via les formulaires de contact ou de
            réservation sont utilisées uniquement pour la gestion de vos
            demandes de garde.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong>Droit d&apos;accès</strong> : Conformément à la loi «
              Informatique et Libertés », vous pouvez exercer votre droit
              d&apos;accès, de rectification ou de suppression de vos données en
              contactant : contact@avospapattes.fr
            </li>
            <li>
              <strong>Finalité</strong> : Vos données ne sont jamais cédées ou
              vendues à des tiers.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            5. COOKIES
          </h2>
          <p className="text-muted-foreground">
            Le site peut utiliser des cookies pour améliorer l&apos;expérience
            utilisateur et réaliser des statistiques de visite. Vous pouvez
            configurer votre navigateur pour les refuser.
          </p>
        </section>
      </div>
    </main>
  );
}
