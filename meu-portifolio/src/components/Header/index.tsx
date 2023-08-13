import { useState, useEffect } from "react";
import { HeaderStyled } from "./styled";
import { api } from "../../services/api";
import { UsersProps } from "../../components/Interfaces/UsersProps";

function Header() {
  const [userData, setUserData] = useState<UsersProps>();

  const load = async () => {
    const response = await api.get("");
    setUserData(response.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <HeaderStyled>
      <nav>
        <img
          src={userData && userData.avatar_url}
          alt={`Foto de ${userData && userData.name}`}
        />
        <p>{userData && userData.name}</p>
        <ul>
          <li>Início</li>
          <li>Portifólio</li>
          <li>Sobre</li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}

export { Header };
