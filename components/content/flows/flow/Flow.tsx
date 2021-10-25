import React from "react";

import Card from "../../../UI/card/Card";
import { Flow } from "../../../../shared/interfaces/flow";

const FlowItem: React.FC<Flow> = ({id, name}: Flow) => {
  const handleClick = (linkId: number | undefined) => {
    console.log(linkId);
  }

  return (
    <Card className="col-4">
      <h5>{name}</h5>
      <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
      <button type="button"
        className="btn btn-secondary"
        onClick={() => handleClick(id)}>
        Show details
      </button>
    </Card>
  )
}
export default FlowItem;