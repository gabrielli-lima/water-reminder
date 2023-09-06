function App() {
  return (
    <div className="container mx-auto w-3/5 mt-5">
      <header className="flex gap-2.5 mb-12">
        <div className="bg-[#322F40] rounded-full w-[60px] h-[60px]"></div>
        <div className="text-white">
          <h3 className="font-light">Boa tarde,</h3>
          <h3 className="font-semibold">Bem-vindo(a) 👋</h3>
        </div>
      </header>
      <div className="md:grid md:grid-cols-3 md:gap-12">
        <aside className="md:grid w-52 h-[350px] m-auto bg-[#7FC4ED] rounded-[20px]">
          <img src="src\assets\glass.svg" alt="" />
        </aside>
        <section className="col-span-2 bg-orange-500">Section</section>
      </div>
    </div>
  );
}

export default App;
