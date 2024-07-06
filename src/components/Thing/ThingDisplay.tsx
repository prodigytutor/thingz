// components/ThingDisplay.tsx

import { Thing } from '../../interfaces/thingz';


interface ThingDisplayProps {
  thing: Thing;
}

const ThingDisplay: React.FC<ThingDisplayProps> = ({ thing }) => {
  switch (thing.type) {
    case 'note':
      return <div>{thing.content}</div>;
    case 'password':
      return <div>*******</div>; // Never display password directly
    case 'date':
      return <div>{thing.date.toDateString()}</div>;
    case 'encryptedText':
      return <div>{thing.encryptedContent}</div>;
    case 'website':
      return (
        <div>
          <a href={thing.url}>{thing.title}</a>
          {thing.description && <p>{thing.description}</p>}
        </div>
      );
    case 'codeSnippet':
      return (
        <pre>
          <code>{thing.code}</code>
        </pre>
      );
    default:
      return null;
  }
};

export default ThingDisplay;
