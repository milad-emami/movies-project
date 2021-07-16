import React, { useState, useEffect } from "react";
import { Divider, Spin } from "antd";
import "./Tab2.css";

const Tab2 = ({ id }) => {
  const [movieReview, setMovieReview] = useState();
  const [loading, setLoding] = useState(false);
  useEffect(() => {
    setLoding(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=293a7d3b6bf12a19fa75475364fcbd0f&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovieReview(data))
      .finally(() => setLoding(false));
  }, []);

  return !movieReview ? (
    <Spin spinning={loading}></Spin>
  ) : (
    <div className="grid-container">
      <img
        alt="pic"
        src="https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg"
        className="icon"
      />
      {console.log(movieReview, "movierevie")}
      <div className="auther">msbreviews</div>
      <div className="rate">rating: 7</div>
      <div className="date">2021-05-06T21:57:02.367Z</div>
      <div className="footer">
        If you enjoy reading my Spoiler-Free reviews, please follow my blog @
        https://www.msbreviews.com Some people really don't appreciate Guy
        Ritchie's style. His trademark fast-forward, HFR (high frame rate) type
        of action doesn't appeal to many viewers, and his nonlinear narrative
        structure is often more confusing than captivating. At least, these are
        the common complaints across his filmography. While I acknowledge that
        these attributes don't always work, I'm actually quite a fan of his
        filmmaking techniques. From his more recent work on Aladdin and The
        Gentlemen to his take on classic characters such as Sherlock Holmes and
        King Arthur: Legend of the Sword, I genuinely enjoy Ritchie's risky,
        divisive approach on the best way to tell a story. Going in completely
        blind to Wrath of Man, I honestly didn't have a good feeling. I expected
        a generic, hollow, forgettable action flick with a main actor who
        everyone has seen countless times in this genre. I just hoped it would
        be entertaining enough for me to have a decent couple of hours in front
        of the TV. Well, this movie might be 2021's best surprise to date! If
        Zack Snyder (Zack Snyder’s Justice League) is often criticized for his
        excessive use of slow-motion, Ritchie receives the exact same complaints
        but regarding his high-speed action scenes. This time, the latter leaves
        his well-known characteristics aside and proves that he's not a
        one-trick filmmaker. Impressively long, uncut takes - some reach the
        three-minute mark - help create a tremendously tense, suspenseful
        atmosphere throughout the entire runtime. Every scene is set up with
        patience and precise timing, making every single tiny movement from the
        camera and actors capture the audience's attention. Christopher
        Benstead's score is one of those examples that I will start giving
        people when they ask about impactful music in film. The heavy cello
        notes are incredibly ominous, establishing the mood of the whole
        environment in a way that will leave no viewer indifferent. Some of you
        might read the following as a critique, but the build-ups for each
        action scene steal the spotlight from the latter. With that said, the
        shootouts and overall action are entertaining and well-filmed, which I
        believe will please a vast majority of spectators. Jason Statham (The
        Meg, Hobbs & Shaw) delivers a one-dimensional performance that would
        feel disappointing in any other movie, but it works for this
        protagonist.
      </div>
      <Divider></Divider>
    </div>
  );
};

export default Tab2;
