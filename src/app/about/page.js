"use client"

import homeStyles from"@/app/page.module.css"
import aboutStyles from"@/app/about/about.module.css"
export default function About(){
    return(
        <main>
        <nav className={homeStyles.homeNav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <section>
        <h2>Meg Stone</h2>
        <h3>Interests</h3>
        <ul className="aboutStyles.interestList">
            <li>coding</li>
            <li>gym</li>
            <li>FNAF</li>
            <li>fashion</li>
            <li>Pad See Ew </li>
        </ul>
        </section>
        </main>
    );
}