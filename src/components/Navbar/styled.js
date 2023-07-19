import { styled } from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

const Logo = styled(logo)`
  width: 130px;
  height: auto;
  & path {
    fill: var(--gold);
  }
`;

export { Logo };
