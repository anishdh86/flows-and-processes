import React from "react";

import Card from "../../../UI/card/Card";
import { Flow } from "../../../../shared/interfaces/flow";

const FlowItem: React.FC<Flow> = ({id, name}: Flow) => {
  return (
    <Card>
      <h5>{name}</h5>
    </Card>
  )
}
export default FlowItem;