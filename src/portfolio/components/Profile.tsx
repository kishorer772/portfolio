import Chip from '../../components/Chip';
import { BoldText } from '../../components/Text';
import { CiMail } from 'react-icons/ci';
import { CiMobile1 } from 'react-icons/ci';
import profileImg from '../../assets/images/IMG_1360.jpg';
import MediaLink from '../../components/MediaLink';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { CgWorkAlt } from 'react-icons/cg';
export interface IProfileProps {
  name: string;
  qualifications: string[];
  experience: string;
  email: string;
  mobile: number;
}

export default function Profile(props: IProfileProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-red-300 p-10  rounded-lg">
      <div className="profile-img w:1/2 lg:w-1/3  h-[30vh] md:h-[40vh] flex justify-center items-center">
        <img
          src={profileImg}
          alt=""
          className=" max-w-full max-h-full object-cover  rounded-[50%]"
        />
      </div>
      <div className="profile-section lg:2/3 space-y-3">
        <BoldText>{props.name}</BoldText>
        <Chip list={props.qualifications} />
        <div className="flex items-center gap-2">
          <CgWorkAlt className="text-2xl" />
          <p>{props.experience} Experience</p>
        </div>
        <div className="flex items-center  gap-2">
          <CiMail className="text-2xl" /> <p>{props.email}</p>
        </div>
        <div className="flex items-center  gap-2">
          <CiMobile1 className="text-2xl" />
          <p>{props.mobile}</p>
        </div>
        <MediaLink
          title="Linkedin"
          url="https://www.linkedin.com/in/kishore-puthalapattu-33075113b/"
        >
          <CiLinkedin className="text-2xl" />
        </MediaLink>
        <MediaLink title="Github" url="https://www.github.com/kishorer772/">
          <FaGithub className="text-2xl" />
        </MediaLink>
      </div>
    </div>
  );
}
