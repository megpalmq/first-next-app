"use client";
import homeStyles from "@/app/page.module.css";

export default function Home() {
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
          <li><a href="/about">About</a></li>
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
      <hr></hr>
      <div className={homeStyles.product}>
        <h2>Tofu</h2>
        <p>This is 100% tofu</p>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/1d1c83da-7e31-4e77-916f-96faf7003173/d2z2tzw-033be9ea-1aee-4a43-bb37-12a615824631.png/v1/fit/w_700,h_700,q_70,strp/a_can_of_spam_by_zellfaze_d2z2tzw-375w-2x.jpg" alt="spam"></img>
      </div>

      
      <div className={homeStyles.product}>
        <h2>Tofu</h2>
        <p>This is 100% tofu</p>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/1d1c83da-7e31-4e77-916f-96faf7003173/d2z2tzw-033be9ea-1aee-4a43-bb37-12a615824631.png/v1/fit/w_700,h_700,q_70,strp/a_can_of_spam_by_zellfaze_d2z2tzw-375w-2x.jpg" alt="spam"></img>
      </div>
    </main>
  );
} 