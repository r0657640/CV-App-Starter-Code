const About = () => {
  return (
    <div className="min-h-screen p-8 dark:bg-black dark:text-white max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Over mij</h1>

      {/* Foto en tekst side-by-side op grotere schermen */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
        {/* Foto met verticale lijn ernaast */}
        <div className="relative">
          <img
            src="/images/ngvgh.jpg"
            alt="Pingpong spelen"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
          {/* Verticale lijn naast de foto op md+ schermen */}
          <div className="hidden md:block absolute top-0 right-[-20px] h-full w-[2px] bg-gray-300 dark:bg-gray-600"></div>
        </div>

        {/* Intro tekst naast de foto */}
        <div className="md:flex-1 text-center md:text-left">
          <h2 className="text-3xl font-semibold">🏓 Pingpong</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Pingpong is voor mij meer dan een hobby. Ik speel het recreatief omdat het me helpt om te ontspannen en fit te blijven. Daarnaast geef ik training aan de allerjongste jeugd. Het begeleiden van kinderen en hen zien groeien in de sport geeft me veel voldoening. Het stimuleert niet alleen hun motoriek, maar ook het samenwerken en doorzettingsvermogen.
          </p>
        </div>
      </div>

      {/* Horizontale lijn */}
      <hr className="border-gray-300 dark:border-gray-700 mb-10" />

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 dark:border-gray-600 pb-2">
          🌿 Interesse in de natuur
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          De natuur heeft altijd mijn interesse gehad. Ik heb 6 jaar leiding gegeven bij de JNM (Jeugdbond voor Natuur en Milieu), waar ik veel geleerd heb over natuurbeheer en milieubewustzijn. Tijdens mijn tijd bij de JNM heb ik kampen georganiseerd, jongeren begeleid en ze bewust gemaakt van hun impact op het milieu. Deze ervaring heeft mijn passie voor duurzaamheid en natuurbehoud alleen maar versterkt.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Buiten mijn werk en studies breng ik graag tijd door in de natuur: wandelen, fietsen en gewoon genieten van de rust en schoonheid van onze omgeving. Ik geloof dat een goede balans tussen mens en natuur essentieel is voor onze toekomst.
        </p>
      </section>

      {/* Nog een horizontale lijn onderaan */}
      <hr className="border-gray-300 dark:border-gray-700 mt-10" />
    </div>
  );
};

export default About;

