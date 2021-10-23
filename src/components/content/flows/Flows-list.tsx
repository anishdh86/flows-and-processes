import { Flow } from '../../../shared/interfaces/flow';
import FlowItem from './flow/Flow'

interface FlowProps {
  flows:  Flow[];
}

const FlowsList: React.FC<FlowProps> = ({flows}: FlowProps) => {
  return (
    <>
    <h4>Flows</h4>
    <p>
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <p>
      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </p>
    <div className="d-flex">
      {flows?.map(
          flow => <FlowItem key={flow.id} name={flow.name} />
      )}
    </div>
    </>
  )
}

export default FlowsList;