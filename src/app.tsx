import { useScramble } from "use-scramble";

export function App() {
  const { ref: titleText } = useScramble({
    text: "Guevoncitos Open Source",
  });

  const { ref: descriptionText } = useScramble({
    text: "Community of friends and students from the University of Santiago, Chile, looking to collaborate on impactful projects!",
  });

  return (
    <main class="max-w-3xl mx-auto">
      <section class="h-screen grid place-content-center text-center space-y-4">
        <h1 class="text-4xl font-bold text-neutral-400" ref={titleText}></h1>
        <p class="text-2xl" ref={descriptionText}></p>
      </section>
      <nav class="flex justify-between p-6 top-0 sticky bg-neutral-900/90">
        <h2 class="text-neutral-400 font-bold">Guevoncitos Open Source</h2>
        <ul class="flex gap-4">
          <li>About</li>
          <li>Projects</li>
          <li>Internships</li>
        </ul>
      </nav>
      <section class="h-screen p-6">
        <h3 class="text-neutral-400 font-semibold">About Guevoncitos</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          reprehenderit porro mollitia praesentium rem ducimus? Dolor nihil
          voluptates fuga in veritatis laboriosam hic placeat iure inventore.
          Debitis sint ipsa officiis.
        </p>
      </section>
    </main>
  );
}
