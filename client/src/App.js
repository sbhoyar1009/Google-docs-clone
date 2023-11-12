import TextEditor from "./TextEditor";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { v4 as uuid4 } from "uuid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/documents/:id" element={<TextEditor />} />
        <Route path="/" exact element={<Navigate to={`/documents/${uuid4()}`} />} />

      </Routes>
    </Router>



  )
}

export default App;
