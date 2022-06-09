import 'openapi-explorer';
import './App.css';

export default function App() {
  return (
      <openapi-explorer
        spec-url="http://localhost:3000/test.json"
        nav-bg-color="#732282" text-color="#555555"
        secondary-color="#f3e5f5" />
  );
}
