import { BoldText } from '../components/Text';
import Projects from './components/ProjectList';
import Certifications from './components/Certifications';
import Sections from '../components/Section';
import Profile from './components/Profile';
import projects from '../projects.json';
import certificates from '../certifications.json';
import profile from '../profile.json';
import Stack from './components/Stack';
// const projects = import('../projects.json');
console.log('projects:', projects);
export default function Portfolio() {
  return (
    <div className=" shadow  lg:w-4/5 w-full mx-auto bg-white p-5 lg:p-10">
      <BoldText>Portfolio</BoldText>
      <Profile {...profile} />
      <Sections title="Projects">
        {projects && <Projects projects={projects} />}
      </Sections>
      <Sections title="Stack">
        <Stack />
      </Sections>
      <Sections title="Certifications">
        <Certifications certificates={certificates} />
      </Sections>
    </div>
  );
}
