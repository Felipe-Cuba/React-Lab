import { useState } from 'react';
import './accordion-component.css';

export default function AccordionComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="accordion-container">
      <h2 className="accordion-title">One Piece</h2>
      <Panel
        title="Sobre"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        One Piece é um popular mangá e anime japonês criado por Eiichiro Oda. A
        história segue as aventuras do protagonista Monkey D. Luffy e sua
        tripulação, os Piratas do Chapéu de Palha, em busca do tesouro lendário
        conhecido como One Piece. O mangá e o anime têm conquistado fãs em todo
        o mundo devido à sua narrativa envolvente, personagens cativantes e
        emocionantes batalhas entre piratas.
      </Panel>
      <Panel
        title="Etimologia"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        O nome "One Piece" se refere ao tesouro cobiçado pelos piratas na
        história. É dito que aquele que encontrar o One Piece se tornará o Rei
        dos Piratas. A busca pelo One Piece é um dos principais temas da trama e
        motiva o protagonista e sua tripulação a enfrentar desafios perigosos e
        explorar ilhas desconhecidas em busca da recompensa final.
      </Panel>
    </div>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className={`panel ${isActive ? 'active' : ''}`}>
      <h3 className="panel-title">{title}</h3>
      {isActive ? (
        <p className="panel-content">{children}</p>
      ) : (
        <button onClick={onShow}>Mostrar</button>
      )}
    </section>
  );
}
