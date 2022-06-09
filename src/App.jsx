import 'openapi-explorer';
import './App.css';

export default function App() {
  return (
      <openapi-explorer spec-url="http://localhost:3000/test.json" />
  );
}
