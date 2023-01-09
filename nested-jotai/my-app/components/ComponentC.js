import { useAtom } from 'jotai';
import { countAtom } from '../store';

export default function ComponentC(){
  console.log("Rendering Component C");

  const [count, setCount] = useAtom(countAtom);

  return (
    <>
      Component C<br />
      <button onClick={e => setCount(n => n + 1) }>Increase Value</button>
    </>
  );
}