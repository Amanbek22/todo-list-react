import "./Header.css"


export function Header(props) {
  const result = props.state.filter((item) => item.status)
  return (
    <header className="Header_wrapper">
        Todos ({result.length} / {props.state.length})
    </header>
  );
}
