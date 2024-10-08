import Chip from '../../components/Chip';
import stack from '../../stack.json';
export default function Stack() {
  return (
    <div className="flex  gap-4 p-10 shadow">
      <Chip list={stack}></Chip>
    </div>
  );
}
