import { AvatarCard } from '@/components/index';
import {
  alfonzoSchuessler,
  augustinaMidgett,
  bryanMckinney,
  clintonMcclure,
  darronKulikowski,
  darylNehls,
  kyleeDanford,
  lauraleeQuintero,
  lavernLaboy,
  rodolfoGoode,
  sanjuanitaOrdonez,
  williamPurnell,
} from '@/assets/index';

const teamData = [
  {
    avatarImg: sanjuanitaOrdonez.src,
    name: 'Sanjuanita Ordonez',
    role: 'Co-Founder',
  },

  {
    avatarImg: augustinaMidgett.src,
    name: 'Augustina Midgett',
    role: 'Chief Marketing Officer',
  },
  {
    avatarImg: clintonMcclure.src,
    name: 'Clinton McClure',
    role: 'Chief Technology Officer',
  },
  {
    avatarImg: alfonzoSchuessler.src,
    name: 'Alfonzo Schuessler',
    role: 'Head of Product',
  },
  {
    avatarImg: rodolfoGoode.src,
    name: 'Rodolfo Goode',
    role: 'Head of Customer Relations',
  },
  {
    avatarImg: bryanMckinney.src,
    name: 'Bryan McKinney',
    role: 'Head of Design',
  },

  {
    avatarImg: darronKulikowski.src,
    name: 'Darron Kulikowski',
    role: '3D Designer',
  },
  {
    avatarImg: darylNehls.src,
    name: 'Daryl Nehls',
    role: 'Senior Frontend Engineer',
  },
  {
    avatarImg: kyleeDanford.src,
    name: 'Kylee Danford',
    role: 'Graphic Designer',
  },
  {
    avatarImg: williamPurnell.src,
    name: 'William Purnell',
    role: 'Software Engineer',
  },
  {
    avatarImg: lauraleeQuintero.src,
    name: 'Lauralee Quintero',
    role: 'Chief Account Manager',
  },
  {
    avatarImg: lavernLaboy.src,
    name: 'Lavern Laboy',
    role: 'Legal Advisor',
  },
];

const TeamCards = () => {
  return (
    <section className="pt-10 pb-20 px-10">
      <h2 className="font-semibold tracking-tight text-3xl md:text-4xl pb-10">
        Meet the team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11">
        {teamData.map((teamMember, index) => (
          <AvatarCard key={index} {...teamMember} />
        ))}
      </div>
    </section>
  );
};

export default TeamCards;
