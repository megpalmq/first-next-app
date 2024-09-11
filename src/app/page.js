"use client";
import homeStyles from "@/app/page.module.css";

export default function home() {
  const headerStyle = {
    backgroundColor: "pink",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  function openModal() {
    console.log("open");
  }

  const myName = "Meggimoo";

  const farmAnimals = [
    "seal",
    "polar-bear",
    "koala",
    "panda",
  ];

  const person = {
    name: "megan",
    hairColor: "brown",
    eyeColor: "blue",
  };

  const number = [
    "hemi",
    "demi",
    "semi",
  ];

  const isTuesday = false;

  return (
    <main>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <h1 style={headerStyle}>Next.js App</h1>
      <p className={homeStyles.callout}>
        This is a very sunny day today. Luckily, I am not feeling so tired. Maybe I will spend more time outside. Signing off, {myName}.
      </p>
      <p>Array of farm Animals: {farmAnimals.join(', ')}</p>
      <p>Person: {JSON.stringify(person)}</p>
      <p>Times Ty said: {number.join(', ')}</p>
      <p>Is it Tuesday: {String(isTuesday)}</p>
      <button onClick={openModal}>View Sun</button>
    </main>
  );
} 