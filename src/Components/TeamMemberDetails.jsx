import { useParams } from "react-router-dom";
import { people } from "./Team";

export default function TeamMemberDetails() {
  const { id } = useParams();

  // Find match inside data array
  const person = people.find((p) => p.id === id);

  // If no person found
  if (!person) {
    return <h1 className="text-white p-10">Member not found</h1>;
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white p-10">
      <div className="max-w-xl mx-auto text-center">
        <img
          src={person.imageUrl}
          alt={person.name}
          className="w-40 h-40 rounded-full mx-auto mb-6 outline outline-indigo-400/20"
        />

        <h1 className="text-3xl font-bold">{person.name}</h1>
        <p className="text-indigo-400 text-lg">{person.role}</p>

        <div className="mt-6 space-y-2 text-gray-300">
          <p><strong>Department:</strong> {person.department}</p>
          <p><strong>Location:</strong> {person.location}</p>
          <p><strong>Experience:</strong> {person.experience}</p>
          <p><strong>Email:</strong> {person.email}</p>
          <p><strong>Bio:</strong> {person.bio}</p>
        </div>

        <a
          href={person.linkedin}
          target="_blank"
          className="inline-block mt-6 text-indigo-400 underline"
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  );
}