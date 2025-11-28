import { Link } from "react-router-dom";

const people = [
  {
    id:"leslie-alexander",
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    department: 'Executive',
    location: 'San Francisco, CA',
    experience: '12 years',
    skills: ['Leadership', 'Business Strategy', 'Public Speaking'],
    email: 'leslie.alexander@company.com',
    linkedin: 'https://linkedin.com/in/leslie-alexander',
    bio: 'Leslie leads the company vision, strategy, and global operations.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id:"michael-foster",
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    department: 'Engineering',
    location: 'New York, NY',
    experience: '10 years',
    skills: ['System Architecture', 'Cloud Computing', 'DevOps'],
    email: 'michael.foster@company.com',
    linkedin: 'https://linkedin.com/in/michael-foster',
    bio: 'Michael oversees the engineering team and builds scalable tech.',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id:"dries-vincent",
    name: 'Dries Vincent',
    role: 'Business Relations',
    department: 'Partnerships',
    location: 'Chicago, IL',
    experience: '8 years',
    skills: ['Negotiation', 'Client Relationship', 'Communication'],
    email: 'dries.vincent@company.com',
    linkedin: 'https://linkedin.com/in/dries-vincent',
    bio: 'Dries builds and manages key business partnerships worldwide.',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id:"lindsay-walton",
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    department: 'Engineering',
    location: 'Austin, TX',
    experience: '5 years',
    skills: ['React', 'Tailwind CSS', 'UI/UX'],
    email: 'lindsay.walton@company.com',
    linkedin: 'https://linkedin.com/in/lindsay-walton',
    bio: 'Lindsay specializes in building beautiful and responsive user interfaces.',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id:"courtney-henry",
    name: 'Courtney Henry',
    role: 'Designer',
    department: 'Design',
    location: 'Seattle, WA',
    experience: '6 years',
    skills: ['Figma', 'Branding', 'Illustration'],
    email: 'courtney.henry@company.com',
    linkedin: 'https://linkedin.com/in/courtney-henry',
    bio: 'Courtney creates designs that define the company’s visual identity.',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 'tom-cook',
    name: 'Tom Cook',
    role: 'Director of Product',
    department: 'Product',
    location: 'Los Angeles, CA',
    experience: '9 years',
    skills: ['Product Strategy', 'Market Research', 'Agile Planning'],
    email: 'tom.cook@company.com',
    linkedin: 'https://linkedin.com/in/tom-cook',
    bio: 'Tom drives the product roadmap and aligns customer needs with business goals.',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Team() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            We’re a dynamic group of individuals who are passionate about what we do.
          </p>
        </div>

        {/* LIST */}
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:col-span-2">
          {people.map((person) => ( <li key={person.id}>
              <Link to={`/team/${person.id}`}>
                <div className="flex items-center gap-x-6 cursor-pointer hover:bg-gray-800/40 p-3 rounded-xl">
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="size-16 rounded-full outline outline-white/10"
                  />
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400">
                      {person.role}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Export people so details page can access them
export { people };