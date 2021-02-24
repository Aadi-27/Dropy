# Drag and Drop Files

This is a simple library for dragging and dropping files in your project using drag and drop HTML5 API.

| Dependency | Version         |
| ---------- | --------------- |
| react      | at least 16.0.0 |
| react-dom  | at least 16.0.0 |
| prop-types | at least 15.6.0 |

## Basic usage

### Installation

```
 npm install dropy
```

### Example

```jsx
import React from "react";
import Dropy from "dropy";

function App() {
  const droppedFiles = (file) => {
    console.log(file);
  };

  return <Dropy getFiles={droppedFiles} />;
}

export default App;
```
