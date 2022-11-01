import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createUser, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION);

  const handleUser = (event: FormEvent) => {
    event.preventDefault();
    createUser({
      variables: {
        name,
        email,
      },
    });
    navigate("/event");
  };

  return (
    <div className="h-screen flex items-center bg-gradient-to-r from-gray-500 to-gray-900">
      <div className="px-24 w-full flex items-start justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <div className="flex items-center justify-start">
            <h1 className="block pr-3 text-2xl font-bold border-r-4 border-green-700">
              PEDRO SOARES
            </h1>
            <h2 className="block px-3 text-2xl font-bold">React + Typescript</h2>
          </div>
          <h1 className="mt-8 text-[2rem] leading-tight">
            <strong className="text-blue-500">
              ReactJS + Typescript + TailwindCSS
            </strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Com apenas algumas aulas construí uma aplicação em React usando
            algumas tecnologias do momento. Teve GraphQL, Typescript,
            TailwindCss entre outros...
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-lg mb-6 block">
            Diga seu nome e email para acessar a plataforma (:
          </strong>
          <form onSubmit={handleUser} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-500 rounded px-5 h-14"
              type="text"
              placeholder="Qual seu nome?"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-500 rounded px-5 h-14"
              type="email"
              placeholder="Qual seu email?"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:bg-green-300"
            >
              Entrar!!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
