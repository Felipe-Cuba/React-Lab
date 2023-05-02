import './tea-gathering-component.css';

const Cup = ({ guest }) => {
  return <h2>Tea cup for guest #{guest}</h2>;
};

const TeaGathering = () => {
  let cups = [];
  for (let i = 1; i <= 5; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }

  return cups
};

export default TeaGathering;
