import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [person, setPerson] = useState(0);
  const { name, job, image, text } = people[person];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else {
      if (number < 0) {
        return people.length - 1;
      }
    }
    return number;
  };

  const nextPerson = () => {
    setPerson((currentPerson) => {
      const newPerson = currentPerson + 1;

      return checkNumber(newPerson);
    });
  };
  const prevPerson = () => {
    setPerson((currentPerson) => {
      const newPerson = currentPerson - 1;

      return checkNumber(newPerson);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === person) {
      randomNumber = person + 1;
    }
    setPerson(checkNumber(randomNumber));
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
