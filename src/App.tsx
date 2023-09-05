function App() {
  return (
    <div className="container mx-auto w-3/5 mt-5">
      
      <header className="bg-blue-500">Header</header>
      <div className="grid grid-cols-3 gap-12 my-5">
        <aside className="grid bg-green-500 justify-items-center">Aside</aside>
        <section className="col-span-2 bg-orange-500">Section</section>
      </div>
    </div>
  );
}

export default App;
