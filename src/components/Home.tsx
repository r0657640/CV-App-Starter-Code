const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
      <main className="flex flex-col max-w-[1000px] gap-10 p-5 md:mx-10 md:py-14">


        {/* Experience */}
        <section className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">Ervaring</h1>
          <ul className="space-y-6 border-l pl-6">
            <li className="relative">
              <span className="absolute left-[-12px] top-1.5 h-3 w-3 rounded-full bg-black dark:bg-white"></span>
              <span className="font-semibold md:text-lg">Bijlesgever Wiskunde</span><br />
              <span className="text-sm text-gray-400">Heist-op-den-Berg – 2017</span><br />
              <span className="text-sm">Begeleiden van studeren, extra oefeningen voorzien, uitleg geven…</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-15px] top-1.5 h-3 w-3 rounded-full bg-black dark:bg-white"></span>
              <span className="font-semibold md:text-lg">Monitor</span><br />
              <span className="text-sm text-gray-400">Idee Kids, Free Time – 2018–2022</span><br />
              <span className="text-sm">Kampen opstellen/begeleiden, contact met ouders onderhouden…</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-15px] top-1.5 h-3 w-3 rounded-full bg-black dark:bg-white"></span>
              <span className="font-semibold md:text-lg">Conciërge Invaller</span><br />
              <span className="text-sm text-gray-400">Vlaamse overheid – 2019–2021</span><br />
              <span className="text-sm">Gebouw openen/sluiten, verantwoordelijk voor beveiliging ’s avonds</span>
            </li>
            <li className="relative">
              <span className="absolute left-[-15px] top-1.5 h-3 w-3 rounded-full bg-black dark:bg-white"></span>
              <span className="font-semibold md:text-lg">Inpakker / Lijnverantwoordelijke</span><br />
              <span className="text-sm text-gray-400">Cosmade – 2022–heden</span><br />
              <span className="text-sm">Inpakken en controleren van cosmetica en voeding</span>
            </li>
          </ul>
        </section>

                       {/* Education */}
<section className="space-y-5">
  <h1 className="text-2xl font-bold md:text-4xl">Opleiding</h1>
  <ul className="space-y-6 border-l pl-6">
    <li className="relative">
      <span className="absolute left-[-15px] top-1.5 h-3 w-3 rounded-full bg-black dark:bg-white"></span>
      <span className="font-semibold md:text-lg">   Techniek-Wetenschappen</span><br />
      <span className="text-sm text-gray-400">  Heilig-Hartcollege Heist-op-den-Berg – 2010–2016</span>
    </li>
    <li className="relative">
      <span className="absolute left-[-15px] top-1.5 h-3 w-3 rounded-full bg-black dark:bg-white"></span>
      <span className="font-semibold md:text-lg">   Leerkracht Secundair Onderwijs</span><br />
      <span className="text-sm text-gray-400">  Aardrijkskunde/Biologie – 2016–2019 (niet afgerond)</span>
    </li>
    <li className="relative">
      <span className="absolute left-[-15px] top-1.5 h-3 w-3 rounded-full bg-black dark:bg-white"></span>
      <span className="font-semibold md:text-lg">   Bachelor Orthopedagogie</span><br />
      <span className="text-sm text-gray-400">  2019–2021 (niet afgerond)</span>
    </li>
    <li className="relative">
      <span className="absolute left-[-15px] top-1.5 h-3 w-3 rounded-full bg-black dark:bg-white"></span>
      <span className="font-semibold md:text-lg">   Graduaat Programmeren</span><br />
      <span className="text-sm text-gray-400">2021–heden</span>
    </li>
  </ul>
</section>

        {/* Skills */}
        <section className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Professioneel</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Mensen een luisterend oor bieden</li>
                <li>Probleemoplossend denken</li>
                <li>Knopen doorhakken</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Persoonlijk</h3>
              <ul className="list-disc ml-5 text-sm">
                <li>Geduldig</li>
                <li>Goedlachs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Languages & Programming */}
        <section className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">Talen</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold">Talen</h3>
              <ul className="list-disc ml-5">
                <li>Nederlands: moedertaal</li>
                <li>Engels: basis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Programmeertalen</h3>
              <ul className="list-disc ml-5">
                <li>Beginselen HTML, CSS, SQL, TypeScript, C#</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">Uit de opleiding</h1>
          <ul className="list-disc ml-5 text-sm">
            <li>OOP programmeren</li>
            <li>MVC-framework</li>
            <li>React</li>
            <li>WordPress</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
