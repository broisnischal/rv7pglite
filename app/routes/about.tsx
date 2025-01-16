import { useEffect, useRef } from "react";

export default function About() {

  const worker = useRef<Worker>(null);


  useEffect(() => {

    if (!worker.current) {
      // Create the worker if it does not yet exist.
      worker.current = new Worker(new URL('./worker.js', import.meta.url), {
        type: 'module'
      });
    }

    // Create a callback function for messages from the worker thread.
    const onMessageReceived = (e) => {
      // TODO: Will fill in later
    };

    // Attach the callback function as an event listener.
    worker.current.addEventListener('message', onMessageReceived);
    // Define a cleanup function for when the component is unmounted.
    return () => worker.current?.removeEventListener('message', onMessageReceived);
  }, []);



  return (
    <div>
      <h1>About</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, labore
        fuga. Eius repellat harum accusamus. Amet expedita, nobis doloribus
        vitae fuga, vel cupiditate itaque, id deleniti blanditiis ex odit
        laudantium non hic autem. Atque mollitia tenetur sunt, sint ad assumenda
        illum.
      </p>
    </div>
  );
}
