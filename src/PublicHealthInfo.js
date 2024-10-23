import React from 'react';
import './PublicHealthInfo.module.scss'; // Sass module for styling

const PublicHealthInfo = () => {
  return (
    <div className="container">
      <header className="header">
        <h2>Featured Health Topics</h2>
      </header>
      <section className="health-topics">
        <article className="card">
          <h3>COVID-19 Updates</h3>
          <p>Stay informed about the latest COVID-19 guidelines and vaccination information.</p>
          <button className="learn-more">Learn More</button>
        </article>
        <article className="card">
          <h3>Heart Health</h3>
          <p>Discover tips and information for maintaining a healthy heart and cardiovascular system.</p>
          <button className="learn-more">Learn More</button>
        </article>
        <article className="card">
          <h3>Mental Wellness</h3>
          <p>Explore resources and support options for maintaining good mental health.</p>
          <button className="learn-more">Learn More</button>
        </article>
        <article className="card">
          <h3>Nutrition & Diet</h3>
          <p>Learn about balanced nutrition and healthy eating habits for overall wellbeing.</p>
          <button className="learn-more">Learn More</button>
        </article>
      </section>
    </div>
  );
};

export default PublicHealthInfo;
