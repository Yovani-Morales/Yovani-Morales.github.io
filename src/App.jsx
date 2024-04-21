import { useEffect } from "react";

function App() {
  useEffect(() => {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'src/assets/particlesJS/particles.config.json');
  }, []);

  return (
    <>
      <div id="particles-js" className="w-screen h-screen fixed top-0 -z-10"></div>
      <div className="bg-red-500">
        <h1>Hello World</h1>
      </div>
    </>
  )
}

export default App;
