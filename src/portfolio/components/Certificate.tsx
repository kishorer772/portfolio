import Text, { BoldText } from '../../components/Text';
import { ICertificateProps } from './Certifications';
import { FaChevronRight } from 'react-icons/fa';
export default function Certificate(props: ICertificateProps) {
  return (
    <div className="shadow p-10 space-y-2 hover:shadow-lg hover:bg-gray-100">
      <BoldText>{props.from}</BoldText>
      <Text>{props.name}</Text>
      <Text>{props.issuedOn}</Text>

      <button className="flex items-center justify-end gap-2 bg-blue-300 hover:bg-blue-400 duration-500 px-3 py-2 rounded-lg hover:text-white">
        <span>View</span>
        <FaChevronRight />
      </button>
    </div>
  );
}
