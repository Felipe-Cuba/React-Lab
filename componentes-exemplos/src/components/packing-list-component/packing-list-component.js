import './packing-list-component.css';

const Item = ({ name, isPacked }) => {
  let content = isPacked ? <del> {`${name} ✓`} </del> : name;

  return <li className="Item">{content}</li>;
};

const PackingList = () => {
  return (
    <section className="container-packing-list">
      <h1> Sally Ride's Packing List</h1>
      <ul className="list">
        <Item isPacked={true} name="Space Suit" />
        <Item isPacked={false} name="Helmet with a golden leaf" />
      </ul>
    </section>
  );
};

export default PackingList;
