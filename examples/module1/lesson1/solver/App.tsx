import { Button } from './components/Button';
import { Input } from './components/Input';
import { f1, f2, f3, f4 } from './functions';
import { useSolver } from './useSolver';

const App = () => {
  const {
    numA,
    numB,
    sum,
    handleSetNumA,
    handleSetNumB,
    isError,
    handleSubmit,
  } = useSolver();

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <Input value={numA} onChange={handleSetNumA} />
        <Input value={numB} onChange={handleSetNumB} />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button handleClick={() => handleSubmit(f1)}>+</Button>
        <Button handleClick={() => handleSubmit(f2)}>-</Button>
        <Button handleClick={() => handleSubmit(f3)}>*</Button>
        <Button handleClick={() => handleSubmit(f4)}>/</Button>
      </div>
      {isError === true ? <div>Invalid form</div> : <div>Result: {sum}</div>}
    </div>
  );
};

export default App;
