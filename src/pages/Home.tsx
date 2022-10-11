import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_USER_MUTATION = gql`
  mutation MyMutation($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createUser] = useMutation(CREATE_USER_MUTATION);

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
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="max-w-[1100px] w-full flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Fiz uma aplicação,{" "}
            <strong className="text-blue-500">DO ZERO</strong>, com{" "}
            <strong className="text-blue-500">
              ReactJS + Typescript + TailwdidCss
            </strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas algumas aulas fizemos uma aplicação em React usando
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
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Qual seu nome?"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Qual seu nome?"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
            >
              Entrar!!
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/codemockup.png" alt="mockup" className="mt-10" />
    </div>
  );
};