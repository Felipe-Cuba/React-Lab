import './toolbar-component.css';

function Button({ onClick, children }) {
  return (
    <button
      className="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function ToolbarComponent() {
  return (
    <div
      className="toolbar"
      onClick={() => {
        alert('Você clicou na barra de ferramentas!');
      }}
    >
      <Button
        className="toolbar-button"
        onClick={() => alert('Reproduzindo!')}
      >
        Reproduzir Filme
      </Button>
      <Button className="toolbar-button" onClick={() => alert('Enviando!')}>
        Enviar Imagem
      </Button>
    </div>
  );
}
