// src/App.jsx
import styled from "styled-components";
import "./App.css";
import {
  AbvMultiSelectDropdown,
  AbvOption,
} from "./libs/ui/components/atoms/MultiselectOption";
import { useState } from "react";
import { AbvAccordion } from "./libs/ui/components/atoms/Accordion";
import { AbvNotification } from "./libs/ui/components/atoms/Notification";
import { AddToastParams, useToast } from "./libs/ui/components/atoms/Toast";
import { Card } from "./libs/ui/components/atoms/Card";
import { AbvButton } from "./libs/ui/components/atoms/Button";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: blue;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

function App() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const { addToast } = useToast();
  const handleChange = (selected: string[]) => {
    setSelectedValues(selected);
  };
  const handleClose = () => {
    alert('Notification closed');
  };

  const showToast = ({ type, message, content}: AddToastParams )=> {
    addToast({type, message, content});
  };
  return (
    <Container>
      <AbvButton  
        label="Hola" 
        // size='large' 
        // type='primary' 
        onClick={() => alert('Button clicked!')} 
        className='pink-bg'
      />

      <AbvMultiSelectDropdown
        selectedValues={selectedValues}
        onChange={handleChange}
      >
        <AbvOption value="1" label="Option 1" />
        <AbvOption value="2" label="Option 2" />
        <AbvOption value="3" label="Option 3" />
      </AbvMultiSelectDropdown>

      <AbvAccordion>
        <AbvAccordion.Item title="Section 1">
          This is the content for section 1.
        </AbvAccordion.Item>
        <AbvAccordion.Item title="Section 2">
          This is the content for section 2.
        </AbvAccordion.Item>
        <AbvAccordion.Item title="Section 3">
          This is the content for section 3.
        </AbvAccordion.Item>
      </AbvAccordion>

      {/* <AbvAbvNotificationItem message="Alexander" type="error"/> */}

      {/* <AbvNotification type="success" onClose={handleClose}>
        <AbvNotification.Icon>✅</AbvNotification.Icon>
        <AbvNotification.Content>Operation completed successfully!</AbvNotification.Content>
        <AbvNotification.Actions>
          <button>Undo</button>
        </AbvNotification.Actions>
      </AbvNotification>

      <AbvNotification type="error" onClose={handleClose}>
        <AbvNotification.Icon>❌</AbvNotification.Icon>
        <AbvNotification.Content>Something went wrong!</AbvNotification.Content>
        <AbvNotification.Actions>
          <button>Retry</button>
        </AbvNotification.Actions>
      </AbvNotification>

      <AbvNotification type="warning" onClose={handleClose}>
        <AbvNotification.Icon>⚠️</AbvNotification.Icon>
        <AbvNotification.Content>This is a warning!</AbvNotification.Content>
        <AbvNotification.Actions>
          <button>Ignore</button>
        </AbvNotification.Actions>
      </AbvNotification>

      <AbvNotification type="info" onClose={handleClose}>
        <AbvNotification.Icon>ℹ️</AbvNotification.Icon>
        <AbvNotification.Content>Here is some information.</AbvNotification.Content>
      </AbvNotification> */}

      <button onClick={() => showToast( 
        { type: 'custom', 
          content: 
            <AbvNotification type="info" onClose={handleClose}>
              <AbvNotification.Icon>ℹ️</AbvNotification.Icon>
            <AbvNotification.Content>Here is some information.</AbvNotification.Content>
      </AbvNotification>}
      )}>
        Show Alexadner</button>
      <button onClick={() => showToast({type:'error', message: 'This is an error message!'})}>Show Error Toast</button>
      <button onClick={() => showToast({type:'info', message:'This is an info message!'})}>Show Info Toast</button>
      <button onClick={() => showToast({type:'warning', message:'This is a warning message!'})}>Show Warning Toast</button>

      <button onClick={() => showToast({type:'custom', 
          content: <AbvNotification type="success" onClose={handleClose}>
          <AbvNotification.Icon>✅</AbvNotification.Icon>
          <AbvNotification.Content>Operation completed successfully!</AbvNotification.Content>
        </AbvNotification>
      })}>Show Warning Toast</button>
    
    <Card style={{ maxWidth: "300px" }}>
    <Card.Header>
      <Card.Title>Titulo del Card</Card.Title>
      <Card.Subtitle>Subtítulo del Card</Card.Subtitle>
    </Card.Header>
    <Card.Image 
      image="https://images.unsplash.com/photo-1718002127392-92a7eef514ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8https://example.com/image.jpg" 
      alt="Descripción de la imagen" 
      imagePosition="full"
    />
    <Card.Content>
      <p>Contenido del card...</p>
    </Card.Content>
    <Card.Footer>
      <AbvButton  
        label="Hola" 
        // size='large' 
        // type='primary' 
        onClick={() => alert('Button clicked!')} 
        className='pink-bg'
      />
      <button>Acción 2</button>
    </Card.Footer>
  </Card>
    </Container>
  );
}

export default App;
