import Card from "../Card";

function Skills({ skills }) {

  const habilidades = [
    {
      titulo: "HTML",
      nives: "HA HA HA",
      tempo: "40meses",
      color: "blue",
      ImagemIcone: "/assets/imagem"
    },
    {
      titulo: "Node",
      nives: "quase trancando",
      tempo: "2dias",
      color: "red"
    },
    {
      titulo: "PYTHON",
      nives: "DESISTE",
      tempo: "-2dias",
      color: "pink"
    }
  ]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card dados={habilidades} />
    </div>
  );
}

export default Skills;